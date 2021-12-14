// El Grinch quiere fastidiar la Navidad

export default function isValid (letter) {
  // Verifica si contiene {,},[,]
  if (/\[|\]|\{|\}/.test(letter)) return false
  // Verifica si contine ()
  if (/\(\)/g.test(letter)) return false
  // Verifica que los () estén llenos
  return /\(*[A-Z|a-z|0-9]\)/g.test(letter)
}
