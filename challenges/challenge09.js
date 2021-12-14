// Agrupando cosas automáticamente

export default function groupBy (collection, it) {
  const group = {}
  const isProp = typeof it === 'string'
  for (const item of collection) {
    const key = isProp ? item[it] : it(item)
    if (!group[key]) group[key] = []
    group[key].push(item)
  }
  return group
}
