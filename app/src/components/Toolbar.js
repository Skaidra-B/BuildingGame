import React from 'react';

const Toolbar = ({gold, stone, wood}) => {
    return (
        <div className="d-flex space-e toolbar">
            <h2>GOLD: {gold.getGold}</h2>
            <h2>STONE: {stone.getStone} </h2>
            <h2>WOOD: {wood.getWood} </h2>
        </div>
    );
};

export default Toolbar;