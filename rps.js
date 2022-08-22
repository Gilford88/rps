
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
        myChoice()
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

function winner() {

myChoice()
yourChoice()


//error log invalid input
    if (result == 4) {
        alert ("Please select rock, paper or scissors.")
    } 

//Draw scenarios
    else if (result == 1 && aiNumber == 1) { 
        alert("Rock vs rock - no winner")
    }
    else if (result == 2 && aiNumber == 2) { 
        alert("Paper vs paper - no winner")
    }
    else if (result == 3 && aiNumber == 3) { 
        alert("Scissors vs Scissors - no winner")
    }
    
//player wins scenarios
    else if (result == 1 && aiNumber == 3) { 
        alert("Rock vs Scissors - You Win")
    }
    else if (result == 2 && aiNumber == 1) { 
        alert("Paper vs Rock - You Win")
    }
    else if (result == 3 && aiNumber == 2) { 
        alert("Scissors vs Paper - You Win")
    }

//player loses scenarios
else if (result == 3 && aiNumber == 1) { 
    alert("Scissors vs Rock - You Lose")
}
else if (result == 1 && aiNumber == 2) { 
    alert("Rock vs Paper - You Lose")
}
else if (result == 2 && aiNumber == 3) { 
    alert("Paper vs Scissors  - You Win")
}



}

winner()