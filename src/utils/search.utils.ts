import { escapeRegExp } from "./regex.utils";
import { isValidRegExp } from "../utils/regex.utils";
import { NormalisedRow } from "./data.utils";

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

  const flags = matchCase ? "g" : "gi";

  if (matchWord) {
    pattern = `\\b(${pattern})\\b`;
  }

  if (!useRegExp) {
    subject = escapeRegExp(subject);
  }

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
  searchQuery = searchQuery.replace(/(?<!\w)-\w+:\w+/g, (match) => {
    const [field, value] = match.replace("-", "").split(":");
    excludeFilters.push([field, value]);
    return "";
  });

  const includeFilters: [field: string, value: string][] = [];
  searchQuery = searchQuery.replace(/\b\w+:\w+\b/g, (match) => {
    const [field, value] = match.split(":");
    includeFilters.push([field, value]);
    return "";
  });

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

  let {
    searchQuery: parsedSearchQuery,
    excludeFilters,
    includeFilters,
  } = parseSearchQuery(searchQuery);

  const { rows, useRegExp = false, matchCase = false, matchWord = false } = options;

  // escape regex
  if (!useRegExp || !isValidRegExp(parsedSearchQuery)) {
    parsedSearchQuery = escapeRegExp(parsedSearchQuery);
  }

  return rows.filter((row): boolean => {
    const hasExcludeFilters = Boolean(excludeFilters.length);
    const hasIncludeFilters = Boolean(includeFilters.length);

    if (hasExcludeFilters) {
      const shouldExclude = excludeFilters.every(([field, value]) => {
        const cell = row.find((cell) => cell.key === field);
        if (!cell) return false;

        const passesCriteria = testCriteria(cell.value as string, value, {
          matchCase,
          matchWord: true,
          useRegExp,
        });

        return passesCriteria;
      });

      if (shouldExclude) return false;
    }

    if (hasIncludeFilters) {
      const shouldInclude = includeFilters.every(([field, value]) => {
        const cell = row.find((cell) => cell.key === field);
        if (!cell) return false;

        return testCriteria(cell.value as string, value, {
          matchCase,
          matchWord: true,
          useRegExp,
        });
      });

      if (!shouldInclude) return false;
    }

    return row.some((field): boolean => {
      return testCriteria(String(field.value ?? ""), parsedSearchQuery, {
        matchCase,
        matchWord,
        useRegExp,
      });
    });
  });
}
