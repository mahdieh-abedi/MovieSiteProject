// localStorage.setItem("name","Mohammad")
// localStorage.setItem("family","Maryam")
// console.log(localStorage.length)
// console.log(localStorage.getItem("family"))
// console.log(localStorage)
// document.cookie="__cookie_id=mabsyp;bbcvgcfurxstfcvgbhikjknj"
// console.log(cookie)

const todoList=[
    {
        title:`my programming plan`,
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque similique temporibus voluptatibus",
        status:"to do",

    }
]
localStorage.setItem("todoList",JSON.stringify(todoList))
