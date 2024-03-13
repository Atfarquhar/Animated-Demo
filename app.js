//Function to make random colors
function randomRGB() {
  const r = Math.floor(Math.random() * 256); // * by 256 so 255 is included from the rbg scale
  //const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return`rgb(${r},${g},${b})`//return a string to follow the above format
}

// const h1 = document.querySelector('h1'); //to find h1 element

// setInterval(function() {
//   h1.style.color = randomRGB(); //all letters change to one random color for all letters
// },5000 ) 


const letters = document.querySelectorAll('.letter');

const intervalId= setInterval(function(){
  for (let letter of letters){
    letter.style.color = randomRGB();
  }
}, 1000)
//saving the interval to a variable can stop the color loop in the console