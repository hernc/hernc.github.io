var userChoice = prompt("Do you choose meteor, glass or volcano?");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "meteor";
} else if(computerChoice <= 0.67) {
	computerChoice = "glass";
} else {
	computerChoice = "volcano";
} console.log("Computer: " + computerChoice);

var compare = function(choice1, choice2){
    if(choice1 === choice2){
        return "The result is a tie!";
    }
    else if(choice1 === "meteor"){
        if (choice2 === "volcano"){
            return "meteor wins"
        }else{
            return "glass wins"
        }
    }

    else if(choice1 === "glass"){
        if (choice2 === "meteor"){
        return "glass wins"
        }else{
            return "volcano wins"
        }
    }

    else if(choice1 === "volcano"){
        if (choice2 === "meteor"){
        return "meteor wins"
        }else{
            return "volcano wins"
        }
    }

};//end of compare fucntion

compare(userChoice, computerChoice);
