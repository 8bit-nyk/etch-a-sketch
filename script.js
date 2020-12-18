const grayscaleButton = document.getElementById("grayscaleBtn");
const rainbowButton = document.getElementById("rainbowBtn");
const eraserButton = document.getElementById("eraserBtn");
const clearButton = document.getElementById("clearBtn");
const toggleButton = document.getElementById("toggleBtn");
const container = document.getElementById('container');
const slider = document.getElementById("pxRange");
const pxCount = document.getElementById("pxCount");
const colorSelection= document.getElementsByClassName("colorItem");
const colorIndicator = document.getElementById("colorIndicator");
let toggleFlag = false;
let userChoice = "black";



clearButton.addEventListener('click', clearGrid );
rainbowButton.addEventListener('click', rainbowGrid );
grayscaleButton.addEventListener('click', grayscaleGrid);
eraserButton.addEventListener('click', eraserBrush );
toggleButton.addEventListener('click', toggleGridlines);



for( let i = 0; i < colorSelection.length; i++)
  { 
    let colorS = colorSelection[i];
    colorS.addEventListener('click',() => {
      colorIndicator.style.backgroundColor = colorS.innerHTML;
      userChoice =  colorS.innerHTML;
    
      }
      );
    colorS.addEventListener('mouseover',() => {
          colorS.style.backgroundColor = "white";
          colorS.style.color = colorS.innerHTML;
      }
      );
    colorS.addEventListener('mouseout',() => {
      colorS.style.backgroundColor = "red";
      colorS.style.color = "white";
      }
      );


  }

pxCount.innerHTML += slider.value;
createGrid(slider.value);
slider.oninput = function() {
  pxCount.innerHTML = "Pixel Count: "+this.value;
  document.querySelectorAll('.box').forEach( element => {
    element.remove();
  });
  createGrid(this.value);
}






function createGrid(side){
    container.style.setProperty('--grid-rows', side);
    container.style.setProperty('--grid-cols', side);

    for (i = 0; i < (side * side); i++) 
      {
        let cell = document.createElement("div");
        cell.className = 'box';
        container.appendChild(cell);
        
      }
      document.querySelectorAll('.box').forEach(element => {
        
        element.addEventListener('mouseover',event =>{
          element.style.backgroundColor = checkChoice( element.style.backgroundColor);
        })
        
      });
      checkToggle();
      

    }
function grayscaleGrid(){
  colorIndicator.style.backgroundColor = "gray";
  userChoice = "grayscale";
  }

function rainbowGrid() {
  colorIndicator.style.backgroundColor ="rgb(125, 136, 72)"; 
  userChoice = "rainbow";   
}
    
function eraserBrush(){   
  colorIndicator.style.backgroundColor = "white";
  userChoice = "white";

}

function clearGrid() {
  document.querySelectorAll('.box').forEach(element => {
      element.style.backgroundColor = "white";
      });
}

function toggleGridlines(){
  console.log(toggleFlag);
  toggleFlag = !toggleFlag;
  checkToggle();
}
  
function checkToggle(){
  if (toggleFlag){

    document.querySelectorAll('.box').forEach(element => {
    element.style.border = "0.5px solid rgba(252, 162, 162, 0.5)";
    });
  }
  else {
    document.querySelectorAll('.box').forEach(element => {
      element.style.border = "";
    });

  }
}

function checkChoice(bgColor){
  switch(userChoice){
    case "rainbow":
       let red, green, blue;
        red = Math.floor(Math.random() * 256);
        green = Math.floor(Math.random() * 256);
        blue = Math.floor(Math.random() * 256);
        return "rgb("+red+","+ green+","+ blue+")"; 
    case "grayscale":
      if(bgColor.match(/rgba/))
      {
        let currentOpacity = bgColor.slice(-4, -1);
        let newOpacity ;
        if(currentOpacity < 0.9){
          newOpacity = Number(currentOpacity) + 0.1; 
        }
        else{
         newOpacity = Number(currentOpacity);
        }
        return "rgba(0, 0, 0,"+newOpacity+")";

      
      }
      else{
        return"rgba(0, 0, 0, 0.1)"; 
      }
      default:
        return userChoice;


   
    
  }

}





/*
function resetGrid() {
  let userGridside = window.prompt("Enter the gride size you want.\nFor example for a 16x16 grid enter 16.\n(The number should be less than 100)");
  if (isNaN(userGridside))
    { 
      userGridside = window.prompt("Please enter a valid number.\n A number is only composed of digits from 0-9");
    }
  else if (userGridside >100 )
    {
      userGridside = window.prompt("Please enter a number less than 100.");

    }

  else
  {
    document.querySelectorAll('.box').forEach( element => {
      element.remove();
    });
    createGrid(parseInt(userGridside));
  }  

}


*/




       
 