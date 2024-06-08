import { DataType, NormalisedField, NormalisedRow, UnknownObject } from '@/interfaces/screener'

export function isValidInput(data: unknown): boolean {
  const isObject = (val: unknown) => typeof val === 'object' && val !== null
  return Array.isArray(data) && data.every((row: unknown) => Array.isArray(row) || isObject(row))
}

/**
 * Normalises the input data into a consistent format.
 *
 * @param {UnknownObject[]} data - The input data to be normalised. This can be an array of objects or an array of arrays.
 * @returns {NormalisedRow[]} The normalised data. Each row is an array of objects, where each object represents a field with its key, value, type, and a flag indicating if it has a value.
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

export function getFields(rows: NormalisedRow[]): string[] {
  const fields = new Set<string>()

  for (const row of rows) {
    for (const field of row) {
      fields.add(field.key)
    }
  }

  return Array.from(fields)
}

export function pickFields(rows: NormalisedRow[], pickFields: string[]): NormalisedRow[] {
  return rows.map((row) => {
    const pickedRow: NormalisedRow = []
    pickFields.forEach((pickField) => {
      const pickedField = row.find((field) => field.key === pickField)
      if (pickedField) {
        pickedRow.push(pickedField)
      }
    })
    return pickedRow
  })
}

export function omitFields(rows: NormalisedRow[], omitFields: string[]): NormalisedRow[] {
  return rows.map((row) => {
    return row.filter((field) => !omitFields.includes(field.key))
  })
}

export function getPaginated(options: {
  rows: NormalisedRow[]
  page: number
  perPage: number
  withPlaceholders: boolean
}): NormalisedRow[] {
  let { rows = [] } = options
  const { page = 1, perPage = 25, withPlaceholders = false } = options

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

export function getTypeOf(value: unknown): DataType {
  if (typeof value === 'string') {
    return 'string'
  } else if (typeof value === 'number') {
    return 'number'
  } else if (typeof value === 'boolean') {
    return 'boolean'
  } else if (typeof value === 'symbol') {
    return 'symbol'
  } else if (typeof value === 'undefined') {
    return 'undefined'
  } else if (typeof value === 'object') {
    if (value === null) {
      return 'null'
    } else if (Array.isArray(value)) {
      return 'array'
    }
    return 'object'
  }

  throw `Could not establish type of \`${value}\``
}
