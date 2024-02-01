// Select all input elements except those with type "submit"
const inputElements = document.querySelectorAll('input:not([type="submit"])');

// Add focus and blur event listeners to each input
inputElements.forEach((input) => {
    input.addEventListener("focus", (event) => {
        event.target.style.background = "rgba(251, 230, 22, 0.7)";
    });

    input.addEventListener("blur", (event) => {
        event.target.style.background = "";
    });
});
