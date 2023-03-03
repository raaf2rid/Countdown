let dayCount = []
const freedom = document.querySelector('#freedom')

function countdown(dateEnd) {
  var timer, days, hours, minutes, seconds;

  dateEnd = new Date(dateEnd);
  dateEnd = dateEnd.getTime();

  if ( isNaN(dateEnd) ) {
    return;
  }

  timer = setInterval(calculate, 1000);

  function calculate() {
    var dateStart = new Date();
    var dateStart = new Date(dateStart.getUTCFullYear(),
                             dateStart.getUTCMonth(),
                             dateStart.getUTCDate(),
                             dateStart.getUTCHours(),
                             dateStart.getUTCMinutes(),
                             dateStart.getUTCSeconds());
    var timeRemaining = parseInt((dateEnd - dateStart.getTime()) / 1000)

    if ( timeRemaining >= 0 ) {
      days    = parseInt(timeRemaining / 86400);
      timeRemaining   = (timeRemaining % 86400);
      hours   = parseInt(timeRemaining / 3600);
      timeRemaining   = (timeRemaining % 3600);
      minutes = parseInt(timeRemaining / 60);
      timeRemaining   = (timeRemaining % 60);
      seconds = parseInt(timeRemaining);

      


      document.getElementById("days").innerHTML    = `${parseInt(days, 10)}<span>Days</span>`;
      document.getElementById("hours").innerHTML   = 
      `${("0" + hours).slice(-2)}<span>Hours</span>`;
      document.getElementById("minutes").innerHTML =  `${("0" + minutes).slice(-2)}<span>Minutes</span>`;
      document.getElementById("seconds").innerHTML = `${("0" + seconds).slice(-2)}<span>Seconds</span>`;


      freedom.innerHTML = 
      `
     To Freedom`


      const boxes = []

      const boxes2 = []
      
      for (let i = 0; i < 250; i++){
      
        boxes.push(`<div class="box"><p class="day-count">${i+1}</p></div>`)
      
      }

      const bg = document.querySelector('.background')
      bg.innerHTML = boxes.join('')

      const currentBox = document.querySelectorAll(".box");

      
      for (let i = 0; i < 250 - days; i++){
      
        boxes2.push(`<div class="box2"><strong>${i+1}</strong></div>`)

      
      
      }

      for (let i = 0; i < 249 - days; i++){
      

        

        currentBox[i].style.visibility = "hidden"
      
      }


      
      const whiteBoxes = document.querySelector('.white-boxes')
      
      
      whiteBoxes.innerHTML = boxes2.join('')

        const all = document.querySelectorAll('.box2')

       

        all.forEach((box, i )=>{
          
          if(i == all.length - 1){

            box.classList.add('lastBox')

            

            
          const lastBox = document.querySelector('.lastBox')
  
          const now = new Date();
          const seconds2 = now.getSeconds();
          const minutes2 = now.getMinutes();
          const hours2 = now.getHours();
          const secondsOfDay = (hours2 * 3600) + (minutes2 * 60) + seconds2;
          lastBox.style.width = `calc(${(100*secondsOfDay)/86400}% / 10)`
          lastBox.style.background = "rgb(238,174,202)"
          lastBox.style.color = "transparent"
          lastBox.style.backgroundColor = "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)"
          
          if(days == 0){
              

              secondsRemaining = (hours * 60 + minutes) * 60 + seconds


            lastBox.style.width = `calc(${(100*(secondsOfDay- secondsRemaining))/secondsOfDay}% / 10)`
          }
  
        }

        
  
        })



    } else if(timeRemaining < 0 ) {





      const boxes2 = []
      
     
      
      for (let i = 0; i < 250; i++){
      
        boxes2.push(`<div class="box2"><strong>${i+1}</strong></div>`)
      
      }


      const whiteBoxes = document.querySelector('.white-boxes')

     

      whiteBoxes.innerHTML = boxes2.join('')

      whiteBoxes.style.opacity = "0.3"
      
        
        
        const world = document.querySelector('#world')
      
        
        freedom.innerHTML = 
        `
        <span>Yes! Yes! Yes! 
        <br>
        250 days have passed!<br>
        The wait is Over <br>And Now...
        <br>
        <br>
        <span class="free" > You are Free!</span></span>`

        
        freedom.style.transform = "translate(-0)"
        freedom.style.textAlign = "center"
        world.style.visibility = "visible"

    }
  }

  
}


// countdown('2/3/2023 1:8:00 PM');




countdown('11/8/2023 9:38:00 PM')



  


// Confetti


const NUM_CONFETTI = 350;
const COLORS = [
  [85, 71, 106],
  [174, 61, 99],
  [219, 56, 83],
  [244, 92, 68],
  [248, 182, 70],
];
const PI_2 = 2 * Math.PI;

const canvas = document.getElementById("world");
const context = canvas.getContext("2d");
let w = 0;
let h = 0;

function resizeWindow() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
}

window.addEventListener("resize", resizeWindow, false);

window.onload = function () {
  setTimeout(resizeWindow, 0);
};

function range(a, b) {
  return (b - a) * Math.random() + a;
}

function drawCircle(x, y, r, style) {
  context.beginPath();
  context.arc(x, y, r, 0, PI_2, false);
  context.fillStyle = style;
  context.fill();
}

let xpos = 0.5;

document.onmousemove = function (e) {
  xpos = e.pageX / w;
};

window.requestAnimationFrame =
  window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.oRequestAnimationFrame ||
  window.msRequestAnimationFrame ||
  function (callback) {
    window.setTimeout(callback, 1000 / 60);
  };

class Confetti {
  constructor() {
    this.style = COLORS[~~range(0, 5)];
    this.rgb = `rgba(${this.style[0]},${this.style[1]},${this.style[2]}`;
    this.r = ~~range(2, 6);
    this.r2 = 2 * this.r;
    this.replace();
  }

  replace() {
    this.opacity = 0;
    this.dop = 0.03 * range(1, 4);
    this.x = range(-this.r2, w - this.r2);
    this.y = range(-20, h - this.r2);
    this.xmax = w - this.r;
    this.ymax = h - this.r;
    this.vx = range(0, 2) + 8 * xpos - 5;
    this.vy = 0.7 * this.r + range(-1, 1);
  }

  draw() {
    this.x += this.vx;
    this.y += this.vy;
    this.opacity += this.dop;
    if (this.opacity > 1) {
      this.opacity = 1;
      this.dop *= -1;
    }
    if (this.opacity < 0 || this.y > this.ymax) {
      this.replace();
    }
    if (!(0 < this.x < this.xmax)) {
      this.x = (this.x + this.xmax) % this.xmax;
    }
    drawCircle(
      ~~this.x,
      ~~this.y,
      this.r,
      `${this.rgb},${this.opacity})`
    );
  }
}

const confetti = [];
for (let i = 1; i <= NUM_CONFETTI; i++) {
  confetti.push(new Confetti());
}

function step() {
  window.requestAnimationFrame(step);
  context.clearRect(0, 0, w, h);
  for (let i = 0; i < confetti.length; i++) {
    confetti[i].draw();
  }
}

step();


