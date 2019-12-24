import React, { Component } from 'react';
import Pokecard from './pokecard.js';
import "./pokedex.css";

class Pokedex extends Component {
    render() {
        console.log(this.props.pokemon[0].name)
        
        let pokemonArr = [
            {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
            {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
            {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
            {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
            {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
            {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
            {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
            {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
          ];
        return(
            <div className="pokedex">
                <div><h1>The Pokedex</h1></div>
                <div className="pokedex-cards">
                    {pokemonArr.map((pokemonObj, index) => <Pokecard pokemon={pokemonObj} key={index}/>)};
                </div>
                {/* <div className="test">
                    {this.props.pokemon.map((p, index) => 
                        <Pokecard pokemon={p} key={index} />
                    )}
                </div> */}
            </div>
        )
    }
}
export default Pokedex;

         //I want to call Pokecard pokemonArr.length number of times and pass in pokemonArr[i] 
          //as props into Pokecard

        // const pokecardCreator = pokemonArr => {
        //     for(let i=0; i< pokemonArr.length; i++) {
        //         <Pokecard props={pokemonArr[i]} />
        //     }
        // }  

        // const {name, hobbies} = this.props;
        // return(
        //     <div>       
        //         <ul>
        //             {hobbies.map(hobby => <li>{hobby}</li>)}