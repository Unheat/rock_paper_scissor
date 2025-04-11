function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
  }
function play_game(){
    
    const button  = document.querySelectorAll(".button");
    const div = document.createElement("div");
    document.body.appendChild(div);
    button.forEach(button => {
        if(!button.classList.contains("listener-attached")){
            button.addEventListener("click", function (e) {
                let choice = e.target.classList[1];
                let computer_choice = getRandomIntInclusive(1,3);
                
                switch (computer_choice) {
                    case 1:
                        computer_choice = "paper";
                        break;
                    case 2:
                        computer_choice = "rock";
                        break;
                    case 3:
                        computer_choice = "scissor";
                        break;
                }
                if(choice == "paper"){
                    if(computer_choice == "paper"){
                        div.innerText ="draw";
                    
                    } else if(computer_choice == "rock"){
                        div.innerText ="win";
                    } else {
                        div.innerText ="lose";
                    }
                } else if(choice == "rock"){
                    if(computer_choice == "paper"){
                        div.innerText ="lose";
                    
                    } else if(computer_choice == "rock"){
                        div.innerText ="draw";
                    } else {
                        div.innerText ="win";
                    }
                } else {
                    if(computer_choice == "paper"){
                        div.innerText ="win";
                    
                    } else if(computer_choice == "rock"){
                        div.innerText ="lose";
                    } else {
                        div.innerText ="draw";
                    }
                    }
                    
                    return;
                });
                button.classList.add("listener-attached");
            }
        });
}
const play = document.querySelector(".play");
play.addEventListener("click", play_game);

