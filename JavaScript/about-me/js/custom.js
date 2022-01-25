// const [day, month, date, years] = new Date().toDateString().split(" ");
// Get Object
const year = new Date()
const date = year.getDate()
const day = year.getDay()
const month = year.getMonth()
const fullYear = year.getFullYear()
const hari = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu']
const bulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
const submitLoop = document.getElementById('submit-loop')
const submitIPK = document.getElementById('submit-ipk')
const submitLuas = document.getElementById('submit-jari')
const submitOperasi = document.getElementById('submit-operasi')
let name = window.prompt('Your Name')

// Function
document.getElementById('name').innerHTML = name
document.getElementById('date').innerHTML = `${hari[day - 1]}, ${date}-${bulan[month]}-${fullYear}`
if (day > 5) {
  document.getElementById('event-date').innerHTML = `Hari Libur`
} else {
  document.getElementById('event-date').innerHTML = `Hari Kerja`
}

submitLoop.addEventListener('click', () => {
  let inputLoop = parseInt(document.getElementById('loop').value)
  const listLoop = document.getElementById('list-loop')
  listLoop.innerHTML = ''
  for (let i = 1; i <= inputLoop; i++) {
    listLoop.innerHTML += `<li class="list-group-item">Looping count ${i}</li>`
  }
})

submitIPK.addEventListener('click', () => {
  let inputIPK = parseFloat(document.getElementById('ipk').value)
  const outputIPK = document.getElementById('output-ipk')
  outputIPK.innerHTML = ''
  if (inputIPK > 2.75) {
    outputIPK.innerHTML = `<div class="alert alert-success alert-dismissible fade show" role="alert">
    Jumlah IPK ${inputIPK} sudah memenuhi syarat
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>`
  } else {
    outputIPK.innerHTML = `<div class="alert alert-warning alert-dismissible fade show" role="alert">
    Jumlah IPK ${inputIPK} belum memenuhi syarat
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>`
  }
})

submitLuas.addEventListener('click', () => {
  let inputJari = parseInt(document.getElementById('jari').value)
  const outputLuas = document.getElementById('output-luas')
  outputLuas.innerText = ''
  let luas = Math.PI * inputJari * inputJari
  outputLuas.innerText = luas
})

submitOperasi.addEventListener('click', () => {
  const outputOperasi = document.getElementById('output-operasi')
  let num1 = parseInt(document.getElementById('num1').value)
  let num2 = parseInt(document.getElementById('num2').value)
  let operasi = document.getElementById('operasi').value
  outputOperasi.innerText = ''
  let hasil = ''
  if (operasi == 'ditambah') {
    hasil = num1 + num2
  } else if (operasi == 'dikurang') {
    hasil = num1 - num2
  } else if (operasi == 'dibagi') {
    hasil = num1 / num2
  } else {
    hasil = num1 * num2
  }
  outputOperasi.innerText = hasil
})