import React from "react" // We need react to use react
import "./card.css" // Just normal css, react injects it into the <head> component

// Defining a "Card" component.
// That component is inheriting functions from React.Component
class Card extends React.Component {

  // The function whe call from onClick. We give it a name 'handleClick'
  // and it takes no arguments. Because it's in this class, it has access to `this`.
  // So it can use this.props.src
  handleClick = () => {
    alert("I was clicked! " + this.props.src)
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
      <div className="card" onClick={this.handleClick}>
        <img src={this.props.src} alt="" />
      </div>
    )
  }
}

// To be able to use `import Card from "./card"`, we need to export it
export default Card
