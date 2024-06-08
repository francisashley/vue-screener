import {
  DataType,
  NeueColumn,
  NeueField,
  NeueItem,
  NormalisedField,
  NormalisedRow,
  UnknownObject,
} from '@/interfaces/screener'

/**
 * Checks if data is an array of arrays or objects.
 * @param {unknown} data - The data to check.
 * @returns {boolean} True if valid, false otherwise.
 */
export function isValidInput(data: unknown): boolean {
  const isObject = (val: unknown) => typeof val === 'object' && val !== null
  return Array.isArray(data) && data.every((row: unknown) => Array.isArray(row) || isObject(row))
}

/**
 * Transforms input data into a consistent format.
 * @param {UnknownObject[]} data - The input data.
 * @returns {NormalisedRow[]} The normalised data.
 */
export function normaliseInput(data: UnknownObject[]): NormalisedRow[] {
  // If the input data is an array of arrays, convert it to an array of objects.
  const transformedData = data.map((row) => (Array.isArray(row) ? { ...row } : row))

  // Normalise each field into an object with its key, value, type, and a flag indicating if it has a value.
  const normaliseField = (field: string, value: unknown): NormalisedField => ({
    key: field,
    value,
    type: getTypeOf(value),
    hasValue: value !== null || value !== undefined,
  })

  // Normalise each row into an array of normalised fields.
  const normalisedData = transformedData.map((row: UnknownObject): NormalisedRow => {
    return Object.keys(row).map((key): NormalisedField => normaliseField(key, row[key]))
  })

  // If the input data is an array of objects with different fields, ensure that all rows include all fields and in the same order.
  const fields = getFields(normalisedData)
  return normalisedData.map((row) => {
    return fields.map((field) => {
      const foundField = row.find((_field: NormalisedField) => _field.key === field)
      return foundField || normaliseField(field, undefined)
    })
  })
}

/**
 * Transforms input data into a consistent format.
 * @param {UnknownObject[]} data - The input data.
 * @returns {NeueItem[]} The normalised data.
 */
export function normaliseInputNeue(data: UnknownObject[]): NeueItem[] {
  // If the input data is an array of arrays, convert it to an array of objects.
  const transformedData = data.map((row) => (Array.isArray(row) ? { ...row } : row))

  // Normalise each field into an object with its key, value, type, and a flag indicating if it has a value.
  const normaliseFieldNeue = (field: string, value: unknown): NeueField => ({
    field,
    type: getTypeOf(value),
    value: value as any,
    htmlValue: String(value),
    hasValue: value !== null || value !== undefined,
  })

  // Normalise each row into an array of normalised fields.
  const normalisedData = transformedData.map((item: UnknownObject): NeueItem => {
    const fields: Record<string, NeueField> = {}
    Object.keys(item).forEach((key) => {
      fields[key] = normaliseFieldNeue(key, item[key])
    })

    return { data: item, fields }
  })

  // If the input data is an array of objects with different fields, ensure that all rows include all fields and in the same order.
  const fields = getFieldsNeue(normalisedData)
  return normalisedData.map((item) => {
    fields.forEach((field) => {
      if (!item.fields[field]) {
        item.fields[field] = normaliseFieldNeue(field, undefined)
      }
    })
    return item
  })
}

/**
 * Picks specified fields from normalised columns.
 * @param {NeueColumn[]} columns - The columns.
 * @param {string[]} pickFields - Fields to pick.
 * @returns {NeueColumn[]} Rows with picked fields.
 */
export function pickColumns(columns: NeueColumn[], pickFields: string[]): NeueColumn[] {
  return columns.filter((column) => pickFields.includes(column.field))
}

/**
 * Omits specified fields from normalised columns.
 * @param {NeueColumn[]} columns - The columns.
 * @param {string[]} omitFields - Fields to omit.
 * @returns {NeueColumn[]} Rows without omitted fields.
 */
