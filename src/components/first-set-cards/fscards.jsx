import React from 'react'
import './style/fscards.css'
 let Fscards= (props)=> {
    return (       
        <div className="main-container">

        <div className="container-bg"> 
        <img src={props.img}/> </div>
        <h1>{props.lable}</h1>
           </div> 
           )

}


export default Fscards;
