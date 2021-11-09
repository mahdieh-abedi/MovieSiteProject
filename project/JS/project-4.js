function Card(image, name, rate, updateDate, runningTime) {
    this.image = image;
    this.name = name;
    this.rate = rate;
    this.updateDate = updateDate;
    this.runningTime = runningTime;
}

const cardsInfo = [];

// movie entry
cardsInfo.push(new Card('../Img/ََAvengersEndgame.jpg', 'ََAvengers: Endgame', 8.8, `SUN 8 SEPT - 10:00PM`, `2HR 05MIN`))
cardsInfo.push(new Card(`../Img/Hobbs&Shaw.jpg`, `Hobbs & Shaw`, 9.7, `TUE 4 JULY - 05:00PM`, `2HR 13MIN`))
cardsInfo.push(new Card(`../Img/JohnWick3.jpg`, `John Wick 3`, 9.8, `WED 16 AUG - 07:00PM`, `2HR 33 MIN`))
cardsInfo.push(new Card(`../Img/Deadpool2.jpg`, `Deadpool 2`, 7.3, `MON 16 OCT - 10:00PM`, `2HR 10MIN`))
cardsInfo.push(new Card(`../Img//TheLionKing.jpg`, `The Lion King`, 8.1, `SUN 8 SEPT - 10:00PM`, `2HR 38MIN`))
cardsInfo.push(new Card(`../Img//MadMaxFuryRoad.jpg`, `Mad Max: Fury Road`, 7.4, `TUE 8 JULY - 05:00PM`, `2HR 11MIN`))
cardsInfo.push(new Card(`../Img//AquaMan.jpg`, `AquaMan`, 8.1, `WED 16 AUG - 07:00PM`, `2HR 14MIN`))
cardsInfo.push(new Card(`../Img//MissionImpossible.jpg`, `Mission Impossible`, 7.8, `MON 18 OCT - 10:00PM`, `2HR 32MIN`))

const cardView = (cardInfo) => {
    return `
    <div id="movie" class="flex-column">
                <img id="movie__img" src=${cardInfo.image} alt=${cardInfo.name}>
                <div id="movie__info" class="flex-column">
                    <div class="info flex-row-wrap">
                        <h2>${cardInfo.name}</h2>
                        <div style="text-align: right">
                            <span id="rate__input">${cardInfo.rate}</span>
                            <span id="rate__sign">/</span>
                            <span id="rate__max">10</span>
                        </div>
                    </div>
                    <div class="info__fix flex-row-wrap">
                        <p>LAST UPDATE</p>
                        <p style="text-align: right">RUNNING TIME</p>
                    </div>
                    <div class="info flex-row-wrap">
                        <h5>${cardInfo.updateDate}</h5>
                        <h5 style="text-align: right">${cardInfo.runningTime}</h5>
                    </div>
                </div>
            </div> `
}

const generateCards = (cardsInfo) => {
    return cardsInfo.map(cardInfo => {
        return cardView(cardInfo)
    }).join(' ');
}

const cardContainer = document.getElementById("main__content")
cardContainer.innerHTML = generateCards(cardsInfo)

function onSearch(element) {
    const searchTerm = element.value;
    const filteredCards = cardsInfo.filter(card => {
        return card.name.includes(searchTerm) || card.rate.includes(searchTerm) || card.runningTime.includes(searchTerm) || card.updateDate.includes(searchTerm)
    })
    cardContainer.innerHTML = generateCards(filteredCards)
}

onSearch(1917)
