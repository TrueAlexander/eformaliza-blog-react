const langToggle = () => {
  const langs = document.querySelectorAll(".langToggle__btn")

  langs.forEach((lang) => {
    lang.addEventListener("click", (event) => {
      if (event.target.classList.contains("active")) {
      } else {
        langs.forEach((lang) => {
          lang.classList.remove("active")

          if (visualViewport.width < 700) {
            lang.style.display = "none"
          }
        })

        event.target.classList.add("active")

        if (event.target.innerHTML === "En") {
          //load eng.html
          window.open("./eng.html", "_self")
        } else if (event.target.innerHTML === "Es") {
          //load esp.html
          window.open("./esp.html", "_self")
        } else {
          //load index.html
          window.open("./", "_self")
        }
      }
    })
  })
}

export default langToggle
