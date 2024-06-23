import { DataType, Column, Field, Item, UnknownObject, Config } from '@/interfaces/screener'

/**
 * Checks if data is an array of arrays or objects.
 * @param {unknown} data - The data to check.
 * @returns {boolean} True if valid, false otherwise.
 */
export function isValidInput(data: unknown): boolean {
  const isObject = (val: unknown) => typeof val === 'object' && val !== null
  return Array.isArray(data) && data.every((item: unknown) => Array.isArray(item) || isObject(item))
}

/**
 * Transforms input data into a consistent format.
 * @param {UnknownObject[]} data - The input data.
 * @returns {Item[]} The normalised data.
 */
export function normaliseInput(data: UnknownObject[], config: Config): Item[] {
  // If the input data is an array of arrays, convert it to an array of objects.
  const transformedData = data.map((item) => (Array.isArray(item) ? { ...item } : item))

  // Normalise each field into an object with its key, value, type, and a flag indicating if it has a value.
  const normaliseField = (field: string, value: unknown): Field => {
    const format = config[field]?.format
    const _value = format?.(value as string | number) ?? value
    return {
      field,
      type: getTypeOf(value),
      value: String(_value),
      htmlValue: String(_value),
      hasValue: value !== null || value !== undefined,
    }
  }

  // Normalise each item into an array of normalised fields.
  const normalisedData = transformedData.map((item: UnknownObject): Item => {
    const fields: Record<string, Field> = {}
    Object.keys(item).forEach((key) => {
      fields[key] = normaliseField(key, item[key])
    })

    return { data: item, fields }
  })

  // If the input data is an array of objects with different fields, ensure that all items include all fields and in the same order.
  const fields = getFields(normalisedData)
  return normalisedData.map((item) => {
    fields.forEach((field) => {
      if (!item.fields[field]) {
        item.fields[field] = normaliseField(field, undefined)
      }
    })
    return item
  })
}

/**
 * Picks specified fields from normalised columns.
 * @param {Column[]} columns - The columns.
 * @param {string[]} pickColumns - Fields to pick.
 * @returns {Column[]} Rows with picked fields.
 */
export function pickColumns(columns: Column[], pickColumns: (string | number)[]): Column[] {
  return columns.filter((column) => pickColumns.includes(column.field))
}

/**
 * Omits specified fields from normalised columns.
 * @param {Column[]} columns - The columns.
 * @param {string[]} omitColumns - Fields to omit.
 * @returns {Column[]} Rows without omitted fields.
 */
export function omitColumns(columns: Column[], omitColumns: (string | number)[]): Column[] {
  const omitFieldsSet = new Set(omitColumns)
  return columns.filter((column) => !omitFieldsSet.has(column.field))
}

/**
 * Extracts unique field keys from normalised items.
 * @param {Item[]} items - The normalised items.
 * @returns {string[]} Unique field keys.
 */
export function getFields(items: Item[]): string[] {
  const fields = new Set<string>(items.flatMap((item) => Object.values(item.fields).map((field) => field.field)))
  return Array.from(fields)
}

/**
 * Returns a paginated subset of normalised items.
 * @param {Object} options - The options for pagination.
 * @returns {Item[]} Paginated items.
 */
export function getPaginated({
  items = [],
  page = 1,
  perPage = 25,
  withPlaceholders = false,
}: {
  items: Item[]
  page: number
  perPage: number
  withPlaceholders: boolean
}): Item[] {
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
