const boxes = []

const boxes2 = []

for (let i = 0; i < 250; i++){

  boxes.push(`<div class="box">${i+1}</div>`)

}

for (let i = 0; i < 240; i++){

  boxes2.push(`<div class="box2">${i+1}</div>`)

}


const bg = document.querySelector('.background')
const whiteBoxes = document.querySelector('.white-boxes')


bg.innerHTML = boxes.join('')
whiteBoxes.innerHTML = boxes2.join('')




setInterval(()=>{
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();
  const secondsOfDay = (hours * 3600) + (minutes * 60) + seconds;

  box2.style.width = `calc(${(100*secondsOfDay)/86400}% / 10)`
  console.log(86400 - secondsOfDay);
},1000)
