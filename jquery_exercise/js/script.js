/*

Instructions:

---- PART 1 ----
Start by removing that pirate flag (#pirate).

Next, add a gradient to the whole page by applying the "gradient" class to the body.

---- PART 2 ----
Now, to make things a little more complicated, let's activate the "Start" button:

When the user clicks the "Start" button, change the text of "status" to read "GO". 
Let's also change the background color of "status" to green.
Change the text of the "Start" button to read "Stop".

When the user clicks the buttom again, revert all of the above. 
So "status" should read "STOP", it's background color should be red, and the button itself should read "Start" again.

Hint: you will want to store the current state of the button in a variable.

---- PART 3 ----
Now that we have stored the status of our button, let's show the user an image if the mouse is over our green "GO" box.

If the user has activated the button, toggle the visibility of id "cat" to reveal our animated leopard.

*/

$(function(){   //wait for page to load
    

var buttonstatus = false;

$("h1").html("WELCOME TO JQUERY!"); //uppercase, overwrite 
$("h1").css("color","white")    //color of H1
$("#status").css("border-radius","25%")   //rounded button
$("#status").css("background-color","#FF3366")   //color button
$("#status").css("margingtop","50px")   //move button
$("#pirate").hide();    //hide flag
$("body").css({ 'background': '-webkit-gradient(linear,left top,left bottom,from(#B8B8B8 ),to(#E0E0E0))' });    //add gradient
// $("body").addClass("gradient"); 
$("#toggle").click(function(){  //activate button
    if(buttonstatus == false){
    $("#status").html("GO");
    $("#status").css("background-color","#66FFCC");
    $("#toggle").html("STOP");
    buttonstatus = true;
    }
    else{
    $("#status").html("START");
    $("#status").css("background-color","#FF3366");
    $("#toggle").html("start");
    buttonstatus= false;
    }
    
    
})

$("#cat").attr("src", "http://media.giphy.com/media/mhDwIpbsgGKk/giphy.gif"); //replaces lion pic

$("#status").hover(function() { //activates pic
    if(buttonstatus == true){
    $('#cat').slideToggle();
    }

});
});//end jquery dom ready function
