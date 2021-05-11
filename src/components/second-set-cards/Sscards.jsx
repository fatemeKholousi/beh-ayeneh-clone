import React from 'react'
import './sscards.style.css'

const Sscards = (props) => {
    return (
        <div className="card">
        <img src={props.img}/>
        <h2>{props.lbl}</h2>

        </div>
    )
}

export default Sscards