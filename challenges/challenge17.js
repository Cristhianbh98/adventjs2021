// La locura de enviar paquetes en esta época

export default function countPackages (carriers, carrierID) {
  const carrier = carriers.find(carrier => carrier[0] === carrierID)

  return carrier[2].reduce((acc, carrierID) => acc + countPackages(carriers, carrierID), carrier[1])
}
