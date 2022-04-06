import React, { Component } from "react";

class Pokemon extends Component {
    render () {
        const { pokemon } = this.props;
        return (
            <section className='pokemon-card'>
                <ul className='pokemon-info'>
                    <li className='li'>{pokemon.name}</li>
                    <li className='li'>{pokemon.type}</li>
                    <li className='li'>{`${pokemon.averageWeight.value} ${pokemon.averageWeight.measurementUnit}`}</li>
                </ul>
                <img src={pokemon.image} alt={pokemon.moreInfo} />
            </section>
        );
    }
}

export default Pokemon