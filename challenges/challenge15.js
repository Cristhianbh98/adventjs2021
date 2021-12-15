// El salto perfecto

export default function checkSledJump (heights) {
  const length = heights.length - 1

  if (heights[length] >= heights[length - 1]) return false

  for (let index = 0; index < length; index++) {
    if (heights[index + 1] === heights[index]) return false
  }

  return true
}
