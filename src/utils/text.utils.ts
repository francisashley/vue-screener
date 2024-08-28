import { escapeRegExp } from './regex.utils'

export function highlightMatches(value: string, highlight: string): string {
  if (['string', 'number'].includes(typeof value) && highlight) {
    const highlightExp = new RegExp(escapeRegExp(highlight), 'ig')
    return value.replace(highlightExp, (match) => `<mark>${match}</mark>`)
  }
  return value
}
