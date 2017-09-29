import React from "react" // We need react to use react
import "./card.css" // Just normal css, react injects it into the <head> component

// Defining a "Card" component.
// That component is inheriting functions from React.Component
class Card extends React.Component {

  // The function whe call from onClick. We give it a name 'handleClick'
  // and it takes no arguments. Because it's in this class, it has access to `this`.
  // So it can use this.props.id
  //
  // This will call the `whenClicked` function which was passed into the Card
  // as a prop from the Game component.
  handleClick = () => {
    this.props.whenClicked(this.props.id)
  }

  // Function to return a different class name when the prop `isFlipped`
  // is true or false. It needs to return the correct class names!
  getClassName = () => {
    if (this.props.isFlipped) {
      return "card flipped"
    } else if (this.props.isMatched) {
      return "card matched"
    } else {
      return "card not-flipped"
    }
  }

  // render() is a required function for our component.
  // React will invoke this function when it mounts the component.
  render() { // render function definition. NOT using the fat arrow.
    // The render needs to return JSX.
    // JSX is basically HTML, but you use components as well,
    // for example, when we render this card, we do so in the
    // Game components by using <Card />
    //
    // Props become an object so, className="foo", becomes { className: "foo" }
    // on this.props, and onClick becomes { onClick: () => {} }
    return (
      <div className={this.getClassName()} onClick={this.handleClick}>
        <img src={this.props.src} alt="" />
      </div>
    )
  }
}

// To be able to use `import Card from "./card"`, we need to export it
export default Card
