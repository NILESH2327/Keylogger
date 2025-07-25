
const inputField = document.getElementById("inputField");
const saveButton = document.getElementById("saveButton");

let keystrokes = [];

inputField.addEventListener("keyup", (event) => {
    const key = event.k
    if (key.length === 1 || key === "Backspace") {
        keystrokes.push(key === "Backspace" ? "[Backspace]" : key);
    }
});


saveButton.addEventListener("click", () => {
    localStorage.setItem("keystrokes", keystrokes.join(" "));
    window.location.href = "display.html"; // Redirect to display page
});
