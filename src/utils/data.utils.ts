import { DataType, Row, Item, Column } from '@/interfaces/vue-screener'
import { orderBy } from 'natural-orderby'
import { v4 as uuidv4 } from 'uuid'

/**
 * Checks if data is an array of arrays or objects.
 * @param {unknown} data - The data to check.
 * @returns {boolean} True if valid, false otherwise.
 */
export function isValidInput(data: unknown): data is Item[] {
  const isObject = (val: unknown) => typeof val === 'object' && val !== null
  return Array.isArray(data) && data.every((item: unknown) => Array.isArray(item) || isObject(item))
}

/**
 * Transforms input data into a consistent format.
 * @param {Item[]} data - The input data.
 * @returns {Row[]} The normalised data.
 */
export function normaliseInput(data: Item[]): Row[] {
  // If the input data is an array of arrays, convert it to an array of objects.
  const transformedData = data.map((item) => (Array.isArray(item) ? { ...item } : item))

  // Normalise each item into an array of normalised fields.
  return transformedData.map((item: Item): Row => {
    return { id: uuidv4(), data: item }
  })
}

/**
 * Extracts unique field keys from rows.
 * @param {Row[]} rows - The rows.
 * @returns {string[]} Unique field keys.
 */
export function getFields(rows: Row[]): string[] {
  const fields = new Set<string>(rows.flatMap((item) => Object.keys(item.data)))
  return Array.from(fields)
}

/**
 * Creates a column definition by merging the provided partial column definition
 * with default values.
 *
 * @param {Partial<Column>} colDef - The partial column definition to merge with defaults.
 * @returns {Column} The complete column definition.
 */
export const createColumnDef = (colDef: Partial<Column>): Column => ({
  field: '',
  label: '',
  isSticky: false,
  isSortable: true,
  defaultSortDirection: 'desc',
  width: 'auto',
  order: 0,
  only: false,
  hidden: false,
  ...colDef,
})

/**
 * Returns a paginated subset of rows.
 * @param {Object} options - The options for pagination.
 * @returns {Row[]} Paginated rows.
 */
export function getPaginated({
  rows = [],
  page = 1,
  itemsPerPage = 25,
}: {
  rows: Row[]
  page: number
  itemsPerPage: number
}): Row[] {
  const start = itemsPerPage * page
  const end = start + itemsPerPage
  return rows.slice(start, end)
}

export const sortItems = (
  data: Row[],
  options: { sortField: string | number | null; sortDirection: 'asc' | 'desc' },
): Row[] => {
  const sortField = options.sortField
  const sortDirection = options.sortDirection

  if (sortField && sortDirection) {
    return [...orderBy(data, [(item: Row) => item.data[sortField]], [sortDirection])]
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
