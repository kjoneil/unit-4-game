$(document).ready(function(){

var randomNum = (Math.floor(Math.random()*121+19));
$("#random-number").text(randomNum);
 
// Too many variables in this logic
        // global variables
var total = 0;
var wins = 0;
var loses = 0;
    // gems random value
var ruby = [1,2,3,4,5,6,7,8,9,10,11,12];
var gemOne = ruby[Math.floor(Math.random()*ruby.length)];
     
var green =[1,2,3,4,5,6,7,8,9,10,11,12];
var gemTwo = green[Math.floor(Math.random()*green.length)];

var diamond =[1,2,3,4,5,6,7,8,9,10,11,12];
var gemThr= diamond[Math.floor(Math.random()*diamond.length)];

var emerald =[1,2,3,4,5,6,7,8,9,10,11,12]
var gemFor = emerald[Math.floor(Math.random()*emerald.length)];


// Need to make this section dry, too many repeat functions


    // performs function on click, with a conditional statement that resets certain variables
$('.one').on('click', function(){
    
    total += gemOne;
    if(randomNum === total){
        alert(  "You win!  ");
        total = 0;
        wins += 1;
        gemOne = ruby[Math.floor(Math.random()*ruby.length)];
        randomNum = (Math.floor(Math.random()*121+19));
        $("#random-number").text(randomNum);
       }else if( randomNum <= total){
        alert("  You lose!!  ");
        total = 0;
        loses += 1;
        gemOne = ruby[Math.floor(Math.random()*ruby.length)];
        randomNum = (Math.floor(Math.random()*121+19));
        $("#random-number").text(randomNum);
       }
    //    prints updated values into respective id
    document.getElementById("total").innerHTML = total;
    document.getElementById("win").innerHTML="Wins: "+ wins;
    document.getElementById("lose").innerHTML ="Loses:"+ loses;     
});
//   redundant code for the next few on click functions
$('.two').on('click', function(){
    total += gemTwo;
    if(randomNum === total){
        alert("you win!");
        total = 0;
        wins += 1;
        gemTwo = green[Math.floor(Math.random()*green.length)];
        randomNum = (Math.floor(Math.random()*121+19));
        $("#random-number").text(randomNum);
    }else if( randomNum <= total){
        alert("you lose!!");
        total = 0;
        loses += 1;
        gemTwo = green[Math.floor(Math.random()*green.length)];
        randomNum = (Math.floor(Math.random()*121+19));
        $("#random-number").text(randomNum);
    }
    document.getElementById("total").innerHTML = total;     
    document.getElementById("win").innerHTML="Wins: "+ wins;
    document.getElementById("lose").innerHTML ="Loses: "+ loses;
});    

$('.three').on('click', function(){
    total += gemThr;
    if(randomNum === total){
        alert("you win!");
        total = 0;
        wins += 1;
        gemThr= diamond[Math.floor(Math.random()*diamond.length)];
        randomNum = (Math.floor(Math.random()*121+19));
        $("#random-number").text(randomNum);
    }else if( randomNum <= total){
        alert("you lose!!");
        total =0;
        loses += 1;
        gemThr= diamond[Math.floor(Math.random()*diamond.length)];
        randomNum = (Math.floor(Math.random()*121+19));
        $("#random-number").text(randomNum);
    }
    document.getElementById("total").innerHTML = total;     
    document.getElementById("win").innerHTML="Wins: "+ wins;
    document.getElementById("lose").innerHTML ="Loses: "+ loses;
});
$('.four').on('click', function(){
    total += gemFor;
    if(randomNum === total){
        alert("you win!");
        total = 0;
        wins += 1;
        gemFor = emerald[Math.floor(Math.random()*emerald.length)];
        randomNum = (Math.floor(Math.random()*121+19));
        $("#random-number").text(randomNum);
    }else if( randomNum <= total){
         alert("you lose!!");
         total = 0;
         loses += 1;
         gemFor = emerald[Math.floor(Math.random()*emerald.length)];
         randomNum = (Math.floor(Math.random()*121+19));
        $("#random-number").text(randomNum);
    }
    document.getElementById("total").innerHTML = total;     
    document.getElementById("win").innerHTML="Wins "+ wins;
    document.getElementById("lose").innerHTML ="Loses: "+ loses;

});
})
