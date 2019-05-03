var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ol = document.querySelector("ol");



function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ol.appendChild(li);
	input.value = "";

	var deleteButton = document.createElement("button");
	deleteButton.classList.add("customButton");
	deleteButton.innerHTML = "Delete";
	deleteButton.addEventListener("click", deleteItem);
	li.append(deleteButton);

	function deleteItem () {
		li.remove();
	}
}	

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}
function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}
function cross(a) {
	a.target.classList.toggle("done");	
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ol.addEventListener("click", cross);