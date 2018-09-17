var numero=6
var colorArray=[]
var pickedColor
var cuadrados=document.querySelectorAll(".square")
var colorSpan=document.querySelector("#colorDisplay")
var mensajeDisplay=document.querySelector("#message")
var botonreset=document.querySelector("#reset")
var h1= document.querySelector("h1")
var Modos=document.querySelectorAll(".mode")

init()

function init(){
  btnModos()
  comienzo()
  reset()
 }
function btnModos(){
  for (var i = 0; i < Modos.length; i++) {
    Modos[i].addEventListener("click", function(){
      Modos[0].classList.remove("selected")
      Modos[1].classList.remove("selected")
      this.classList.add("selected")
        numero=(this.textContent==="Easy")?3:6
      reset()
    })
  }
 }
function comienzo() {
  for(i=0; i<cuadrados.length ; i++){
			 cuadrados[i].addEventListener("click", function(){
			 var clickedColor=this.style.backgroundColor
		  if(clickedColor===pickedColor){
			   mensajeDisplay.textContent="Correct!"
         botonreset.textContent="Play Again!"
				 changeColors(clickedColor)
         h1.style.backgroundColor=clickedColor
		  }else{
			  this.style.backgroundColor="#232323"
			  mensajeDisplay.textContent="Try Again"
		   }
	 })
  }
 }
function reset(){
  colorArray= generateRandomColors(numero)
  pickedColor=pickColor()
  colorDisplay.textContent=pickedColor
  for (var i = 0; i < cuadrados.length; i++) {
    if(colorArray[i]){
    cuadrados[i].style.backgroundColor=colorArray[i]
    cuadrados[i].style.display="block"
  }else{
    cuadrados[i].style.display="none"
    }
   }
 h1.style.backgroundColor="#6c1515b3"
 mensajeDisplay.textContent=""
 botonreset.textContent="New Colors"
 }
function changeColors(color){
  for (var i = 0; i < cuadrados.length; i++) {
	  cuadrados[i].style.backgroundColor=color
    }
  }
function pickColor(){
	var random=Math.floor(Math.random()*colorArray.length)
	return colorArray[random]
 }
function randomColor(){
			var rojo=Math.floor(Math.random()*256)
			var verde=Math.floor(Math.random()*256)
      var azul=Math.floor(Math.random()*256)
			return "rgb("+rojo+", "+verde+", "+azul+")"
 }
function generateRandomColors(number){
	var mezclador=[]
	for (var i = 0; i <number ; i++) {
		mezclador[i]=randomColor()
	  }
	return mezclador
  }
botonreset.addEventListener("click", function(){
   reset()
 })
