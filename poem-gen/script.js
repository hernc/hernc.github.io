


var subjects=['I','You','Bob','John','Sue','Kate','The lizard people'];
var verbs=['will search for','will get','will find','attained','found','will start interacting with','will accept','accepted'];
var objects=['Billy','an apple','a Triforce','the treasure','a sheet of paper'];
var endings=['.',', right?','.',', like I said.','.',', just like your momma!'];

var output=document.getElementById('output');

for(x=0;x<Math.round(Math.random()*10);x++){
	var _JuNk=Math.random();
}

function getRandomColor() {
        var letters = '0123456789ABCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++ ) {
            color += letters[Math.floor(Math.random() * 15)];
        }
        return color;
    }




window.onload=Math.random;
document.onmouseover=Math.random;
document.onmouseout=Math.random;
document.onmousedown=Math.random;



$('button').click(function(){
	//change bg style
	document.body.style.backgroundColor = getRandomColor();
	//generate sentences
	output.innerHTML=subjects[Math.round(Math.random()*(subjects.length-1))]+' '+verbs[Math.round(Math.random()*(verbs.length-1))]+' '+objects[Math.round(Math.random()*(objects.length-1))]+endings[Math.round(Math.random()*(endings.length-1))]+'\n';
});

