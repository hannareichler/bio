let matcha = document.querySelector("#image1");
matcha.addEventListener("click", clickMatcha);
function clickMatcha(){
	image1.classList.add("clear")
	image2.classList.remove("clear")
	image3.classList.remove("clear1")
	let p = document.querySelector("#bio");
	p.innerHTML = "This is my matcha"
}

function clickSlc(){
	image1.classList.remove("clear")
	image2.classList.add("clear")
	image3.classList.remove("clear1")
	let p = document.querySelector("#bio");
	p.innerHTML = "I went to highschool in SLC, Utah but lived in Germany before that."
}
let slc = document.querySelector("#image2");
slc.addEventListener("click", clickSlc);


let piano = document.querySelector("#image3");
piano.addEventListener("click", clickPiano);
function clickPiano(){
	image1.classList.remove("clear")
	image2.classList.remove("clear")
	image3.classList.add("clear1")
	let p = document.querySelector("#bio");
	p.innerHTML = "I play the piano!"
}

document.body.style.backgroundColor = "#A7D4D3";
