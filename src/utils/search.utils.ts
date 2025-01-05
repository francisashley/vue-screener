import { Row, Column } from '@/interfaces/vue-screener'
import { escapeRegExp } from './regex.utils'

/**
 * Check if a subject string meets the search criteria.
 *
 * @param {string} subject - The subject string to be searched.
 * @param {string} pattern - The search query pattern.
 * @param {string} options - The search options.
 * @param {boolean} options.caseSensitive - Whether to match the case.
 * @param {boolean} options.wholeWord - Whether to match whole words.
 * @param {boolean} options.regex - Whether to use regular expressions for the search.
 * @returns {boolean}
 */
const testCriteria = (
  subject: string,
  pattern: string,
  options: {
    caseSensitive: boolean
    wholeWord: boolean
    regex: boolean
  },
): boolean => {
  const { caseSensitive = false, wholeWord = false, regex = false } = options

  if (!regex) {
    pattern = escapeRegExp(pattern)
  }

  if (wholeWord) {
    pattern = `\\b(${pattern})\\b`
  }

  const flags = caseSensitive ? 'g' : 'gi'

  return new RegExp(pattern, flags).test(subject)
}

/**
 * Parse search query and extract filters.
 *
 * - Include filters use the pattern: `field:value`.
 * - Exclude filters use the pattern: `-field:value`.
 *
 * @param {string} text - The search query to parse.
 * @returns {{
 *   text: string,
 *   includeFilters: [field: string, term: string][],
 *   excludeFilters: [field: string, term: string][]
 * }} - Parsed search query, include filters, and exclude filters.
 */
const parseSearchText = (text: string) => {
  const excludeFilters: [field: string, term: string][] = []
  // get exclude filters that look like: field:term
  text = text.replace(/(?<!\w)-\w+:\w+/g, (match) => {
    const [field, term] = match.replace('-', '').split(':')
    excludeFilters.push([field, term])
    return ''
  })

  // get exclude filters that look like: -field:"term" or -field:"some term"
  text = text
    .replace(/(?<!\w)-\w+:"[^"]*"$/g, (match) => {
      const [field, term] = match.replace('-', '').split(':')
      excludeFilters.push([field, term.slice(1, -1)])
      return ''
    })
    .trim()

  const includeFilters: [field: string, term: string][] = []
  // get include filters that look like: field:term
  text = text
    .replace(/\b\w+:\w+\b/g, (match) => {
      const [field, term] = match.split(':')
      includeFilters.push([field, term])
      return ''
    })
    .trim()

  // get include filters that look like: field:"term" or field:"some term"
  text = text
    .replace(/\b\w+:"[^"]*"$/g, (match) => {
      const [field, term] = match.split(':')
      includeFilters.push([field, term.slice(1, -1)])
      return ''
    })
    .trim()

  return {
    text,
    excludeFilters,
    includeFilters,
  }
}

/**
 * Search for rows based on specified criteria.
 *
 * @param {Object} options - The search options.
 * @param {Row[]} options.rows - The data to search.
 * @param {string} options.text - The search query string.
 * @param {boolean} options.regex - Whether to use regular expressions for the search.
 * @param {boolean} options.caseSensitive - Whether to match the case.
 * @param {boolean} options.wholeWord - Whether to match whole words.
 * @returns {Row[]} - The matched data.
 */
export function search(options: {
  rows: Row[]
  columns: Column[]
  text: string
  regex: boolean
  caseSensitive: boolean
  wholeWord: boolean
}): Row[] {
  const { text = '' } = options

  if (!text) return options.rows

  // Parse search query and extract filters.
  const { text: parsedText, excludeFilters, includeFilters } = parseSearchText(text)

  // Get the search options.
  const { rows, regex = false, caseSensitive = false, wholeWord = false } = options

  const testIncludeFilters = (filters: [string, string][], row: Row): boolean => {
    return filters.every(([field, value]) => {
      if (row.cells[field]) {
        return testCriteria(row.cells[field].stringValue, value, {
          caseSensitive,
          wholeWord: true,
          regex,
        })
      }
    })
  }

  // Filter the rows.
  return rows
    .filter((row) => {
      // Remove exclude matches
      const hasExcludeFilters = Boolean(excludeFilters.length)
      if (hasExcludeFilters) return true
      return !excludeFilters.some(([field, term]) => {
        return testCriteria(row.cells[field].stringValue, term, { caseSensitive, wholeWord: true, regex })
      })
    })
    .map((row) => {
      let shouldInclude = true
      let meetsSearchCriteria = true

      if (includeFilters.length && !testIncludeFilters(includeFilters, row)) {
        shouldInclude = false
      }

      meetsSearchCriteria = options.columns.some((column) => {
        if (
          testCriteria(String(column.field ? row.cells[column.field].stringValue : ''), parsedText, {
            caseSensitive,
            wholeWord,
            regex,
          })
        ) {
          return true
        }
      })

      const hasMatch = shouldInclude && meetsSearchCriteria

      return { hasMatch, row }
    })
    .filter(({ hasMatch }) => hasMatch)
    .map(({ row }) => row)
}
