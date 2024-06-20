// Ámbito global
let $note
console.log($note + 1) // NaN
// Ámbito local
function uploadGrade() {
  let $note = 5
  $note = 9
  console.log($note) // 9
  console.log(typeof $note) // number
}
uploadGrade()
