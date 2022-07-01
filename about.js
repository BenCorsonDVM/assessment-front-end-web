console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("The form has been submitted successfully!");
}

function mouseoverPicture(event) {
	event.preventDefault();

	alert("You're the best coder in the world!")
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

let rubberDuck = document.querySelector('#rubber-duck')

rubberDuck.addEventListener('mouseover', mouseoverPicture)