function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
  }
var choice = prompt("what is your choice (rock, sccisor, papaer):");
var computer_choice = getRandomIntInclusive(1,3);
switch (computer_choice) {
    case 1:
        computer_choice = "paper";
        break;
    case 2:
        computer_choice = "rock";
        break;
    case 3:
        computer_choice = "sccisor";
        break;
  }
  if(choice == "paper"){
    if(computer_choice == "paper"){
        console.log("draw");
    
    } else if(computer_choice == "rock"){
        console.log("win");
    } else {
        console.log("lose");
    }
  } else if(choice == "rock"){
    if(computer_choice == "paper"){
        console.log("lose");
    
    } else if(computer_choice == "rock"){
        console.log("draw");
    } else {
        console.log("win");
    }
 } else {
    if(computer_choice == "paper"){
        console.log("win");
    
    } else if(computer_choice == "rock"){
        console.log("lose");
    } else {
        console.log("draw");
    }
    }