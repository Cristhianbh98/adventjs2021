// Descifrando los números...

export default function decodeNumber (symbols) {
  const codes = {
    '.': 1,
    ',': 5,
    ':': 10,
    ';': 50,
    '!': 100
  }

  return symbols.split('').reduce((acum, symbol, index, array) => {
    const current = codes[symbol] ?? NaN
    return current < codes[array[index + 1]]
      ? acum - current
      : acum + current
  }, 0)
}
