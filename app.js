function showInput() {
    document.getElementById('selection-output').innerHTML = document.querySelector(".radio-input:checked").value;

}



function changeStateOne() {
    var stateOne = document.getElementById('card-state-one');
    var submitButton = document.getElementById('submit-btn');
    
    submitButton.addEventListener("click", () => { stateOne.style.display = "none" }); 

    console.log("hey im state one");
}
function changeStateTwo() {
    var stateTwo = document.getElementById('card-state-two');
    var submitButton = document.getElementById('submit-btn');
    submitButton.addEventListener("click", () => { stateTwo.style.display = "block" }); 

    console.log("hey im state two");
}
