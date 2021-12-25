// El último juego y hasta el año que viene 👋

export default function canMouseEat (direction, game) {
  const movements = {
    up: mouse => [mouse[0] - 1, mouse[1]],
    down: mouse => [mouse[0] + 1, mouse[1]],
    right: mouse => [mouse[0], mouse[1] + 1],
    left: mouse => [mouse[0], mouse[1] - 1]
  }

  let mousePosition = []
  const foodsPositions = []
  let canEat = false

  for (let index = 0; index < game.length; index++) {
    const row = game[index]
    for (let y = 0; y < row.length; y++) {
      const cell = row[y]
      if (cell === 'm') mousePosition = [index, y]
      if (cell === '*') foodsPositions.push([index, y])
    }
  }

  if (foodsPositions.length > 0) {
    const next = movements[direction](mousePosition)
    for (const foodPosition of foodsPositions) {
      if (foodPosition[0] === next[0] && foodPosition[1] === next[1]) {
        canEat = true
      }
    }
  }

  return canEat
}
