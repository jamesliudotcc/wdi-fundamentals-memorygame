/* eslint-disable no-console */
var cards = [
  { rank: 'queen', suit: 'hearts', cardImage: 'images/queen-of-hearts.png' },
  {
    rank: 'queen',
    suit: 'diamonds',
    cardImage: 'images/queen-of-diamonds.png',
  },
  { rank: 'king', suit: 'hearts', cardImage: 'images/king-of-hearts.png' },
  { rank: 'king', suit: 'diamonds', cardImage: 'images/king-of-diamonds.png' },
];
var cardsInPlay = [];

function createBoard() {
  for (var i = 0; i < 4; i++) {
    let cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard);
    document.getElementById('game-board').appendChild(cardElement);
  }
}

function checkForMatch() {
  if (cardsInPlay[0].rank === cardsInPlay[1].rank) {
    alert('You found a match!');
  } else {
    alert('Sorry, try again.');
  }
  cardsInPlay = [];
}

function flipCard() {
  var cardId = this.getAttribute('data-id');
  console.log('User flipped ' + cards[cardId].rank);
  cardsInPlay.push(cards[cardId]).rank;
  this.setAttribute('src', cards[cardId].cardImage);
  if (cardsInPlay.length > 1 && cardsInPlay[0] !== cardsInPlay[1]) {
    console.log(cards[cardId].cardImage);
    console.log(cards[cardId].suit);
    checkForMatch();
  } else if (cardsInPlay[0] === cardsInPlay[1]) {
    cardsInPlay.pop();
  }
}
console.log('create board');
createBoard();
