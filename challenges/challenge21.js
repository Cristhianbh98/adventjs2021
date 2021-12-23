// La ruta con los regalos

export default function canCarry (capacity, trip) {
  let currentCapacity = 0
  let canMakeTrip = true

  for (let i = 0; i <= 10; i++) {
    const pick = trip.find(point => point[1] === i)
    const delivery = trip.find(point => point[2] === i)

    if (delivery) currentCapacity -= delivery[0]

    if (pick) {
      currentCapacity += pick[0]

      if (currentCapacity > capacity) {
        canMakeTrip = false
        break
      }
    }
  }

  return canMakeTrip
}
