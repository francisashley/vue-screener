export function isCharacterKeyPress(event: KeyboardEvent) {
  //https://stackoverflow.com/a/62490496/18133925
  return /^.$/u.test(event.key)
}
