const shapes = document.querySelectorAll(".pannel>i")
// console.log(shapes)
let gallery = document.getElementById("gallery")
let imgs = ["img/p1.jpg","img/p2.jpg","img/p3.jpg","img/p4.jpg","img/p5.jpg","img/p6.jpg","img/p7.jpg","img/p8.jpg"]
let _rand=0
function rand() { 
 _rand1 =parseInt( Math.random()*imgs.length)
 return(_rand1)
 }
gallery.setAttribute('src',imgs[_rand])
const paper = document.getElementById("paper")
// disapbled the window contextmenu
window.addEventListener("contextmenu",(e)=>{
e.preventDefault()
})
let posx = 0
let posy=0
let flag
paper.addEventListener("mousemove",(e)=>{
  posx = e.clientX
  posy=e.clientY
  // console.log(posx,"-",posy)
})
shapes.forEach((item,index) => {

  item.addEventListener("click",()=>{
    let child = item.cloneNode(true)
    child.classList.add("child-pos")
console.log(child)

paper.appendChild(child)

child.addEventListener("mousedown",(e)=>{
  flag=setInterval(() => {
    e.target.style.left = (posx-(e.target.clientWidth/2))+"px"
  e.target.style.top = posy-(e.target.clientHeight/2)+"px"
  }, 0);
  // find the right or left click mouse
switch(e.which){
  case 1:
    // alert("right")

break;
    case 2 : 
    alert("middle")
    break;
    case 3 :
      // alert("left")
// cut button
let btn = document.createElement("span")
btn.innerText = "cut"
btn.classList.add("cut")
btn.style.left = e.clientX +"px"
btn.style.top = e.clientY + "px"
paper.appendChild(btn)
btn.addEventListener("click",()=>{
  child.remove()
  btn.remove()
})

      break;
      default:
        alert("what!")
}
})
// child.addEventListener("click",(e)=>{
//   console.log(e.offsetX)
//   if(posx>e.offsetX){
//     child.style.transform = "rotate(90deg)"
//   }
//   })
// let x = [90,180,270,370]
// child.addEventListener("dblclick",(e)=>{
// let _rotate = document.createElement("span")
// _rotate.innerText="rotate"
// _rotate.style.left =( posx-50)+"px"
// _rotate.style.top = (posy-50)+"px"
// _rotate.classList.add("rotate-el")
// paper.appendChild(_rotate)

// })
child.addEventListener("mouseup",()=>{
clearInterval(flag)
})
child.addEventListener("mouseleave",()=>{
  clearInterval(flag)
})
  })
});
document.getElementsByTagName("button")[0].addEventListener("click",()=>{
  clear()
  _rand = rand()
gallery.setAttribute("src",imgs[_rand])
})
function clear(){
  paper.innerHTML = ""
}
document.getElementById("clear").addEventListener("click",clear)
const pop = document.getElementsByClassName("popup")[0]
let _flag
_flag = setInterval(() => {
  pop.style.transform = "translate(-50%,750px)"
}, 200);
document.getElementById("ok").addEventListener("click",()=>{
  pop.style.transform="translate(-50%,-750px)"
clearInterval(_flag)
})