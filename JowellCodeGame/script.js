

var userChoice = alert("Do you choose meteor, glass or volcano?");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "meteor";
} else if(computerChoice <= 0.67) {
	computerChoice = "glass";
} else {
	computerChoice = "volcano";
} alert("Computer: " + computerChoice);

var compare = function(userChoice, computerChoice){
    if(userChoice === computerChoice){
        return "The result is a tie!";
    }
    else if(userChoice === "meteor"){
        if (computerChoice === "volcano"){
            return "meteor wins"
        }else{
            return "glass wins"
        }
    }

    else if(userChoice === "glass"){
        if (computerChoice === "meteor"){
        return "glass wins"
        }else{
            return "volcano wins"
        }
    }

    else if(userChoice === "volcano"){
        if (computerChoice === "meteor"){
        return "meteor wins"
        }else{
            return "volcano wins"
        }
    }

};//end of compare fucntion

//compare(userChoice, computerChoice);

//$().click(function() {
//		compare(userChoice, computerChoice);
//});


$(".selectionArea").click(function() {
   $('.' + this.class).fadeToggle();
});









