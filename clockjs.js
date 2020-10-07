var wakeUpTime = 7;
var lunchTime = 12;
var party ;
var evening = 18;
var noon = 12;
var napTime = lunchTime + 2;

function ctime(){
	t = new Date();
	t1=t.toLocaleTimeString();
	document.getElementById("time").innerHTML=t1;
}

function updateClock(){
	var time = new Date().getHours();
	var message;
	var image = "normalTime.jpg";
	let wakeUpTime = document.getElementById("wakeup").value;
	let napTimer = document.getElementById("nap").value;
	let lunchTime = document.getElementById("lunch").value;
	var lolcatImageJS = document.getElementById('lolcatImage');
	var timeEventJS = document.getElementById('timeEvent');

	if(time == wakeUpTime){
		image = "wakeUpTime.jpg";
		message = "Wake Up Bro!"
	}
	else if(time == lunchTime)
	{
		image = "lunchTime.jpg";
		message = "Let's Have Some Lunch!"
	}
	else if(time == napTime){
		image = "napTime.jpg";
		message = "Sleepy Sleepy!"
	}
	else if(time == party){
		image = "partyTime.jpg";
		message = "It's Party Time!"
	}
	else if(time < noon){
		image = "notNoon.jpeg";
		message = "Good Morning!"
	}
	else if(time > evening){
		image = "Cat_sleep.jpg";
		message = "Good Evening!"
	}
	else{
		image = "normalTime.jpg";
		message = "Good Afternoon!"
	}

	console.log(message);
	/*var catImg = document.getElementById('catImg1');
	var status = document.getElementById('status');*/
	lolcatImageJS.src = image;
	timeEventJS.innerText = message;
	
	ctime();
};
updateClock();

setInterval(updateClock,1000);

var partybtn = document.getElementById("partytimebtn");
function partystart(){
	if(party<0){
		party = new Date().getHours();
		partytimebtn.innerText = "Party Over!";
		partytimebtn.style.backgroundColor = "#0A8DAB";
	}
	else{
		party = -1;
		partytimebtn.style.backgroundColor = "#222";
		partytimebtn.style.color = "#fff";
		partytimebtn.innerText = "Party Time!";
		
	}
}

document.getElementById("partytimebtn").onclick = function() {partystart()};
partystart();