import React from 'react'
import './button.css';
const Button = ({buttonText, onButtonClick}) => {
  return (
    <div>
    <button class="learn-more" onClick={onButtonClick}>
    <span class="circle" aria-hidden="true">
    <span class="icon arrow"></span>
    </span>
    <span class="button-text">{buttonText}</span>
  </button>
    </div>
  )
}

export default Button
