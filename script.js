const vision = document.querySelector(".vision")
const pass = document.querySelector(".password")

vision.addEventListener("click", () => {
    if (vision.classList.contains("visible")) {
        vision.classList.remove("visible")
        pass.type = "password"
    } else {
        vision.classList.add("visible")
        pass.type = "text"
    }
})