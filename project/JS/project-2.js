const Aladdin = new NewMovie(`../Img/Aladdin.jfif`, `Aladdin`, `6.9`, `2019`, ` 2`)
const Avengers = new NewMovie(`../Img/Avengers`, `Avengers`, `8.4`, `2019`, `2`)
const BeautyAndBeast = new NewMovie(`../Img/BeautyAndBeast`, `BeautyAndBeast`, `7.1`, `2017`, `2`)
const Dune = new NewMovie(`../Img//Dune`, `Dune`, `7.1`, `2017`, `2`)
const GOT = new NewMovie(`../Img//GOT`, `GOT`, `9.2`, `2011`, `2`)
const Joker = new NewMovie(`../Img//Joker`, `Joker`, `8.4`, `2019`, `2`)
const See = new NewMovie(`../Img//See`, `SEE`, `8.4`, `2019`, `2`)

const movieCard = document.getElementById(`movieInformation`)
const movieCardParent = document.getElementById(`movieGallery`)
const NewMovieCard = document.createElement(`div`)
NewMovieCard.id = `movieInformation`
movieCardParent.appendChild(NewMovieCard)
const arrMovie=movieCard.children
console.log(arrMovie)

function NewMovie(imagSrc, movieName, IMDBRate, updateDate, runningTime) {
    this.imagSrc = imagSrc;
    this.movieName = movieName;
    this.IMDBRate = IMDBRate;
    this.updateDate = updateDate;
    this.runningTime = runningTime;
    this.createNewMovie = () => {
        for (const item in NewMovie) {
            NewMovieCard.children[1].innerHTML = this.movieName
            NewMovieCard.children[2].innerHTML = this.IMDBRate
            NewMovieCard.children[5].innerHTML = this.updateDate
            NewMovieCard.children[6].innerHTML = this.runningTime
        }
    }
}
