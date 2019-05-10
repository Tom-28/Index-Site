/*The JavaScript Code for the Index Site*/


// Get the modals
var modalOne = document.getElementById('myModalOne');
var modalTwo = document.querySelector('#myModalTwo')

// Get the buttons that open the modals
var btn = document.getElementById("hsKurse");
var btm = document.querySelector('#oKurse');

// Get the <span> elements that close the modals
var spanOne = document.querySelector('#closeOne');
var spanTwo = document.querySelector('#closeTwo');

// When the user clicks on the button, open the modal 
btn.onclick = function() {
  modalOne.style.display = "block";
}

btm.onclick = function() {
    modalTwo.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanOne.onclick = function() {
  modalOne.style.display = "none";
}

spanTwo.onclick = function() {
    modalTwo.style.display = "none";
}
