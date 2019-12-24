import React, { Component } from 'react';
import "./pokecard.css";
import Pokedex from './pokedex';

class Pokecard extends Component {   

    render() {                
        
       let id = this.props.pokemon.id;
       let name = this.props.pokemon.name;
       let type = this.props.pokemon.type;
       let base_experience = this.props.pokemon.base_experience;     
        
    //Change imgSrc to this in order to use pixel images   
    //    let imgSrc =  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
       
    //adding leading zeroes to id in order to use nicer images
       const idTest = function (id) {           
            id = id.toString().split('');
            while(id.length < 3) {
                id.unshift("0");
            }
            let numString = '';
            for(let i=0; i < id.length; i++) {
                numString += id[i];
            }        
            return numString;        
        };   
        let imgSrc = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${idTest(id)}.png`
        
        return (
            <span className="pokecard"> 
               <strong className="pokemonName">{name}</strong>
               <img className="pokemonImg" src={imgSrc} alt="pokemon image" />
               <br /> Type: {type}
               <br />Experience: {base_experience}
            </span>            
        )
    }
}

export default Pokecard;