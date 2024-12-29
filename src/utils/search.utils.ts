import { Row, ColDef } from '@/interfaces/vue-screener'
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
 * @param {string} searchText - The search query to parse.
 * @returns {{
 *   searchText: string,
 *   includeFilters: [field: string, value: string][],
 *   excludeFilters: [field: string, value: string][]
 * }} - Parsed search query, include filters, and exclude filters.
 */
const parseSearchText = (searchText: string) => {
  const excludeFilters: [field: string, value: string][] = []
  // get exclude filters that look like: field:value
  searchText = searchText.replace(/(?<!\w)-\w+:\w+/g, (match) => {
    const [field, value] = match.replace('-', '').split(':')
    excludeFilters.push([field, value])
    return ''
  })

  // get exclude filters that look like: -field:"value" or -field:"some value"
  searchText = searchText
    .replace(/(?<!\w)-\w+:"[^"]*"$/g, (match) => {
      const [field, value] = match.replace('-', '').split(':')
      excludeFilters.push([field, value.slice(1, -1)])
      return ''
    })
    .trim()

  const includeFilters: [field: string, value: string][] = []
  // get include filters that look like: field:value
  searchText = searchText
    .replace(/\b\w+:\w+\b/g, (match) => {
      const [field, value] = match.split(':')
      includeFilters.push([field, value])
      return ''
    })
    .trim()

  // get include filters that look like: field:"value" or field:"some value"
  searchText = searchText
    .replace(/\b\w+:"[^"]*"$/g, (match) => {
      const [field, value] = match.split(':')
      includeFilters.push([field, value.slice(1, -1)])
      return ''
    })
    .trim()

  return {
    searchText,
    excludeFilters,
    includeFilters,
  }
}

/**
 * Search for rows based on specified criteria.
 *
 * @param {Object} options - The search options.
 * @param {Row[]} options.rows - The data to search.
 * @param {string} options.searchText - The search query string.
 * @param {boolean} options.regex - Whether to use regular expressions for the search.
 * @param {boolean} options.caseSensitive - Whether to match the case.
 * @param {boolean} options.wholeWord - Whether to match whole words.
 * @returns {Row[]} - The matched data.
 */
export function search(options: {
  rows: Row[]
  columnDefs: ColDef[]
  searchText: string
  regex: boolean
  caseSensitive: boolean
  wholeWord: boolean
}): Row[] {
  const { searchText = '' } = options

  if (!searchText) return options.rows

  // Parse search query and extract filters.
  const { searchText: parsedSearchText, excludeFilters, includeFilters } = parseSearchText(searchText)

  // Get the search options.
  const { rows, regex = false, caseSensitive = false, wholeWord = false } = options

  // Check if any of the filters match the item.
  const testExcludeFilters = (filters: [string, string][], row: Row): boolean => {
    return filters.some(([field, value]) => {
      if (row.data[field]) {
        return testCriteria(row.data[field].value as string, value, {
          caseSensitive,
          wholeWord: true,
          regex,
        })
      }
    })
  }

  const testIncludeFilters = (filters: [string, string][], row: Row): boolean => {
    return filters.every(([field, value]) => {
      if (row.data[field]) {
        return testCriteria(row.data[field].value as string, value, {
          caseSensitive,
          wholeWord: true,
          regex,
        })
      }
    })
  }

  // Filter the rows.
  return rows.filter((item): boolean => {
    let shouldExclude = false
    let shouldInclude = true
    let meetsSearchCriteria = true

    if (excludeFilters.length && testExcludeFilters(excludeFilters, item)) {
      shouldExclude = true
    }

    if (includeFilters.length && !testIncludeFilters(includeFilters, item)) {
      shouldInclude = false
    }

    meetsSearchCriteria = options.columnDefs.some((columnDef) => {
      if (
        testCriteria(String(columnDef.field ? item.data[columnDef.field] : ''), parsedSearchText, {
          caseSensitive,
          wholeWord,
          regex,
        })
      ) {
        return true
      }
    })

    return !shouldExclude && shouldInclude && meetsSearchCriteria
  })
}
