var sound1 = new Audio('sounds/correct.mp3');
var sound2 = new Audio('sounds/wrong.mp3');
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
    }
    else {
        document.getElementById("question").value="You are wrong"
        document.searchImage.src = "images/sadsport.gif"
    }
    document.view.qscore.value=score
}
else if (ans===2){ 
	y = document.getElementById("qans").value
    if(yy==="B"){
        document.getElementById("question").value="You are right"
	 score++
	document.searchImage.src = "images/homerun.gif"
    }
    else {
        document.getElementById("question").value="You are wrong"
        document.searchImage.src = "images/sadsport.gif"
    }
    document.view.qscore.value=score
}
else if (ans===3){ 
	y = document.getElementById("qans").value
    if(yy==="A"){
        document.getElementById("question").value="You are right"
	 score++
	document.searchImage.src = "images/homerun.gif"
    }
    else {
        document.getElementById("question").value="You are wrong"
        document.searchImage.src = "images/sadsport.gif"
    }
    document.view.qscore.value=score
}
else if (ans===4){ 
	y = document.getElementById("qans").value
    if(yy==="D"){
        document.getElementById("question").value="You are right"
	 score++
	document.searchImage.src = "images/homerun.gif"
    }
    else {
        document.getElementById("question").value="You are wrong"
        document.searchImage.src = "images/sadsport.gif"
    }
    document.view.qscore.value=score
}
else if (ans===5){ 
	y = document.getElementById("qans").value
    if(yy==="C"){
        document.getElementById("question").value="You are right"
	 score++
	document.searchImage.src = "images/homerun.gif"
    }
    else {
        document.getElementById("question").value="You are wrong"
        document.searchImage.src = "images/sadsport.gif"
    }
    document.view.qscore.value=score
}
else if (ans===6){ 
	y = document.getElementById("qans").value
    if(yy==="C"){
        document.getElementById("question").value="You are right"
	 score++
	document.searchImage.src = "images/homerun.gif"
    }
    else {
        document.getElementById("question").value="You are wrong"
        document.searchImage.src = "images/sadsport.gif"
    }
    document.view.qscore.value=score
}
else if (ans===7){ 
	y = document.getElementById("qans").value
    if(yy==="B"){
        document.getElementById("question").value="You are right"
	 score++
	document.searchImage.src = "images/homerun.gif"
    }
    else {
        document.getElementById("question").value="You are wrong"
        document.searchImage.src = "images/sadsport.gif"
    }
    document.view.qscore.value=score
}
else if (ans===8){ 
	y = document.getElementById("qans").value
    if(yy==="A"){
        document.getElementById("question").value="You are right"
	 score++
	document.searchImage.src = "images/homerun.gif"
    }
    else {
        document.getElementById("question").value="You are wrong"
        document.searchImage.src = "images/sadsport.gif"
    }
    document.view.qscore.value=score
}
else if (ans===9){ 
	y = document.getElementById("qans").value
    if(yy==="D"){
        document.getElementById("question").value="You are right"
	 score++
	document.searchImage.src = "images/homerun.gif"
    }
    else {
        document.getElementById("question").value="You are wrong"
        document.searchImage.src = "images/sadsport.gif"
    }
    document.view.qscore.value=score
}
else if (ans===10){ 
	y = document.getElementById("qans").value
    if(yy==="A"){
        document.getElementById("question").value="You are right"
	score++
	document.searchImage.src = "images/homerun.gif"
    }
    else {
        document.getElementById("question").value="You are wrong"
        document.searchImage.src = "images/sadsport.gif"
    }
    document.view.qscore.value=score
}
	ans++; 
}
        
function main(){ 
if (i===1){ 
	document.view.qnum.value=i;
    document.view.qscore.value=0;
	document.view.question.value ="What NBA team is Kyrie Irving on? \na)Golden State Warriors \nb)Duke University \nc)Boston Celtics \nd)Cleveland Cavaliers";
    document.view.qans.value=""
}
else if (i===2){ 
	document.view.qnum.value=i;	
	document.view.question.value ="What City has Knicks in its team name? \na)Toronto \nb)New York \nc)Chicago \nd)Detroit";
    document.view.qans.value=""
}
else if (i===3){ 
	document.view.qnum.value=i;	
	document.view.question.value ="What was the Last Team Wayne Gretzky played on? \na)New York Rangers \nb)Edmonton Oilers \nc)Los Angeles Kings \nd)St. Louis Blues";
    document.view.qans.value=""
}
else if (i===4){ 
	document.view.qnum.value=i;	
	document.view.question.value ="What does NHL stand for? \na)National Horse League \nb)National Housing Lease \nc)Normal Horse Lancing \nd)National Hockey League";
    document.view.qans.value=""
}
else if (i===5){ 
	document.view.qnum.value=i;	
	document.view.question.value ="Which of these materials are in a baseball? \na)Metal \nb)Steel \nc)Rubber \nd)Wood";
    document.view.qans.value=""
}
else if (i===6){ 
	document.view.qnum.value=i;	
	document.view.question.value ="What does MLB stand for? \na)Major Legacy Ball \nb)Major Legacy Baseball \nc)Major League Baseball \nd)Mens League Baseball";
    document.view.qans.value=""
}
else if (i===7){ 
	document.view.qnum.value=i;	
	document.view.question.value ="Who holds the record for most touchdown passes in the NFL? \na)Tom Brady \nb)Peyton Manning \nc)Eli Manning \nd)Aaron Rodgers";
    document.view.qans.value=""
}
else if (i===8){ 
	document.view.qnum.value=i;	
	document.view.question.value ="Who won the superbowl in 2017? \na)New England Patriots \nb)Green Bay Packers \nc)Denver Broncos \nd)Pittsburgh Steelers";
    document.view.qans.value=""
}
else if (i===9){ 
	document.view.qnum.value=i;	
	document.view.question.value ="Who has the most Mens Tennis Title Wins? \na)Rafael Nadal \nb)Serena Williams \nc)Roy Emerson \nd)Roger Federer";
    document.view.qans.value=""
}
else if (i===10){ 
	document.view.qnum.value=i;	
	document.view.question.value ="What is the most expensive golf club? \na)Honma Five Star Tokaido 7 Iron \nb)Steel iron 7 \nc)Honma Five Star Clubs. Photo \nd)Barth and Sons Golden Putter";
    document.view.qans.value=""
}
else if (i===11){
    alert("You got"+ " " + Math.round(score/(i-1)*100)  + "% for this Trivia Quiz")
}
	i++; 
}
 
