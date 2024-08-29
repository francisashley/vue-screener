import { DataType, ColDef, Item, UnknownObject } from '@/interfaces/screener'
import { orderBy } from 'natural-orderby'
import { v4 as uuidv4 } from 'uuid'

/**
 * Checks if data is an array of arrays or objects.
 * @param {unknown} data - The data to check.
 * @returns {boolean} True if valid, false otherwise.
 */
export function isValidInput(data: unknown): data is UnknownObject[] {
  const isObject = (val: unknown) => typeof val === 'object' && val !== null
  return Array.isArray(data) && data.every((item: unknown) => Array.isArray(item) || isObject(item))
}

/**
 * Transforms input data into a consistent format.
 * @param {UnknownObject[]} data - The input data.
 * @returns {Item[]} The normalised data.
 */
export function normaliseInput(data: UnknownObject[]): Item[] {
  // If the input data is an array of arrays, convert it to an array of objects.
  const transformedData = data.map((item) => (Array.isArray(item) ? { ...item } : item))

  // Normalise each item into an array of normalised fields.
  return transformedData.map((item: UnknownObject): Item => {
    return { id: uuidv4(), data: item }
  })
}

/**
 * Picks specified fields from normalised columns.
 * @param {ColDef[]} columns - The columns.
 * @param {string[]} pickColumns - Fields to pick.
 * @returns {ColDef[]} Rows with picked fields.
 */
export function pickColumns(columns: ColDef[], pickColumns: (string | number)[]): ColDef[] {
  return columns.filter((column) => pickColumns.includes(column.field))
}

/**
 * Omits specified fields from normalised columns.
 * @param {ColDef[]} columns - The columns.
 * @param {string[]} omitColumns - Fields to omit.
 * @returns {ColDef[]} Rows without omitted fields.
 */
export function omitColumns(columns: ColDef[], omitColumns: (string | number)[]): ColDef[] {
  const omitFieldsSet = new Set(omitColumns)
  return columns.filter((column) => !omitFieldsSet.has(column.field))
}

/**
 * Extracts unique field keys from normalised items.
 * @param {Item[]} items - The normalised items.
 * @returns {string[]} Unique field keys.
 */
export function getFields(items: Item[]): string[] {
  const fields = new Set<string>(items.flatMap((item) => Object.keys(item.data)))
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
  itemsPerPage = 25,
}: {
  items: Item[]
  page: number
  itemsPerPage: number
}): Item[] {
  const start = itemsPerPage * page
  const end = start + itemsPerPage
  return items.slice(start, end)
}

export const sortItems = (
  data: Item[],
  options: { sortField: string | number | null; sortDirection: 'asc' | 'desc' },
): Item[] => {
  const sortField = options.sortField
  const sortDirection = options.sortDirection

  if (sortField && sortDirection) {
    return [...orderBy(data, [(item: Item) => item.data[sortField]], [sortDirection])]
  } else {
    return data
  }
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
