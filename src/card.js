import React from "react"
import "./card.css"

const Card = (props) => (
  <div className="card">
    <img src={props.src} alt="" />
  </div>
)

export default Card
