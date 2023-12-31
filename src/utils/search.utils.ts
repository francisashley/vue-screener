import { escapeRegExp } from "./regex.utils";
import { NormalisedField, NormalisedRow } from "./data.utils";

/**
 * Check if a subject string meets the search criteria.
 *
 * @param {string} subject - The subject string to be searched.
 * @param {string} pattern - The search query pattern.
 * @param {string} options - The search options.
 * @param {boolean} options.matchCase - Whether to match the case.
 * @param {boolean} options.matchWord - Whether to match whole words.
 * @param {boolean} options.useRegExp - Whether to use regular expressions for the search.
 * @returns {boolean}
 */
const testCriteria = (
  subject: string,
  pattern: string,
  options: {
    matchCase: boolean;
    matchWord: boolean;
    useRegExp: boolean;
  }
): boolean => {
  const { matchCase = false, matchWord = false, useRegExp = false } = options;

  if (!useRegExp) {
    pattern = escapeRegExp(pattern);
  }

  if (matchWord) {
    pattern = `\\b(${pattern})\\b`;
  }

  const flags = matchCase ? "g" : "gi";

  return new RegExp(pattern, flags).test(subject);
};

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
  const excludeFilters: [field: string, value: string][] = [];
  // get exclude filters that look like: field:value
  searchQuery = searchQuery.replace(/(?<!\w)-\w+:\w+/g, (match) => {
    const [field, value] = match.replace("-", "").split(":");
    excludeFilters.push([field, value]);
    return "";
  });

  // get exclude filters that look like: -field:"value" or -field:"some value"
  searchQuery = searchQuery
    .replace(/(?<!\w)-\w+:"[^"]*"$/g, (match) => {
      const [field, value] = match.replace("-", "").split(":");
      excludeFilters.push([field, value.slice(1, -1)]);
      return "";
    })
    .trim();

  const includeFilters: [field: string, value: string][] = [];
  // get include filters that look like: field:value
  searchQuery = searchQuery
    .replace(/\b\w+:\w+\b/g, (match) => {
      const [field, value] = match.split(":");
      includeFilters.push([field, value]);
      return "";
    })
    .trim();

  // get include filters that look like: field:"value" or field:"some value"
  searchQuery = searchQuery
    .replace(/\b\w+:"[^"]*"$/g, (match) => {
      const [field, value] = match.split(":");
      includeFilters.push([field, value.slice(1, -1)]);
      return "";
    })
    .trim();

  return {
    searchQuery,
    excludeFilters,
    includeFilters,
  };
};

/**
 * Search for rows based on specified criteria.
 *
 * @param {Object} options - The search options.
 * @param {NormalisedRow[]} options.rows - The data to search.
 * @param {string} options.searchQuery - The search query string.
 * @param {boolean} options.useRegExp - Whether to use regular expressions for the search.
 * @param {boolean} options.matchCase - Whether to match the case.
 * @param {boolean} options.matchWord - Whether to match whole words.
 * @returns {NormalisedRow[]} - The matched data.
 */
export function search(options: {
  rows: NormalisedRow[];
  searchQuery: string;
  useRegExp: boolean;
  matchCase: boolean;
  matchWord: boolean;
}): NormalisedRow[] {
  let { searchQuery = "" } = options;

  if (!searchQuery) return options.rows;

  // Parse search query and extract filters.
  let {
    searchQuery: parsedSearchQuery,
    excludeFilters,
    includeFilters,
  } = parseSearchQuery(searchQuery);

  // Get the search options.
  const { rows, useRegExp = false, matchCase = false, matchWord = false } = options;

  // Check if any of the filters match the row.
  const testExcludeFilters = (
    filters: [string, string][],
    rowMap: Record<string, NormalisedField>
  ): boolean => {
    return filters.some(([field, value]) => {
      if (rowMap[field]) {
        return testCriteria(rowMap[field].value as string, value, {
          matchCase,
          matchWord: true,
          useRegExp,
        });
      }
    });
  };

  const testIncludeFilters = (
    filters: [string, string][],
    rowMap: Record<string, NormalisedField>
  ): boolean => {
    return filters.every(([field, value]) => {
      if (rowMap[field]) {
        return testCriteria(rowMap[field].value as string, value, {
          matchCase,
          matchWord: true,
          useRegExp,
        });
      }
    });
  };

  // Filter the rows.
  return rows.filter((row): boolean => {
    // Create a map of the row fields for easy look up.
    const rowMap: Record<string, NormalisedField> = row.reduce(
      (acc, field) => ({ ...acc, [field.key]: field }),
      {}
    );

    let shouldExclude = false;
    let shouldInclude = true;
    let meetsSearchCriteria = true;

    if (excludeFilters.length && testExcludeFilters(excludeFilters, rowMap)) {
      shouldExclude = true;
    }

    if (includeFilters.length && !testIncludeFilters(includeFilters, rowMap)) {
      shouldInclude = false;
    }

    meetsSearchCriteria = row.some((field) => {
      if (
        testCriteria(String(field.value ?? ""), parsedSearchQuery, {
          matchCase,
          matchWord,
          useRegExp,
        })
      ) {
        return true;
      }
    });

    return !shouldExclude && shouldInclude && meetsSearchCriteria;
  });
}
