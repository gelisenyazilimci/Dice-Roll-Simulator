"use strict";

const rollButton: HTMLButtonElement = document.getElementById("roll-button") as HTMLButtonElement;
const diceElement: HTMLDivElement = document.getElementById("dice") as HTMLDivElement;
const rollHistoryElement: HTMLUListElement = document.getElementById("roll-history") as HTMLUListElement;

let historyList: number[] = [];

rollButton.addEventListener("click", () => {
    diceElement.classList.add("roll-animation");
    setTimeout(() => {
        rollDice();
        diceElement.classList.remove("roll-animation");
    }, 1000); // 
});

function rollDice(): void {
    const rollResult: number = generateRandomNumber(1, 6);
    diceElement.innerHTML = getDiceFace(rollResult);
    historyList.push(rollResult);
    updateRollHistory(); // Geçmişi güncelle
}

function updateRollHistory(): void {
    rollHistoryElement.innerHTML = "";
    historyList.forEach((roll, index) => {
        const listItem: HTMLLIElement = document.createElement("li");
        listItem.innerHTML = `Roll ${index + 1}: <span>${getDiceFace(roll)}</span>`;
        rollHistoryElement.appendChild(listItem);
    });
}

function getDiceFace(rollResult: number): string {
    const diceMapping: Map<number, string> = new Map<number, string>([
        [1, "⚀"],
        [2, "⚁"],
        [3, "⚂"],
        [4, "⚃"],
        [5, "⚄"],
        [6, "⚅"]
    ]);
    return diceMapping.get(rollResult) || "ERROR";
}

function generateRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
