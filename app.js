const shapes = document.querySelectorAll(".pannel>i")
// console.log(shapes)
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
child.addEventListener("mouseup",()=>{
clearInterval(flag)
})
child.addEventListener("mouseleave",()=>{
  clearInterval(flag)
})
  })
});