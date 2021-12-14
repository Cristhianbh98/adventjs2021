// Envuelve regalos con asteriscos

export default function wrapGifts (gifts) {
  const wrapped = gifts.map(gift => '*' + gift + '*')
  const topBottom = ''.padStart(wrapped[0].length, '*')
  return gifts.length === 0 ? [] : [topBottom, ...wrapped, topBottom]
}
