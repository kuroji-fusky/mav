export function generateRandomString() {
  const _rnd = (n: number) => Math.round(n)

  const alphabetSoup = "abcdefghijklmnopqrstuvwxyz".split("")

  const randomNumForAlphabet = _rnd(Math.random() * alphabetSoup.length)
  const randomNumForSanitization = _rnd(Math.random() * alphabetSoup.length)

  const randomLetter = alphabetSoup[randomNumForAlphabet]

  const randomNumForPadding = _rnd(Math.random() * 28 * 2048)
  const paddedStr = randomNumForPadding.toString(28).padStart(5, randomLetter)

  const sanitizedStr = paddedStr.replace(/\s/g, alphabetSoup[randomNumForSanitization])

  return sanitizedStr
}
