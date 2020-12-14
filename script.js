const container = document.getElementById('container');
const resetButton = document.getElementById('button');

document.querySelectorAll('.box').forEach(element => {
  element.addEventListener('mouseover',event =>{
    element.style.backgroundColor = "red";
  })
  
});

resetButton.addEventListener('click', resetGrid );

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

createGrid(12);







       
 