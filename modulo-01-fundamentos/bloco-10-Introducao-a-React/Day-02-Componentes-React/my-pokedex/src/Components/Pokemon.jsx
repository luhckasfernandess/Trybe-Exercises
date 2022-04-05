import React, { Component } from "react";

class Pokemon extends Component {
    render () {
        const { pokemon } = this.props;
        return (
            <section>
                <ul>
                    <li>{pokemon.name}</li>
                    <li>{pokemon.type}</li>
                    <li>{`${pokemon.averageWeight.value} ${pokemon.averageWeight.measurementUnit}`}</li>
                </ul>
                <img src={pokemon.image} alt={pokemon.moreInfo} />
            </section>
        );
    }
}

export default Pokemon