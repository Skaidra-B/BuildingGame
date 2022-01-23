import React from 'react';


const Element = ({item, select}) => {
    return (
        <div>
            <div className="card" onClick={() => select(item)}>
                <h3>{item.name}</h3>
                <img src={item.image} alt=""/>
                <p>Stone Price: {item.price.stone}</p>
                <p>Wood Price: {item.price.wood}</p>
                <p>Gold Price: {item.price.gold}</p>
            </div>

        </div>
    );
};

export default Element;