export function omitColumns(columns: NeueColumn[], omitFields: string[]): NeueColumn[] {
  const omitFieldsSet = new Set(omitFields)
  return columns.filter((column) => !omitFieldsSet.has(column.field))
}

/**
 * Extracts unique field keys from normalised rows.
 * @param {NormalisedRow[]} rows - The normalised rows.
 * @returns {string[]} Unique field keys.
 */
export function getFields(rows: NormalisedRow[]): string[] {
  const fields = new Set<string>(rows.flatMap((row) => row.map((field) => field.key)))
  return Array.from(fields)
}

/**
 * Extracts unique field keys from normalised rows.
 * @param {NormalisedRow[]} rows - The normalised rows.
 * @returns {string[]} Unique field keys.
 */
export function getFieldsNeue(items: NeueItem[]): string[] {
  const fields = new Set<string>(items.flatMap((item) => Object.values(item.fields).map((field) => field.field)))
  return Array.from(fields)
}

/**
 * Picks specified fields from normalised rows.
 * @param {NormalisedRow[]} rows - The normalised rows.
 * @param {string[]} pickFields - Fields to pick.
 * @returns {NormalisedRow[]} Rows with picked fields.
 */
export function pickFields(rows: NormalisedRow[], pickFields: string[]): NormalisedRow[] {
  return rows.map((row) => row.filter((field) => pickFields.includes(field.key)))
}

/**
 * Omits specified fields from normalised rows.
 * @param {NormalisedRow[]} rows - The normalised rows.
 * @param {string[]} omitFields - Fields to omit.
 * @returns {NormalisedRow[]} Rows without omitted fields.
 */
export function omitFields(rows: NormalisedRow[], omitFields: string[]): NormalisedRow[] {
  const omitFieldsSet = new Set(omitFields)
  return rows.map((row) => row.filter((field) => !omitFieldsSet.has(field.key)))
}

/**
 * Returns a paginated subset of normalised rows.
 * @param {Object} options - The options for pagination.
 * @returns {NormalisedRow[]} Paginated rows.
 */
export function getPaginated({
  rows = [],
  page = 1,
  perPage = 25,
  withPlaceholders = false,
}: {
  rows: NormalisedRow[]
  page: number
  perPage: number
  withPlaceholders: boolean
}): NormalisedRow[] {
  const start = perPage * page
  const end = start + perPage

  rows = rows.slice(start, end)

  // provide placeholders when page does not meet perPage threshold
  if (withPlaceholders && rows.length !== perPage) {
    const emptyRows = Array(perPage).fill(null)
    return Object.assign(emptyRows, rows)
  }

  return rows
}

/**
 * Returns a paginated subset of normalised rows.
 * @param {Object} options - The options for pagination.
 * @returns {NeueItem[]} Paginated rows.
 */
export function getPaginatedNeue({
  items = [],
  page = 1,
  perPage = 25,
  withPlaceholders = false,
}: {
  items: NeueItem[]
  page: number
  perPage: number
  withPlaceholders: boolean
}): NeueItem[] {
  const start = perPage * page
  const end = start + perPage

  items = items.slice(start, end)

  // provide placeholders when page does not meet perPage threshold
  if (withPlaceholders && items.length !== perPage) {
    const emptyRows = Array(perPage).fill(null)
    return Object.assign(emptyRows, items)
  }

  return items
}

/**
 * Returns the data type of the value.
 * @param {unknown} value - The value to check.
 * @returns {DataType} Data type of the value.
 * @throws If type of value cannot be established.
 */
export function getTypeOf(value: unknown): DataType {
  switch (typeof value) {
    case 'string':
      return 'string'
    case 'number':
      return 'number'
    case 'boolean':
      return 'boolean'
    case 'symbol':
      return 'symbol'
    case 'undefined':
      return 'undefined'
    case 'object':
      if (value === null) {
        return 'null'
      } else if (Array.isArray(value)) {
        return 'array'
      }
      return 'object'
    default:
      throw `Could not establish type of \`${value}\``
  }
}
