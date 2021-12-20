// ¿Una carta de pangramas? ¡QUÉ!

export default function pangram (letter) {
  return /[a-z]ñ/gi.test(letter)
}
