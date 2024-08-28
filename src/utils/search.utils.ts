import { Field, Item } from '@/interfaces/screener'
import { escapeRegExp } from './regex.utils'

/**
 * Check if a subject string meets the search criteria.
 *
 * @param {string} subject - The subject string to be searched.
 * @param {string} pattern - The search query pattern.
 * @param {string} options - The search options.
 * @param {boolean} options.matchCase - Whether to match the case.
 * @param {boolean} options.matchWord - Whether to match whole words.
 * @param {boolean} options.matchRegex - Whether to use regular expressions for the search.
 * @returns {boolean}
 */
const testCriteria = (
  subject: string,
  pattern: string,
  options: {
    matchCase: boolean
    matchWord: boolean
    matchRegex: boolean
  },
): boolean => {
  const { matchCase = false, matchWord = false, matchRegex = false } = options

  if (!matchRegex) {
    pattern = escapeRegExp(pattern)
  }

  if (matchWord) {
    pattern = `\\b(${pattern})\\b`
  }

  const flags = matchCase ? 'g' : 'gi'

  return new RegExp(pattern, flags).test(subject)
}

/**
 * Parse search query and extract filters.
 *
 * - Include filters use the pattern: `field:value`.
 * - Exclude filters use the pattern: `-field:value`.
 *
 * @param {string} searchQuery - The search query to parse.
 * @returns {{
 *   searchQuery: string,
 *   includeFilters: [field: string, value: string][],
 *   excludeFilters: [field: string, value: string][]
 * }} - Parsed search query, include filters, and exclude filters.
 */
const parseSearchQuery = (searchQuery: string) => {
  const excludeFilters: [field: string, value: string][] = []
  // get exclude filters that look like: field:value
  searchQuery = searchQuery.replace(/(?<!\w)-\w+:\w+/g, (match) => {
    const [field, value] = match.replace('-', '').split(':')
    excludeFilters.push([field, value])
    return ''
  })

  // get exclude filters that look like: -field:"value" or -field:"some value"
  searchQuery = searchQuery
    .replace(/(?<!\w)-\w+:"[^"]*"$/g, (match) => {
      const [field, value] = match.replace('-', '').split(':')
      excludeFilters.push([field, value.slice(1, -1)])
      return ''
    })
    .trim()

  const includeFilters: [field: string, value: string][] = []
  // get include filters that look like: field:value
  searchQuery = searchQuery
    .replace(/\b\w+:\w+\b/g, (match) => {
      const [field, value] = match.split(':')
      includeFilters.push([field, value])
      return ''
    })
    .trim()

  // get include filters that look like: field:"value" or field:"some value"
  searchQuery = searchQuery
    .replace(/\b\w+:"[^"]*"$/g, (match) => {
      const [field, value] = match.split(':')
      includeFilters.push([field, value.slice(1, -1)])
      return ''
    })
    .trim()

  return {
    searchQuery,
    excludeFilters,
    includeFilters,
  }
}

/**
 * Search for items based on specified criteria.
 *
 * @param {Object} options - The search options.
 * @param {Item[]} options.items - The data to search.
 * @param {string} options.searchQuery - The search query string.
 * @param {boolean} options.matchRegex - Whether to use regular expressions for the search.
 * @param {boolean} options.matchCase - Whether to match the case.
 * @param {boolean} options.matchWord - Whether to match whole words.
 * @returns {Item[]} - The matched data.
 */
export function search(options: {
  items: Item[]
  searchQuery: string
  matchRegex: boolean
  matchCase: boolean
  matchWord: boolean
}): Item[] {
  const { searchQuery = '' } = options

  if (!searchQuery) return options.items

  // Parse search query and extract filters.
  const { searchQuery: parsedSearchQuery, excludeFilters, includeFilters } = parseSearchQuery(searchQuery)

  // Get the search options.
  const { items, matchRegex = false, matchCase = false, matchWord = false } = options

  // Check if any of the filters match the item.
  const testExcludeFilters = (filters: [string, string][], itemMap: Record<string, Field>): boolean => {
    return filters.some(([field, value]) => {
      if (itemMap[field]) {
        return testCriteria(itemMap[field].value as string, value, {
          matchCase,
          matchWord: true,
          matchRegex,
        })
      }
    })
  }

  const testIncludeFilters = (filters: [string, string][], itemMap: Record<string, Field>): boolean => {
    return filters.every(([field, value]) => {
      if (itemMap[field]) {
        return testCriteria(itemMap[field].value as string, value, {
          matchCase,
          matchWord: true,
          matchRegex,
        })
      }
    })
  }

  // Filter the items.
  return items.filter((item): boolean => {
    // Create a map of the item fields for easy look up.
    const itemMap: Record<string, Field> = item.fields

    let shouldExclude = false
    let shouldInclude = true
    let meetsSearchCriteria = true

    if (excludeFilters.length && testExcludeFilters(excludeFilters, itemMap)) {
      shouldExclude = true
    }

    if (includeFilters.length && !testIncludeFilters(includeFilters, itemMap)) {
      shouldInclude = false
    }

    meetsSearchCriteria = Object.values(item.fields).some((field) => {
      if (
        testCriteria(String(field.value ?? ''), parsedSearchQuery, {
          matchCase,
          matchWord,
          matchRegex,
        })
      ) {
        return true
      }
    })

    return !shouldExclude && shouldInclude && meetsSearchCriteria
  })
}
