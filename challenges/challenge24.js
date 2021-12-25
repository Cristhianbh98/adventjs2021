// Comparando árboles de Navidad

function countDecorations (bigTree) {
  if (!bigTree) return 0
  const value = bigTree.value ?? 0
  const { left, right } = bigTree
  return value + countDecorations(left) + countDecorations(right)
}

export default function checkIsSameTree (treeA, treeB) {
  return countDecorations(treeA) === countDecorations(treeB)
}
