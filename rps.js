let btnRock = document.getElementById("btn-rock");
let btnPaper = document.getElementById("btn-paper");
let btnScissors = document.getElementById("btn-scissors");
let result = document.querySelector(".result")

// Option For Computer
const options = ["rock", "paper", "scissors"];

// Utiliy Funtion For Computer Play 
function computerPlay() {
    return options[Math.floor(Math.random() * options.length)];
}

function checkWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "tie";
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        return "win";
    } else {
        return "lost";
    }
}

// Element Map
const elementMap = {
    "tie": `<p class="tie">It's A Tie!</p>`,
    "win": `<p class="win">You Win!</p>`,
    "lost": `<p class="lost">You Lost!</p>`
}

// To Handle User Paper Click
btnPaper.addEventListener("click", () => {
    const computerChoice = computerPlay();
    innerHTML = `<div>
                    <p><b>Your Choice : paper</b></p>
                    <p><b>Computer Choice : ${computerChoice}</b></p>
                     ${elementMap[checkWinner("paper", computerChoice)]}
                </div>`
    result.innerHTML = innerHTML;
})
// To Handle User Rock Click
btnRock.addEventListener("click", () => {
    const computerChoice = computerPlay();
    innerHTML = `<div>
                    <p><b>Your Choice : rock</b></p>
                    <p><b>Computer Choice : ${computerChoice}</b></p>
                     ${elementMap[checkWinner("rock", computerChoice)]}
                </div>`
    result.innerHTML = innerHTML;
})
// To Handle User Scissor Click
btnScissors.addEventListener("click", () => {
    const computerChoice = computerPlay();
    innerHTML = `<div>
                    <p><b>Your Choice : scissors</b></p>
                    <p><b>Computer Choice : ${computerChoice}</b></p>
                     ${elementMap[checkWinner("scissors", computerChoice)]}
                  </div>`
    result.innerHTML = innerHTML;
})

