// 1
const font = document.querySelector('span.mess-with-me')
font.style.fontSize = "40px"
// 2
const paragraph = document.querySelector('p.mess-with-me')
paragraph.style.backgroundColor = 'green' 
// 3
const img = document.querySelector('#hide-me')
img.style.opacity = '0%'
// 4
const tri = document.querySelector('#triceratops')
tri.style.width = "324px"
// 1
 const span = document.querySelectorAll('span.mess-with-me')
 span.addEventLister('click', function(){
    // console.log("clicked")
span.style.backgroundColor = "orange"
 })
//  2
const firstImg = document.querySelector('#triceratops')
firstImg.addEventListener('click', function(){
    firstImg.style.border = "1px red solid"
 })
// 3

