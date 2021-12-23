// ¿Una carta de pangramas? ¡QUÉ!

export default function pangram (letter) {
  const alphabet = 'abcdefghijklmnñopqrst'.split('')
  const cured = letter
    .toLowerCase()
    .replace('á', 'a')
    .replace('é', 'e')
    .replace('í', 'i')
    .replace('ó', 'o')
    .replace('ú', 'u')

  let response = true

  for (const alph of alphabet) {
    if (!cured.includes(alph)) {
      response = false
      break
    }
  }

  return response
}
