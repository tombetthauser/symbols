// let userSeconds = prompt("Set Seconds");
// let time = parseInt(userSeconds) * 1000;
// let userAudio = prompt("Audio");
// let userSwitch = prompt("Switch Audio");
// let enterSwitch = false;
let userAudio = true;
let userSwitch = false;
let time = 3000;

// let userFilter = prompt("Set Filter");
let userFilter = "";

if (userFilter === "yellow") {
	document.getElementById("filter").style.backgroundColor = "#b57500";
} else if (userFilter === "red") {
	document.getElementById("filter").style.backgroundColor = "#891d00";
} else if (userFilter === "umber") {
	document.getElementById("filter").style.backgroundColor = "#422900";
}

const imageSwitch = () => {
	let randomNum = (Math.round(Math.random() * 226));
	document.getElementById("image").src = "images/" + randomNum + ".jpg";
	randomNum = (Math.round(Math.random() * 226));
	document.getElementById("image2").src = "images/" + randomNum + ".jpg";
	randomNum = (Math.round(Math.random() * 226));
	document.getElementById("image3").src = "images/" + randomNum + ".jpg";
}

const filterSwitch = () => {
	let randomNum = (Math.round(Math.random() * 2));
		if (randomNum === 0) {
			document.getElementById("filter").style.backgroundColor = "#b57500";
			lastColor = "#b57500";
		} else if (randomNum === 1) {
			document.getElementById("filter").style.backgroundColor = "#891d00";
			lastColor = "#891d00";
		} else if (randomNum === 2) {
			document.getElementById("filter").style.backgroundColor = "#422900";
			lastColor = "#422900";
		};
};

// const rotateSwitch = () => {
// 	// randomNum = (Math.round(Math.random() * 360) - 180);
// 	// document.getElementById("body").style.transform = "rotate(" + randomNum + "deg)";

// 	// randomNum = (Math.round(Math.random() * 360) - 180);
// 	// document.getElementById("image").style.transform = "rotate(" + randomNum + "deg)";
// 	// randomNum = (Math.round(Math.random() * 360) - 180);
// 	// document.getElementById("image2").style.transform = "rotate(" + randomNum + "deg)";
// 	// randomNum = (Math.round(Math.random() * 360) - 180);
// 	// document.getElementById("image3").style.transform = "rotate(" + randomNum + "deg)";
// }

imageSwitch();
if (userFilter === "random") { filterSwitch() };
let randomNum2 = (Math.round(Math.random() * 25) + 150);
let randomNum3 = 0 - (Math.round(Math.random() * 35) + 15);
let randomNum4 = 0 - (Math.round(Math.random() * 35) + 15);
document.getElementById("image").style.width = randomNum2 + "%";
document.getElementById("image").style.width = randomNum2 + "%";
document.getElementById("image").style.marginTop = randomNum3 + "%";
document.getElementById("image").style.marginLeft = randomNum3 + "%";
document.getElementById("image2").style.width = randomNum2 + "%";
document.getElementById("image2").style.width = randomNum2 + "%";
document.getElementById("image2").style.marginTop = randomNum3 + "%";
document.getElementById("image2").style.marginLeft = randomNum3 + "%";
document.getElementById("image3").style.width = randomNum2 + "%";
document.getElementById("image3").style.width = randomNum2 + "%";
document.getElementById("image3").style.marginTop = randomNum3 + "%";
document.getElementById("image3").style.marginLeft = randomNum3 + "%";
// rotateSwitch();

setInterval( () => { 
	let randomNum2 = (Math.round(Math.random() * 25) + 150);
	let randomNum3 = 0 - (Math.round(Math.random() * 35) + 15);
	let randomNum4 = 0 - (Math.round(Math.random() * 35) + 15);
	document.getElementById("image").src = "";
	document.getElementById("image").style.width = randomNum2 + "%";
	document.getElementById("image").style.width = randomNum2 + "%";
	document.getElementById("image").style.marginTop = randomNum3 + "%";
	document.getElementById("image").style.marginLeft = randomNum3 + "%";
	if (userFilter === "random") { filterSwitch() };
	// rotateSwitch();
	imageSwitch();
	if (userSwitch && enterSwitch) { document.getElementById('switchAudio').play(); }
}, time);

setInterval( () => { 
	let randomNum2 = (Math.round(Math.random() * 25) + 150);
	let randomNum3 = 0 - (Math.round(Math.random() * 35) + 15);
	let randomNum4 = 0 - (Math.round(Math.random() * 35) + 15);
	document.getElementById("image2").src = "";
	document.getElementById("image2").style.width = randomNum2 + "%";
	document.getElementById("image2").style.width = randomNum2 + "%";
	document.getElementById("image2").style.marginTop = randomNum3 + "%";
	document.getElementById("image2").style.marginLeft = randomNum3 + "%";
	if (userFilter === "random") { filterSwitch() };
	imageSwitch();
}, time);

setInterval( () => { 
	let randomNum2 = (Math.round(Math.random() * 25) + 150);
	let randomNum3 = 0 - (Math.round(Math.random() * 35) + 15);
	let randomNum4 = 0 - (Math.round(Math.random() * 35) + 15);
	document.getElementById("image3").src = "";
	document.getElementById("image3").style.width = randomNum2 + "%";
	document.getElementById("image3").style.width = randomNum2 + "%";
	document.getElementById("image3").style.marginTop = randomNum3 + "%";
	document.getElementById("image3").style.marginLeft = randomNum3 + "%";
	if (userFilter === "random") { filterSwitch() };
	imageSwitch();
}, time);

window.onkeyup = function(e) {
	var key = e.keyCode ? e.keyCode : e.which;
	if (userAudio) { document.getElementById('audio').play(); };
	enterSwitch = true;
	if (key == 13) {
       var elem = document.getElementById("body");
	   req = elem.requestFullScreen || elem.webkitRequestFullScreen || elem.mozRequestFullScreen;
	   req.call(elem);	
   }
	if (key == 81) {
       location.reload(); 
   }
};