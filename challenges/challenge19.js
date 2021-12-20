// ¿Qué deberíamos aprender en Platzi?

export default function learn (time, courses) {
  let coursesMax = []
  for (let i = 0; i < courses.length; i++) {
    for (let y = i + 1; y < courses.length; y++) {
      const sum = courses[i] + courses[y]

      const a = courses[coursesMax[0]] ?? 0
      const b = courses[coursesMax[1]] ?? 0
      const actualSum = a + b

      if (sum <= time && actualSum < sum) coursesMax = [i, y]
    }
  }
  return coursesMax.length ? coursesMax : null
}
