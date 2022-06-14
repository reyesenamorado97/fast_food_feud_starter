import * as React from "react"
import "./Chip.css"



export function Chip({ label = "", isActive = false, onClick }) {

  var buttonClassName

  if (isActive == false) {
    buttonClassName = "chip"
  }
  else {
      buttonClassName = "chip active "
  }
isActive = true

  return (

    <button className={buttonClassName } onClick={onClick}>
      
      <p className="label">{label}</p>
      <span className="close" role="button">{`X`}</span>
    </button>
  )
}

export default Chip
