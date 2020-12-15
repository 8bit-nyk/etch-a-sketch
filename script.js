const bwButton = document.getElementById("bwBtn");
const grayscaleButton = document.getElementById("grayscaleBtn");
const rainbowButton = document.getElementById("rainbowBtn");
const eraserButton = document.getElementById("eraserBtn");
const clearButton = document.getElementById("clearBtn");
const resetButton = document.getElementById('resetBtn');
const container = document.getElementById('container');



bwButton.addEventListener('click', bwGrid );
resetButton.addEventListener('click', resetGrid );
clearButton.addEventListener('click', clearGrid );
rainbowButton.addEventListener('click', rainbowGrid );
grayscaleButton.addEventListener('click', grayscaleGrid );
eraserButton.addEventListener('click', eraserBrush );

function bwGrid(){
  document.querySelectorAll('.box').forEach(element => {
    element.addEventListener('mouseover',event =>{
      element.style.backgroundColor = "black";
    })
    
  });
}
function grayscaleGrid(){
  document.querySelectorAll('.box').forEach(element => {
      element.addEventListener('mouseover',event =>{
        let bgColor = element.style.getPropertyValue("background-color");
        console.log(bgColor);
       /* red = Math.floor(Math.random() * 256);
        green = Math.floor(Math.random() * 256);
        blue = Math.floor(Math.random() * 256);
        element.style.backgroundColor = "rgb("+red+","+ green+","+ blue+")"; */
        })
      
    });

}
function rainbowGrid() {
  let red, green, blue;


  document.querySelectorAll('.box').forEach(element => {
      element.addEventListener('mouseover',event =>{
        red = Math.floor(Math.random() * 256);
        green = Math.floor(Math.random() * 256);
        blue = Math.floor(Math.random() * 256);
        element.style.backgroundColor = "rgb("+red+","+ green+","+ blue+")";        })
      
    });
    
     
}

function eraserBrush(){
  document.querySelectorAll('.box').forEach(element => {
    element.addEventListener('mouseover',event =>{
      element.style.backgroundColor = "white";})

  });
  

}
function clearGrid() {
  document.querySelectorAll('.box').forEach(element => {
      element.style.backgroundColor = "white";
     });
}
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

function createGrid(side){
    container.style.setProperty('--grid-rows', side);
    container.style.setProperty('--grid-cols', side);

    for (i = 0; i < (side * side); i++) 
      {
        let cell = document.createElement("div");
       
        //cell.innerText = (i + 1);
        cell.className = 'box';
        container.appendChild(cell);
        
      }
      document.querySelectorAll('.box').forEach(element => {
        element.addEventListener('mouseover',event =>{
          element.style.backgroundColor = "black";
        })
        
      });
      

    }








createGrid(80);






       
 