"use strict";
const inputBox = document.getElementById("input-box");
const goalsList = document.getElementById("goals-list");
const button = document.getElementById("button");
const form = document.querySelector("form");
function handleSubmit(e) {
    e.preventDefault();
    // console.log("hello")
    const inputText = inputBox.value;
    if (inputText.trim().length === 0) {
        form.getElementsByTagName("div")[0].classList.add("invalid");
    }
    else {
        form.getElementsByTagName("div")[0].classList.remove("invalid");
        const newLi = document.createElement("li");
        newLi.append(inputText);
        goalsList.append(newLi);
        inputBox.value = "";
    }
    if (goalsList.getElementsByTagName("li").length > 0) {
        document.querySelector("p").style.display = "none";
    }
}
form.addEventListener("submit", handleSubmit);
