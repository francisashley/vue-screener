export function isValidInput(data: unknown): boolean {
  const isObject = (val: unknown) => typeof val === "object" && val !== null;
  return (
    Array.isArray(data) &&
    data.every((row: unknown) => Array.isArray(row) || isObject(row))
  );
}

export interface NormalisedField {
  key: string;
  value: unknown;
  hasValue: boolean;
  type:
    | "string"
    | "number"
    | "boolean"
    // | "bigint"
    | "array"
    | "object"
    | "null"
    | "undefined"
    | "symbol";
}

export type NormalisedRow = NormalisedField[];

export interface UnknownObject {
  [key: string | number]: unknown;
}

export function normaliseInput(data: UnknownObject[]): NormalisedRow[] {
  // in the case that an array (data) of arrays (rows) has been provided [[],[],[]], convert to [{},{},{}]
  data = data.map((row) => (Array.isArray(row) ? { ...row } : row));

  // Normalise each field
  const normaliseField = (field: string, value: unknown): NormalisedField => ({
    key: field,
    value,
    type: getTypeOf(value),
    hasValue: value !== null || value !== undefined,
  });

  let normalisedData = data.map((row: UnknownObject): NormalisedRow => {
    return Object.keys(row).map(
      (key): NormalisedField => normaliseField(key, row[key]),
    );
  });

  // In the case that an array of objects has been passed in with different fields, ensure that all rows include all fields and in the same order.
  const fields = getFields(normalisedData);
  normalisedData = normalisedData.map((row) => {
    return fields.map((field) => {
      return (
        row.find((_field: NormalisedField) => _field.key === field) ||
        normaliseField(field, undefined)
      );
    });
  });

  return normalisedData;
}

export function getFields(rows: NormalisedRow[]): string[] {
  const fields = new Set<string>();

  for (const row of rows) {
    for (const field of row) {
      fields.add(field.key);
    }
  }

  return Array.from(fields);
}

export function pickFields(
  rows: NormalisedRow[],
  pickFields: string[],
): NormalisedRow[] {
  return rows.map((row) => {
    const pickedRow: NormalisedRow = [];
    pickFields.forEach((pickField) => {
      const pickedField = row.find((field) => field.key === pickField);
      if (pickedField) {
        pickedRow.push(pickedField);
      }
    });
    return pickedRow;
  });
}

export function excludeFields(
  rows: NormalisedRow[],
  excludeFields: string[],
): NormalisedRow[] {
  return rows.map((row) => {
    return row.filter((field) => !excludeFields.includes(field.key));
  });
}

export function getPaginated(options: {
  rows: NormalisedRow[];
  page: number;
  perPage: number;
  withPlaceholders: boolean;
}): NormalisedRow[] {
  let { rows = [] } = options;
  const { page = 1, perPage = 25, withPlaceholders = false } = options;

  const start = perPage * page;
  const end = start + perPage;

  rows = rows.slice(start, end);

  // provide placeholders when page does not meet perPage threshold
  if (withPlaceholders && rows.length !== perPage) {
    const emptyRows = Array(perPage).fill(null);
    return Object.assign(emptyRows, rows);
  }

  return rows;
}

export type DataType =
  | "string"
  | "number"
  | "boolean"
  | "symbol"
  | "undefined"
  | "object"
  | "null"
  | "array"
  | "object";

export function getTypeOf(value: unknown): DataType {
  if (typeof value === "string") {
    return "string";
  } else if (typeof value === "number") {
    return "number";
  } else if (typeof value === "boolean") {
    return "boolean";
  } else if (typeof value === "symbol") {
    return "symbol";
  } else if (typeof value === "undefined") {
    return "undefined";
  } else if (typeof value === "object") {
    if (value === null) {
      return "null";
    } else if (Array.isArray(value)) {
      return "array";
    }
    return "object";
  }

  throw `Could not establish type of \`${value}\``;
}
