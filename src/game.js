import React from "react"
import Card from "./card"

class Game extends React.Component {

  state = {
    cards: [
      { src: "/images/dog1.jpeg" },
      { src: "/images/dog2.jpeg" },
      { src: "/images/dog3.jpeg" }
    ]
  }

  renderCard = (something) => {
    return <Card src={something.src} />
  }

  render() {
    return (
      <div className="game">
        <h1>Memory game</h1>
        {this.state.cards.map(this.renderCard)}
      </div>
    )
  }

}

export default Game
