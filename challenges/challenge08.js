// La locura de las criptomonedas

export default function maxProfit (prices) {
  let maxProfit = -1
  for (let index = 0; index < prices.length - 1; index++) {
    const max = Math.max(...prices.slice(index + 1))
    const diff = max - prices[index]
    if (diff > maxProfit && !diff <= 0) maxProfit = diff
  }
  return maxProfit
}
