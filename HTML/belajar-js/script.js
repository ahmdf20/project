const canvas = document.getElementById('canvas');
canvas.innerHTML = '';
const tambah = (x, ops, y) => {
  let hasil = '';
  if (ops == "/") {
    hasil = x / y
  } else if (ops == "*") {
    hasil = x * y
  } else if (ops == "+") {
    hasil = x + y
  } else {
    hasil = x - y
  }
  canvas.innerHTML = `<h2>${hasil}</h2>`;
}

const looping = (e) => {
  for (let i = 1; i <= e; i++) {
    canvas.innerHTML += `<h5>Looping ke ${i}</h5>`
  }
}

const submitLoop = document.getElementById('submit-loop');
submitLoop.addEventListener('click', () => {
  let event = parseInt(document.getElementById('loop').value);
  if (!event) {
    canvas.innerHTML = '';
  }
  looping(event)
})

const submitOperasi = document.getElementById('submit-operasi');
submitOperasi.addEventListener('click', () => {
  let x = parseFloat(document.getElementById('x').value);
  let y = parseFloat(document.getElementById('y').value);
  let ops = document.getElementById('operasi').value;
  if (!x || !y) {
    canvas.innerHTML = '';
  } else {
    tambah(x, ops, y)
  }
})



