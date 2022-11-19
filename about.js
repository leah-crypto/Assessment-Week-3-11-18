console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submit');
}

// function outputImage(e){
// 	e.mouseover();
// }

grumpyCat.addEventListener('mouseover', () =>{
	alert("Cats are lovely and so are you.");
})

let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

var myArray = ["Joes Pizza and Pasta", "The philly shack", "Habaneros", "Magic Spring Roll", "Nepali Chulo Indian Cuisine", "Aladdin Mediterranean Café"];

const button4 = document.querySelector('#restruants');

const rando = Math.floor(Math.random() * myArray.length);

button4.addEventListener('click', () =>{
	alert(rando, myArray[rando]);
});