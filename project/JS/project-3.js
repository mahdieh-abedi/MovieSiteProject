// parent
const parent = document.getElementById(`movieGallery`)

// Twin & Children
const movieCard = document.getElementsByClassName(`movie`)[0]
const movieCardChildren = document.getElementsByClassName(`movie`)[0].children

// New Card Style and Append to HTML
const newMovieCard = document.createElement("div")
newMovieCard.className = movieCard.className
parent.appendChild(newMovieCard)

// New Movie Card Children
const newMovieImage = document.createElement("img")
const newMovieName = document.createElement("h2")
const newMovieRate = document.createElement("h4")
const lastUpdate = document.createElement("h5")
const runningTime = document.createElement("h5")
const newMovieLastUpdate = document.createElement("p")
const newMovieRunningTime = document.createElement("p")

// New Movie Card Children Style
newMovieImage.className = movieCardChildren[0].className
newMovieName.className = movieCardChildren[1].className
newMovieRate.className = movieCardChildren[2].className
lastUpdate.className = movieCardChildren[3].className
runningTime.className = movieCardChildren[4].className
newMovieLastUpdate.className = movieCardChildren[5].className
newMovieRunningTime.className = movieCardChildren[6].className

//New Parent
const newParent = document.getElementById(`movieGallery`).lastChild
newParent.appendChild(newMovieImage)
newParent.appendChild(newMovieName)
newParent.appendChild(newMovieRate)
newParent.appendChild(lastUpdate)
newParent.appendChild(runningTime)
newParent.appendChild(newMovieLastUpdate)
newParent.appendChild(newMovieRunningTime)

//Object New Movie
function NewMovie(imagSrc, movieName, IMDBRate, updateDate, movieDuration) {
    this.imagSrc = imagSrc;
    this.movieName = movieName;
    this.IMDBRate = IMDBRate;
    this.updateDate = updateDate;
    this.movieDuration = movieDuration;
}

const NewMovieInformation=()=>{
    newMovieImage.src = this.imagSrc;
    newMovieName.textContent = this.movieName;
    newMovieRate.textContent = this.IMDBRate;
    lastUpdate.textContent = "Last Update"
    runningTime.textContent = "Running Time"
    newMovieLastUpdate.textContent = this.updateDate;
    newMovieRunningTime.textContent = this.movieDuration;
}
const Aladdin = new NewMovie(`../Img/Aladdin.jfif`, `Aladdin`, `6.9`, `2019`, `2`)
new NewMovie(Aladdin)
NewMovieInformation()

