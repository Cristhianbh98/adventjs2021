// Contando ovejas para dormir

export default function contarOvejas (ovejas) {
  return ovejas.filter(oveja => oveja.color === 'rojo' && /(na)/gi.test(oveja.name))
}
