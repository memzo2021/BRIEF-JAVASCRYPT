//TODO mes variables
let content = document.querySelector("#Time");
let btn = document.querySelector("button");

  //function () {
	//TODO callback
	//setInterval(timeDisplay, 1000);
//});
	setInterval(timeDisplay, 1000);

function timeDisplay() {
	let DATE = new Date();
	content.textContent = DATE.toLocaleTimeString("fr");
	if (DATE.getSeconds() % 3 == 0) {
		content.style.color = "red";
		content.style.fontWeight = "bold";
	} else {
		content.style.color = "";
	}
}
