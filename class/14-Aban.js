const firstP = document.getElementsByClassName('firstP')[0]
const secondP = document.getElementsByClassName('secondP')[0]

const changeContent = () => {
    firstP.textContent = "Content is Changed!"
}
const changeBGColor = () => {
    secondP.style.backgroundColor ="red"
}

firstP.addEventListener('click', changeContent)
secondP.addEventListener('click', changeBGColor)

