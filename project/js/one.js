var toggleClass = document.querySelector(".toggle-class");
toggleClass.addEventListener("click", function () {
    toggleClass.classList.toggle("active")
    if (this.classList.contains("active")) {
        document.querySelector(".sidebar").style.left="700px"
    }
})
