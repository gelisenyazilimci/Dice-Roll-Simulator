"use strict";
var rollButton = document.getElementById("roll-button");
var diceElement = document.getElementById("dice");
var rollHistoryElement = document.getElementById("roll-history");
var historyList = [];
rollButton.addEventListener("click", function () {
    diceElement.classList.add("roll-animation");
    setTimeout(function () {
        rollDice();
        diceElement.classList.remove("roll-animation");
    }, 1000); // 
});
function rollDice() {
    var rollResult = generateRandomNumber(1, 6);
    diceElement.innerHTML = getDiceFace(rollResult);
    historyList.push(rollResult);
    updateRollHistory(); // Geçmişi güncelle
}
function updateRollHistory() {
    rollHistoryElement.innerHTML = "";
    historyList.forEach(function (roll, index) {
        var listItem = document.createElement("li");
        listItem.innerHTML = "Roll ".concat(index + 1, ": <span>").concat(getDiceFace(roll), "</span>");
        rollHistoryElement.appendChild(listItem);
    });
}
function getDiceFace(rollResult) {
    var diceMapping = new Map([
        [1, "⚀"],
        [2, "⚁"],
        [3, "⚂"],
        [4, "⚃"],
        [5, "⚄"],
        [6, "⚅"]
    ]);
    return diceMapping.get(rollResult) || "ERROR";
}
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
