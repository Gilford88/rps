

let winner
let aicount 
let playercount 
let drawcount

playercount = 0
aicount = 0
drawcount = 0


//Allows user to input selection

function myChoice() {
    
    let selection = prompt("Choose your weapon!");
 
    let lowerSelection = selection.toLowerCase()
    
    if  (lowerSelection == "rock") {
        return result = 1
    }
    else if ( lowerSelection == "paper") {
        return result = 2
    }
    else if ( lowerSelection == "scissors") {
        return result = 3
    }
    else  {
        return result = 4
    }

    }
    

function yourChoice() {

let aiInput = Math.random();
let aiResult = aiInput.toString()[2];



    if (aiResult == 0) {
        
        yourChoice()

    } 




if (aiResult == 1 || aiResult == 2 || aiResult == 3) {
    return aiNumber = 1    
}
else if (aiResult == 4 || aiResult ==5 || aiResult == 6) {
    return aiNumber = 2    
}
else if (aiResult == 7 || aiResult == 8 || aiResult == 9) {
    return aiNumber = 3    
}

}

function playround() {

myChoice()
yourChoice()


//error log invalid input
    if (result == 4) {
        alert ("Please select rock, paper or scissors.")
    } 

//Draw scenarios
    else if (result == 1 && aiNumber == 1) { 
        alert("Rock vs rock - no winner")
        return winner = "D"
    }
    else if (result == 2 && aiNumber == 2) { 
        alert("Paper vs paper - no winner")
        return winner = "D"
    }
    else if (result == 3 && aiNumber == 3) { 
        alert("Scissors vs Scissors - no winner")
        return winner = "D"
    }
    
//player wins scenarios
    else if (result == 1 && aiNumber == 3) { 
        alert("Rock vs Scissors - You Win")
        return winner = "P"
    }
    else if (result == 2 && aiNumber == 1) { 
        alert("Paper vs Rock - You Win")
        return winner = "P"
    }
    else if (result == 3 && aiNumber == 2) { 
        alert("Scissors vs Paper - You Win")
        return winner = "P"
    }

//player loses scenarios
else if (result == 3 && aiNumber == 1) { 
    alert("Scissors vs Rock - You Lose")
    return winner = "ai"
}
else if (result == 1 && aiNumber == 2) { 
    alert("Rock vs Paper - You Lose")
    return winner = "ai"
}
else if (result == 2 && aiNumber == 3) { 
    alert("Paper vs Scissors  - You Lose")
    return winner = "ai"
}



}

function game () {


    
for (let i = 0; i <5; i++) {

    playround()

    if (winner === "P") {
    playercount = playercount +1
    }
    else if (winner === "ai") {
    aicount = aicount +1
    }
    else if (winner === "D") {
    drawcount = drawcount +1
    }

}

}




game()


if (playercount == aicount) {
    alert (`It's a draw. ${drawcount} each`)
}
else if (playercount > aicount) {
    alert (`You win! ${playercount} - ${aicount}`)
}
else if (playercount < aicount) {
    alert (`You lose! ${aicount} - ${playercount}`)
}