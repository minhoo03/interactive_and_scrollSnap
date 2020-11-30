let text_if
let h1
let pipe
let bg

let x = 0
let y = 0
let mx = 0
let my = 0
let speed = 0.015

window.onload = function(){
  h1 = document.getElementsByTagName("h1")[0]
  pipe = document.getElementsByClassName('pipe')[0]
  bg = document.getElementsByClassName('bg')[0]
  text_if = document.getElementsByClassName("text_if")[0]


  // 이 함수 실행 중 X : 마우스 움직일 시 mouseFunc 실행
  window.addEventListener("mousemove", mouseFunc, false)

  function mouseFunc(e){
    // 화면에서 사라지지 않도록 (좌표-화면크기) // 사람 중앙 = 마우스 중앙
    x = (e.clientX - window.innerWidth / 2)
    y = (e.clientY - window.innerHeight / 2)
  }
  loop()
}

function loop(){
  mx += (x - mx) * speed
  my += (y - my) * speed

  h1.innerHTML = `x : ${x}, mx : ${mx}`
  text_if.style.transform = `translate(${-mx/5}px, ${-my/5}px)`
  pipe.style.transform = `translate(${mx/14}px, ${my/15}px)`
  bg.style.transform = `translate(${-mx/24}px, ${-my/24}px)`
  // bg.style.transform = `rotate(${mx/303}deg)`
  window.requestAnimationFrame(loop)
}

window.addEventListener("scroll" , function(e) {

  let scrollTop = document.documentElement.scrollTop;
  console.log(scrollTop)

  if(scrollTop > 200) {
      document.body.style.background = "#000"
  } else {
      document.body.style.background = "#fff"
  }

});