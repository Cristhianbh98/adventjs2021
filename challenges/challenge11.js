// ¿Vale la pena la tarjeta fidelidad del cine?

export default function shouldBuyFidelity (times) {
  let acum = 250
  const real = times * 12
  for (let count = 1; count <= times && acum < real; count++) {
    const descuento = Math.pow(0.75, count)
    acum += 12 * descuento
  }
  return acum < real
}
