import React from 'react'
import './sscards.style.css'

const Sscards = (props) => {
    return (
        <div className="container">
            <div className="card"> 
        <img src={props.img}/>
        <a href="#"><h2>{props.lbl}</h2></a>
</div>
        </div>
    )
}

export default Sscards