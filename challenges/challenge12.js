// La ruta perfecta para dejar los regalos

export default function getMinJump (obstacles) {
  let minJump = 1

  for (let i = 2; ; i++) {
    if (obstacles.every(obstacle => obstacle % i !== 0)) {
      minJump = i
      break
    }
  }

  return minJump
}
