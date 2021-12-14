// En busca del reno perdido

export default function missingReindeer (ids) {
  const totalReindeers = ids.reduce((acum, current) => acum + current)
  const realTotalReindeers = (ids.length * (ids.length + 1)) / 2
  return realTotalReindeers - totalReindeers
}
