// Contando los días para los regalos

export default function daysToXmas (date, year = 2021) {
  const christmas = new Date('Dec 25, ' + year)
  const miliTime = christmas.getTime() - date.getTime()
  return Math.ceil(miliTime / (1000 * 60 * 60 * 24))
}
