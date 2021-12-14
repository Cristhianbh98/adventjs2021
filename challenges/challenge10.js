// La máquina de cambio

export default function getCoins (change) {
  const coins = [50, 20, 10, 5, 2, 1]
  const changeToGive = [0, 0, 0, 0, 0, 0]
  let position = coins.length

  for (let index = 0; index < coins.length; index++) {
    const currentCoin = coins[index]
    const result = change / currentCoin
    position--
    if (result >= 1) {
      const howMany = Math.floor(result)
      changeToGive[position] += howMany
      change -= howMany * currentCoin
    }
    if (change < 0) break
  }

  return changeToGive
}
