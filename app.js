function showInput() {
    document.getElementById('selection-output').innerHTML = document.querySelector(".radio-input:checked").value;

}

function changeStateOne() {
    var stateOne = document.getElementById('card-state-one');

    stateOne.style.display = "none";
}

function changeStateTwo() {
    var stateTwo = document.getElementById('card-state-two');

    stateTwo.style.display = "block";
}

