// ¡Ayuda al elfo a listar los regalos!

export default function listGifts (letter) {
  const gifts = {}

  const giftList = letter.trim().split(' ')

  for (const gift of giftList) {
    if (!gift.startsWith('_')) {
      if (!gifts[gift]) {
        gifts[gift] = 1
      } else {
        gifts[gift]++
      }
    }
  }

  return gifts
}
