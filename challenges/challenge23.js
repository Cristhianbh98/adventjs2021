// ¿Puedes reconfigurar las fábricas para no parar de crear regalos?

export default function canReconfigure (from, to) {
  if (from.length !== to.length) return false

  const letters = {}
  let canConfigure = true

  to.split('').forEach((letter, index) => {
    if (!letters[from[index]]) {
      const toFind = Object.values(letters)
      if (toFind.includes(letter)) canConfigure = false
      letters[from[index]] = letter
    } else {
      if (letters[from[index]] !== letter) canConfigure = false
    }
  })

  return canConfigure
}
