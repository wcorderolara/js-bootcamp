const images = [
    './images/img1.png',
    './images/img2.png',
    './images/img3.png',
    './images/img4.png',
    './images/img5.png',
    './images/img6.png',
    './images/img7.png',
    './images/img8.png',
    './images/img9.png',
    './images/img10.png',
];

const imagesList = [...images, ...images]
const totalImages = imagesList.length;
let flippedCards = [];
let matchedCards = [];

function createCard(image) {
    const card = document.createElement('div');
    card.classList.add('card');

    const cardInner = document.createElement('div');
    cardInner.classList.add("card-inner");
    card.appendChild(cardInner);

    const cardFront = document.createElement('div');
    cardFront.classList.add('card-front');
    cardInner.appendChild(cardFront);

    const cardBack = document.createElement('div');
    cardBack.classList.add("card-back");
    cardBack.style.backgroundImage = `url(${image})`;
    cardBack.style.backgroundSize = "90%";
    cardBack.style.backgroundRepeat = "no-repeat";
    cardBack.style.backgroundPosition = "center";
    cardBack.style.objectFit = "contain";
    cardInner.appendChild(cardBack);

    card.addEventListener('click', () => {
        if(flippedCards.length < 2 && !card.classList.contains('flipped')) {
            card.classList.add('flipped');
            flippedCards.push(card);

            if(flippedCards.length === 2) {
                const image1 = flippedCards[0].querySelector('.card-back').style.backgroundImage;
                const image2 = flippedCards[1].querySelector('.card-back').style.backgroundImage;

                if(image1 === image2) {
                    flippedCards.forEach( fCard => {
                        fCard.classList.add('success');
                        matchedCards.push(fCard);
                    })

                    if(matchedCards.length == totalImages) {
                        setTimeout( () => {
                            alert('Felicidades has ganado!');
                        },500);
                    }

                    flippedCards = [];
                } else {
                    setTimeout( () => {
                        flippedCards.forEach( fCard => {
                            fCard.classList.remove('flipped');
                        })
                        flippedCards = []
                    }, 1500);
                }
            }
        }
    })


    return card;
}


function initilizeGame() {
    const container = document.getElementById('card-container');
    const amountImages = imagesList.length;

    for(let x = 0; x < amountImages; x++) {
        const index = Math.floor(Math.random() * imagesList.length);
        const image = imagesList[index];
        imagesList.splice(index,1);
        const card = createCard(image);
        container.appendChild(card);
    }
    
}


initilizeGame();



