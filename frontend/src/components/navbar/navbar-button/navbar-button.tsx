import React from 'react'
import './navbar-button.css'


/**
 * Button component for navbar 
 * @author Dawid Jeziorski <@Dave848>
 * @param props - must contain link and name 
 * @returns {TSX} component responsible for navbar button
 */
const Button = (props: any) => {
  console.log(props);
  return <div>
    <a href={props.link}>
      <button className="navbar-button">
        <span>{props.buttonName}</span>
      </button>
    </a>
  </div>
}

export default Button