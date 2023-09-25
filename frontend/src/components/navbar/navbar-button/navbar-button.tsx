import React from 'react'
import './navbar-button.css'

const Button = (props:any) => {
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