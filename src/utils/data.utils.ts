import { DataType, Row, Column, Cell } from '@/interfaces/vue-screener'
import { orderBy } from 'natural-orderby'
import { v4 as uuidv4 } from 'uuid'

/**
 * Checks if data is an array of arrays or objects.
 * @param {unknown} data - The data to check.
 * @returns {boolean} True if valid, false otherwise.
 */
export function isValidInput(data: unknown): data is Row[] {
  const isObject = (val: unknown) => typeof val === 'object' && val !== null
  return Array.isArray(data) && data.every((row: unknown) => Array.isArray(row) || isObject(row))
}

/**
 * Transforms input data into a consistent format.
 * @param {Row[]} data - The input data.
 * @returns {Row[]} The normalised data.
 */
export function convertToRows(data: any[]): Row[] {
  return data.map((row) => {
    const rowData = Array.isArray(row) ? Object.fromEntries(row.entries()) : row
    const cells: Record<string | number, Cell> = {}

    Object.entries(rowData).forEach(([key, value]) => {
      cells[key] = {
        value: value,
        stringValue: String(value),
        htmlValue: String(value),
        type: getTypeOf(value),
      }
    })

    return { id: uuidv4(), cells }
  })
}

/**
 * Extracts unique field keys from rows.
 * @param {Row[]} rows - The rows.
 * @returns {string[]} Unique field keys.
 */
export function getFields(rows: Row[]): string[] {
  const fields = new Set<string>(rows.flatMap((row) => Object.keys(row.cells)))
  return Array.from(fields)
}

/**
 * Creates a column definition by merging the provided partial column definition
 * with default values.
 *
 * @param {Partial<Column>} column - The partial column definition to merge with defaults.
 * @returns {Column} The complete column definition.
 */
export const createColumn = (column: Partial<Column>): Column => ({
  field: '',
  isPinned: false,
  isSortable: true,
  defaultSortDirection: 'desc',
  only: false,
  width: 'minmax(100px,auto)',
  hidden: false,
  truncate: true,
  ...column,
})

/**
 * Returns a paginated subset of rows.
 * @param {Object} options - The options for pagination.
 * @returns {Row[]} Paginated rows.
 */
export function getPaginated({
  rows = [],
  page = 1,
  rowsPerPage = 25,
}: {
  rows: Row[]
  page: number
  rowsPerPage: number
}): Row[] {
  const start = rowsPerPage * page
  const end = start + rowsPerPage
  return rows.slice(start, end)
}

export const sortRows = (
  data: Row[],
  options: {
    sortField: string | number | null
    sortDirection: 'asc' | 'desc'
    invertSort?: boolean
  },
): Row[] => {
  const sortField = options.sortField
  const sortDirection = options.invertSort ? (options.sortDirection === 'asc' ? 'desc' : 'asc') : options.sortDirection
  if (sortField && sortDirection) {
    return [...orderBy(data, [(row: Row) => row.cells[sortField]], [sortDirection])]
  }
  return data
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
