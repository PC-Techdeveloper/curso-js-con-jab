let note = 0
uploadGrade()
console.log(extra) // 7
console.log(PUNTOS) // ❌ error <- PUNTOS is not defined

function uploadGrade() {
  note = 2
  extra = 7
  console.log(note) // 2
  const PUNTOS = 10
  console.log(PUNTOS) // 10
}
