// Rematando los exámenes finales

export default function sumPairs (numbers, result) {
  for (let i = 0; i < numbers.length; i++) {
    for (let y = i + 1; y < numbers.length; y++) {
      const first = numbers[i]
      const second = numbers[y]
      if (first + second === result) return [first, second]
    }
  }
  return null
}
