const postButton = document.getElementById("postButton")
const dropdownMenu = document.getElementById("dropdownMenu")

postButton.addEventListener("click", () => {
    if (dropdownMenu.style.display === "flex") {
        dropdownMenu.style.display = "none"
    } else {
        dropdownMenu.style.display = "flex"
    }
});

document.addEventListener("click", (event) => {
    if (!postButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
        dropdownMenu.style.display = "none";
    }
});

