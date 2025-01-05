import { Row } from '@/interfaces/vue-screener'
import { escapeRegExp } from './regex.utils'
import { highlightMatches } from './text.utils'

interface SearchOptions {
  regex: boolean
  caseSensitive: boolean
  wholeWord: boolean
  disableSearchHighlight?: boolean
}

interface SearchFilter {
  field: string
  value: string
  exclude: boolean
}

class Search {
  private searchOptions: SearchOptions
  private rows: Row[]
  private filters: SearchFilter[] = []

  constructor(rows: Row[], options: SearchOptions) {
    this.rows = rows
    this.searchOptions = options
  }

  public execute(searchText: string): Row[] {
    if (!searchText) {
      return this.rows
    }

    // Parse the search text into filters and remaining text
    const { text, filters } = this.parseSearchText(searchText)
    this.filters = filters

    // Apply filters and search
    return this.rows
      .map((row) => {
        // Deep clone to avoid mutating original
        const newRow = this.cloneRow(row)

        // Process each cell
        Object.entries(newRow.cells).forEach(([field, cell]) => {
          // Reset search state
          cell.isSearchMatch = false
          cell.htmlValue = String(cell.value)

          // Check if cell matches search criteria
          if (this.matchesSearch(cell.stringValue, text) || this.matchesFilters(field, cell.stringValue)) {
            cell.isSearchMatch = true
            if (!this.searchOptions.disableSearchHighlight) {
              cell.htmlValue = this.highlightValue(cell.stringValue, text)
            }
          }
        })

        return newRow
      })
      .filter((row) => this.shouldKeepRow(row))
  }

  private parseSearchText(text: string): { text: string; filters: SearchFilter[] } {
    const filters: SearchFilter[] = []
    let remainingText = text

    // Match field:value and -field:value patterns
    const filterPattern = /(-?)(\w+):(?:"([^"]+)"|(\S+))/g
    remainingText = text
      .replace(filterPattern, (_, exclude, field, quotedValue, value) => {
        filters.push({
          field,
          value: quotedValue || value,
          exclude: exclude === '-',
        })
        return ''
      })
      .trim()

    return { text: remainingText, filters }
  }

  private matchesSearch(value: string, pattern: string): boolean {
    if (!pattern) return false

    const { regex, caseSensitive, wholeWord } = this.searchOptions

    let searchPattern = regex ? pattern : escapeRegExp(pattern)
    if (wholeWord) {
      searchPattern = `\\b${searchPattern}\\b`
    }

    const flags = caseSensitive ? 'g' : 'gi'
    return new RegExp(searchPattern, flags).test(value)
  }

  private matchesFilters(field: string, value: string): boolean {
    if (this.filters.length === 0) return false

    return this.filters.some((filter) => {
      if (filter.field !== field) return false

      const matches = this.matchesSearch(value, filter.value)
      return filter.exclude ? !matches : matches
    })
  }

  private shouldKeepRow(row: Row): boolean {
    return Object.values(row.cells).some((cell) => cell.isSearchMatch)
  }

  private highlightValue(value: string, pattern: string): string {
    if (!pattern) return value
    return highlightMatches(value, pattern)
  }

  private cloneRow(row: Row): Row {
    return {
      id: row.id,
      cells: Object.fromEntries(Object.entries(row.cells).map(([key, cell]) => [key, { ...cell }])),
    }
  }
}

export default Search
