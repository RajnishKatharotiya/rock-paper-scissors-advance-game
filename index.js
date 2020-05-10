const list = $(".items-container");
const result = $(".result-box");
const pickedItem = $(".picked-item");
const computerItem = $(".computer-item");
const playAgain = $(".play-again");
const listItems = $(".items-container li");
const scoreStatus = $("#score-status");
const scoreCount = $("#score-count");
const rules = $(".modal-overlay");
const rulesBtn = $(".rules-btn");
const rulesClose = $("#rules-close");
const items = ["rock", "paper", "scissors", "lizard", "spock"];

$(document).ready(function(){
    let currentScore = sessionStorage.getItem("score") || 0
    scoreCount.html(currentScore);
    $(".items-container li").on("click", function(){

        currentScore = sessionStorage.getItem("score") || 0
        currentScore = parseInt(currentScore, 10);

        const userSelectedId = $(this).attr("data-id");
        const computerSelectedId = items[Math.floor(Math.random() * items.length)];

        const selecteditem = $(`.${userSelectedId}`).html();
        const computerSelection = $(`.${computerSelectedId}`).html();

        pickedItem.append(`<div class="item ${userSelectedId}">${selecteditem}</div>`);
        computerItem.append(`<div class="item ${computerSelectedId}">${computerSelection}</div>`)

        list.css("display", "none");
        result.css("display", "flex");

        if( userSelectedId === computerSelectedId){
            scoreStatus.html("Draw")
        }
        else if(
            userSelectedId === "scissors" && computerSelectedId === "paper"  ||
            userSelectedId === "paper" && computerSelectedId === "rock"  ||
            userSelectedId === "rock" && computerSelectedId === "lizard"  ||
            userSelectedId === "lizard" && computerSelectedId === "spock"  ||
            userSelectedId === "spock" && computerSelectedId === "scissors"  ||
            userSelectedId === "scissors" && computerSelectedId === "lizard"  ||
            userSelectedId === "paper" && computerSelectedId === "spock"  ||
            userSelectedId === "rock" && computerSelectedId === "scissors"  ||
            userSelectedId === "lizard" && computerSelectedId === "paper"  ||
            userSelectedId === "spock" && computerSelectedId === "rock"
        ) {
            scoreStatus.html("Won")
            currentScore += 1
        } else {
            scoreStatus.html("Lost")
            currentScore -= 1
        }

        sessionStorage.setItem("score", currentScore)
        scoreCount.html(currentScore);
    });

    playAgain.on("click", () => {
        result.css("display", "none");
        pickedItem.empty();
        computerItem.empty();
        list.css("display", "block");
    });

    rulesBtn.on("click", () => {
        rules.css("display", "flex");
    });

    rulesClose.on("click", () => {
        rules.css("display", "none");
    })

});