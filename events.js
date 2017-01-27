//This targets where I want the mouseover and mouseout event messages to print out, and also where whatever I choose to type in the text-input field will print out
var outputTarg = document.getElementById("output-target");


//This targets each item in section tags and tells me when/ which one I click on...message will print out to output target field
var sectionTarg = document.getElementsByClassName("article-section");
function handleSectionClick(MouseEvent) {
	console.log(event);
	var sectionText = event.target.innerHTML;
	outputTarg.innerHTML = "You clicked on " + sectionText;
}


//This loopsthrough section tag items to see which one is clicked on
for (var i = 0; i < sectionTarg.length; i++) {
	sectionTarg.item(i).addEventListener("click", handleSectionClick);
}


//This lets me know when the mouse moves on and off the h1 element and prints out message to output target field
var header = document.getElementById("page-title");

header.addEventListener("mouseover", handleHeaderMouseOver);
header.addEventListener("mouseout", handleHeaderMouseOut);

function handleHeaderMouseOver(event) {
	outputTarg.innerHTML = "You moved your mouse over the header";
}

function handleHeaderMouseOut(event) {
	outputTarg.innerHTML = "You left me!!";
}


//This makes it so that anything typed into the input field prints to the output field; "keyup" event fired when key is released as typing
var mirror = document.getElementById("keypress-input");

mirror.addEventListener("keyup", function(event){
	console.log("event", event);
	outputTarg.innerHTML = event.target.value;
});


//This targets text inside the "guinea-pig" div ID; the variable I'm setting up will enable me to target specific buttons to add styling to the text in this section.
var gPig = document.getElementById("guinea-pig");

//Buttons targeted using gPig ID; classList refers back to what class is declared for each of buttons in CSS file. toggle refers to when you toggle onto that class do something.
document.getElementById("add-color")
	.addEventListener("click", function(event){
		gPig.classList.toggle("blue");
	});

document.getElementById("make-large")
	.addEventListener("click", function(event){
		gPig.classList.toggle("large");
	});

document.getElementById("add-border")
	.addEventListener("click", function(event){
		gPig.classList.toggle("bordered");
	});

document.getElementById("add-rounding")
	.addEventListener("click", function(event){
		gPig.classList.toggle("rounded");
	});

