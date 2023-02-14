import React from "react";
import './Card.css';

function Card(props){
    const classes = 'card ' + props.className; //concatenando o nome da classe pra incluir a classe card
    // chamando classes como um objeto javascript pra deixar a className dinamica
    return <div className={classes}> 
        {props.children}  
    </div>
}
export default Card;