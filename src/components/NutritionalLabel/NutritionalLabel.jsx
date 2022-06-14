import * as React from "react"
import { nutritionFacts } from "../../constants"
import "./NutritionalLabel.css"

export function NutritionalLabel(props) {
  // Destructure
  const {item} = props;
  console.log({item})
  return (
    <div className="nutritional-label">
      <h3 className="title">Nutrition Facts</h3>

      <h4 className="item-name">{item.item_name}</h4>

      <ul className="fact-list">{nutritionFacts.map((facts) => (

        <NutritionalLabelFact nutritionalLabel={facts.label} item = {item} key={facts.id} attribute={facts.attribute}/>
      ))}
      </ul>
    </div>
  )
}

export function NutritionalLabelFact(props) {
  const {item} = props;
console.log(item.nutritionalLabel)
  return (
    <li className="nutrition-fact">
      <span className="fact-label">{props.nutritionalLabel}</span>{" "}
      <span className="fact-value">{item[props.attribute]}</span>
    </li>
  )
}

export default NutritionalLabel
