import React from "react"
import Card from "./card"

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

  setupGame = () => (
    photos.map((url) => ({
      src: url,
      isFlipped: false
    }))
  )

  render() {
    return (
      <div className="game">
        <h1>Memory game</h1>
        {this.state.cards.map((card) => (
          <Card src={card.src} />
        ))}
      </div>
    )
  }

}

export default Game
