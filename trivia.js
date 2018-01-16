var sound1 = new Audio('sounds/correct.mp3');
var sound2 = new Audio('sounds/wrong.mp3');
var sound3 = new Audio('sounds/win.mp3');
var sound4 = new Audio('sounds/lose.mp3');

var score = 0
var i = 1
var ans = 1
function submitAnswer(){
    y = document.getElementById("qans").value
    var yy=y.toUpperCase();
    x = document.getElementById("question").value
if (ans===1){
    y = document.getElementById("qans").value
    if(yy==="C"){
        document.getElementById("question").value="You are right"
	 score++
	document.searchImage.src = "images/homerun.gif"
	sound1.play("correct.mp3");
    }
    else {
        document.getElementById("question").value="You are wrong"
        document.searchImage.src = "images/sadsport.gif"
	sound2.play("wrong.mp3");
    }
    document.view.qscore.value=score
}
else if (ans===2){ 
	y = document.getElementById("qans").value
    if(yy==="B"){
        document.getElementById("question").value="You are right"
	 score++
	document.searchImage.src = "images/homerun.gif"
	sound1.play("correct.mp3");
    }
    else {
        document.getElementById("question").value="You are wrong"
        document.searchImage.src = "images/sadsport.gif"
	sound2.play("wrong.mp3");
    }
    document.view.qscore.value=score
}
else if (ans===3){ 
	y = document.getElementById("qans").value
    if(yy==="A"){
        document.getElementById("question").value="You are right"
	 score++
	document.searchImage.src = "images/homerun.gif"
	sound1.play("correct.mp3");
    }
    else {
        document.getElementById("question").value="You are wrong"
        document.searchImage.src = "images/sadsport.gif"
	sound2.play("wrong.mp3");
    }
    document.view.qscore.value=score
}
else if (ans===4){ 
	y = document.getElementById("qans").value
    if(yy==="D"){
        document.getElementById("question").value="You are right"
	 score++
	document.searchImage.src = "images/homerun.gif"
	sound1.play("correct.mp3");
    }
    else {
        document.getElementById("question").value="You are wrong"
        document.searchImage.src = "images/sadsport.gif"
	sound2.play("wrong.mp3");
    }
    document.view.qscore.value=score
}
else if (ans===5){ 
	y = document.getElementById("qans").value
    if(yy==="C"){
        document.getElementById("question").value="You are right"
	 score++
	document.searchImage.src = "images/homerun.gif"
	sound1.play("correct.mp3");
    }
    else {
        document.getElementById("question").value="You are wrong"
        document.searchImage.src = "images/sadsport.gif"
	sound2.play("wrong.mp3");
    }
    document.view.qscore.value=score
}
else if (ans===6){ 
	y = document.getElementById("qans").value
    if(yy==="C"){
        document.getElementById("question").value="You are right"
	 score++
	document.searchImage.src = "images/homerun.gif"
	sound1.play("correct.mp3");
    }
    else {
        document.getElementById("question").value="You are wrong"
        document.searchImage.src = "images/sadsport.gif"
	sound2.play("wrong.mp3");
    }
    document.view.qscore.value=score
}
else if (ans===7){ 
	y = document.getElementById("qans").value
    if(yy==="B"){
        document.getElementById("question").value="You are right"
	 score++
	document.searchImage.src = "images/homerun.gif"
	sound1.play("correct.mp3");
    }
    else {
        document.getElementById("question").value="You are wrong"
        document.searchImage.src = "images/sadsport.gif"
	sound2.play("wrong.mp3");
    }
    document.view.qscore.value=score
}
else if (ans===8){ 
	y = document.getElementById("qans").value
    if(yy==="A"){
        document.getElementById("question").value="You are right"
	 score++
	document.searchImage.src = "images/homerun.gif"
	sound1.play("correct.mp3");
    }
    else {
        document.getElementById("question").value="You are wrong"
        document.searchImage.src = "images/sadsport.gif"
	sound2.play("wrong.mp3");
    }
    document.view.qscore.value=score
}
else if (ans===9){ 
	y = document.getElementById("qans").value
    if(yy==="D"){
        document.getElementById("question").value="You are right"
	 score++
	document.searchImage.src = "images/homerun.gif"
	sound1.play("correct.mp3");
    }
    else {
        document.getElementById("question").value="You are wrong"
        document.searchImage.src = "images/sadsport.gif"
	sound2.play("wrong.mp3");
    }
    document.view.qscore.value=score
}
else if (ans===10){ 
	y = document.getElementById("qans").value
    if(yy==="A"){
        document.getElementById("question").value="You are right"
	score++
	document.searchImage.src = "images/homerun.gif"
	sound1.play("correct.mp3");
    }
    else {
        document.getElementById("question").value="You are wrong"
        document.searchImage.src = "images/sadsport.gif"
	sound2.play("wrong.mp3");
    }
    document.view.qscore.value=score
}
	ans++; 
}
	}
	i++; 
}
 
