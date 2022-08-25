const btn1 = document.createElement('button')
const btn2 = document.createElement('button')
const btn3 = document.createElement('button')
const instr = document.createElement('div')
const displayResult = document.createElement('div')

instr.textContent = "Please make your choice, first to 5 wins."


container.appendChild(instr)
container.appendChild(btn1)
btn1.textContent = "Rock"
container.appendChild(btn2)
btn2.textContent = "Paper"
container.appendChild(btn3)
btn3.textContent = "Scissors"



const buttons = document.querySelectorAll('button');

buttons.forEach ((button) => {

button.style.height = "40px"
button.style.width = "150px"
    button.addEventListener('click', () => {

        select = button.textContent

        myChoice(select)
        yourChoice ()
        playround ()
        scoreCount ()

        displayResult.textContent = `You selected ${select} and they chose ${aiNumber}. ${score}.`

        container.appendChild(displayResult)
        
        if (aicount == 5) {
            alert("You lose")
            displayResult.textContent = ""
            playercount = 0
            aicount = 0
        }
        else if (playercount ==5 ) {
            alert("You Win")
            displayResult.textContent = ""
            playercount = 0
            aicount = 0            

        }

})

})



    let winner
    let aicount 
    let playercount 
    let drawcount

    playercount = 0
    aicount = 0
    drawcount = 0


    //Allows user to input selection

    function myChoice(choice) {

        lowerSelection = choice
        if  (lowerSelection == "Rock") {
            return result = "Rock"
        }
        else if ( lowerSelection == "Paper") {
            return result = "Paper"
        }
        else if ( lowerSelection == "Scissors") {
            return result = "Scissors"
        }
        }



    function yourChoice() {
    let aiInput = Math.random();
    let aiResult = aiInput.toString()[2];
        if (aiResult == 0) {
            yourChoice()
        } 
    if (aiResult == 1 || aiResult == 2 || aiResult == 3) {
        return aiNumber = "Rock"    
    }
    else if (aiResult == 4 || aiResult ==5 || aiResult == 6) {
        return aiNumber = "Paper"    
    }
    else if (aiResult == 7 || aiResult == 8 || aiResult == 9) {
        return aiNumber = "Scissors"    
    }
    }



    function playround() {
    //Draw scenarios
        if (result == "Rock" && aiNumber == "Rock") { 
            return winner = "D"
        }
        else if (result == "Paper" && aiNumber == "Paper") { 
            return winner = "D"
        }
        else if (result == "Scissors" && aiNumber == "Scissors") { 
            return winner = "D"
        }
    //player wins scenarios
        else if (result == "Rock" && aiNumber == "Scissors") { 
            return winner = "P"
        }
        else if (result == "Paper" && aiNumber == "Rock") { 
            return winner = "P"
        }
        else if (result == "Scissors" && aiNumber == "Paper") { 
            return winner = "P"
        }
    //player loses scenarios
    else if (result == "Scissors" && aiNumber == "Rock") { 
            return winner = "ai"
    }
    else if (result == "Rock" && aiNumber == "Paper") { 
            return winner = "ai"
    }
    else if (result == "Paper" && aiNumber == "Scissors") { 
            return winner = "ai"
    }
    }

    

    function scoreCount () {
      
    if (winner === "P") {
        playercount = playercount +1
        }
        else if (winner === "ai") {
        aicount = aicount +1
        }
        else if (winner === "D") {
        drawcount = drawcount +1
        }
    


    if (playercount == aicount) {
        score = `It's a draw. ${drawcount} each`
        return score
    }
    else if (playercount > aicount) {
        score = `You win! ${playercount} - ${aicount}`
        return score
    }
    else if (playercount < aicount) {
        score = `You lose! ${aicount} - ${playercount}`
    }

}
