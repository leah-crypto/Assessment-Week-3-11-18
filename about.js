console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submit');
}

// function (){

// }


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);