const body = document.querySelector("body");
const dirs = `left right up down diag1 diag2 diag3 diag4`.split(" ")

const randTime = () => Math.floor(Math.random() * 10) + 1

// const shift = () => {
  const time = randTime()
//   setTimeout(() => {
    body.style.animation = `
      drift-${dirs[Math.floor(Math.random() * dirs.length)]} ${time}s linear infinite
    `
//     console.log(body.style.animation)
//     console.log(Math.random())
//     shift()
//   }, time * 1000)
// }

// shift()