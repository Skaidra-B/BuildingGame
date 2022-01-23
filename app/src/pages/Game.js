import React from 'react';
import {useNavigate} from "react-router-dom";

const Game = ({building, gold, stone, wood}) => {

    const nav = useNavigate()

    function toShop() {
        nav("/shop")
    }
    return (
        <div>
            <div className="d-flex space-e">
                <div className="box" onClick={() => gold.setGold(gold.getGold + 10)}><p>Click to add Gold</p></div>
                <div className="box" onClick={() => stone.setStone(stone.getStone + 10)}><p>Click to add Stone</p></div>
                <div className="box" onClick={() => wood.setWood(wood.getWood + 10)}><p>Click to add Wood</p></div>
            </div>
            <div>
                {building.getBuilding && <img src={building.getBuilding.image} alt=""/>}
            </div>
            <button onClick={toShop}>SHOP</button>
        </div>
    );
};

export default Game;