import React from "react"
import Card from "./card"
import shuffle from "shuffle-array"
import uuidv4 from "uuid/v4"

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
      isFlipped: false,
      id: uuidv4()
    }))
  }

  // This function will be called from the card component because
  // we have passed it as a prop (called whenClicked) when we render
  // the Card component.
  //
  // To generate the new state, we need to .map over the old state,
  // and, if the card we're mapping over is the clicked card,
  // we need to set it's `isFlipped` value to be `true`. Otherwise
  // we don't need to change the state for that card.
  //
  // Finally, we call `this.setState` with the new array we've built.
  handleCardClicked = (clickedCardId) => {
    const newCardsState = this.state.cards.map((card) => {
      if (card.id === clickedCardId) {
        card.isFlipped = true
      }
      return card
    })

    this.setState({ cards: newCardsState }, this.checkIfCardsMatched)
  }

  // Callback function to run after we've flipped cards over.
  checkIfCardsMatched = () => {
    // Use .filter to make an array of the cards which have isFlipped === true
    const flippedCards = this.state.cards.filter((image) => {
      return image.isFlipped
    })

    // If there's 2 flippedCards, we want to hide them
    if (flippedCards.length === 2) {
      // We want to wait a second to hide them, though...
      setTimeout(() => {
        // Use .map to generate a new array of cards which all have
        // isFlipped set to false.
        const newCardsState = this.state.cards.map((image) => {
          image.isFlipped = false
          return image
        })

        // Call setState to update the this.state.cards state
        // with the result from our map above.
        this.setState({ cards: newCardsState })
      }, 1000) // 1000 is the number of milliseconds we're waiting to execute the function
    }
  }

  // Create a new instance of the Card component. With the following props:
  //   src: the url of the photo for the card
  //   whenClicked: a callback function which the card can invoke when it is clicked
  //   key: a unique identifier for react to use when rendering from an array
  //   id: a unique identifier we can use to refer to this card later
  //   isFlipped: a boolean which will be toggled when the card is flipped
  renderCard = (card) => (
    <Card
      key={card.id}
      id={card.id}
      src={card.src}
      isFlipped={card.isFlipped}
      whenClicked={this.handleCardClicked} />
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
