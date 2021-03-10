import React from 'react';
import './card-list.styles.css' ;
import {Card} from "../card/card.components";

// props =>
export const CardList = props=>{
  
    return(
    <div dic className="card-list">
         {props.monsters.map( monster=>(
            <Card key={monster.id} monster = {monster} />
              ))} 
    </div>
    )
} 