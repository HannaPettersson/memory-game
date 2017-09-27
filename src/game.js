import React from "react"
import Card from "./card"
import shuffle from "shuffle-array"

const photos = [
  "/images/dog1.jpeg",
  "/images/dog2.jpeg",
  "/images/dog3.jpeg"
]

class Game extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      cards: this.setupGame()
    }
  }

  setupGame = () => {
    const duplicatedPhotos = photos.concat(photos)
    const shuffledPhotos = shuffle(duplicatedPhotos)
    return shuffledPhotos.map((url) => ({
      src: url,
      isFlipped: false
    }))
  }

  // New function which will take one argument, a "card src" and logs it
  handleCardClicked = (cardSrc) => {
    console.log(cardSrc)
  }

  // Create a new instance of the Card component. With the following props:
  //   src: the url of the photo for the card
  //   whenClicked: a callback function which the card can invoke when it is clicked
  renderCard = (card) => (
    <Card src={card.src} whenClicked={this.handleCardClicked} />
  )

  render() {
    return (
      <div className="game">
        <h1>Memory game</h1>
        {this.state.cards.map((card) => (this.renderCard(card)))}
      </div>
    )
  }

}

export default Game
