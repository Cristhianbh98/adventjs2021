// ¿Cuantos adornos necesita el árbol?

export default function countDecorations (bigTree) {
  if (!bigTree) return 0
  const value = bigTree.value ?? 0
  const { left, right } = bigTree
  return value + countDecorations(left) + countDecorations(right)
}
