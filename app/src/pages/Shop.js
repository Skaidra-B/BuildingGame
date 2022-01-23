import React from 'react';
import {useNavigate} from "react-router-dom";
import Element from "../components/Element";

const buildings = [
    {
        name: "tent",
        image: "https://image.flaticon.com/icons/png/512/1227/1227733.png",
        price: {
            stone: 0,
            wood: 2,
            gold: 3
        }
    },
    {
        name: "wooden house",
        image: "https://krita-artists.org/uploads/default/original/3X/1/1/1146000c972c87c1d9d359fe8fb73ce2839a826f.png",
        price: {
            stone: 5,
            wood: 20,
            gold: 40
        }
    },
    {
        name: "stone house",
        image: "https://preview.redd.it/o73aidtzrui51.png?auto=webp&s=1539f3c6f1264c1aa4bb1ee026debfc36f72a5b7",
        price: {
            stone: 30,
            wood: 40,
            gold: 100
        }
    },
    {
        name: "mansion",
        image: "https://i.pinimg.com/originals/21/cc/1a/21cc1a94351116cf4a03c7ae17169546.png",
        price: {
            stone: 80,
            wood: 80,
            gold: 300
        }
    },
    {
        name: "castle",
        image: "https://art.pixilart.com/0b663120ba7ae1a.png",
        price: {
            stone: 300,
            wood: 400,
            gold: 500
        }
    },
    {
        name: "keep",
        image: "https://i.pinimg.com/originals/9d/1d/ed/9d1dede52f984a4112292360a5b2ead7.png",
        price: {
            stone: 1000,
            wood: 1000,
            gold: 1000
        }
    },
]

const Shop = ({building, gold, stone, wood}) => {

    const nav = useNavigate()

    function selectBuilding(obj) {
        if(obj.price.gold <= gold.getGold &&
            obj.price.wood <= wood.getWood &&
            obj.price.stone <= stone.getStone) {
            building.setBuilding(obj)
            gold.setGold(gold.getGold - obj.price.gold)
            stone.setStone(stone.getStone - obj.price.stone)
            wood.setWood(wood.getWood - obj.price.wood)
            nav("/")
        }
    }

    return (
        <div>
            <h2>Select building to buy:</h2>
            <div className="d-flex j-center">
                {buildings.map((x, i) => <Element item={x} key={i} select={selectBuilding}/>)}
            </div>
            <button onClick={() => nav("/")}>Go to make more money</button>
        </div>
    );
};

export default Shop;