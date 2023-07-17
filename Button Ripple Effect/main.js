const buttonElement = document.querySelector(".btn")

buttonElement.addEventListener("mouseover", (event)=> {
  const x = (event.pageX - buttonElement.offsetLeft);

  const y = (event.pageY - buttonElement.offsetTop);

  buttonElement.style.setProperty("--xPos", x + "px")
  buttonElement.style.setProperty("--yPos", y+ "px")
})