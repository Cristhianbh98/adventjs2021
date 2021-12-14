// Buscando en el almacén...

export default function contains (store, product) {
  return Object.values(store)
    .some(
      value =>
        typeof value === 'string'
          ? value === product
          : contains(Object.values(value), product)
    )
}
