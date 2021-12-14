// ¡Es hora de poner la navidad en casa!

function padBoth (str, length, char) {
  return str.padStart((str.length + length) / 2, char).padEnd(length, char)
}

export default function createXmasTree (height) {
  let tree = ''

  const maxLength = (height - 1) * 2 + 1

  for (let i = 1; i <= maxLength; i += 2) {
    let row = ''
    for (let y = 0; y < i; y++) {
      row += '*'
    }
    row = padBoth(row, maxLength, '_')
    tree += row + '\n'
  }

  tree += padBoth('#', maxLength, '_') + '\n'
  tree += padBoth('#', maxLength, '_')

  return tree
}
