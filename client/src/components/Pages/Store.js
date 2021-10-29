import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Image from '../../images/infoImgOne.jpg';
import '../../css/Store.css';




const Store = () => {

const items = [
    {
        id: '1',
        title: 'product 1',
        price: '$39.99',
        rating: '3',
        image: Image
    },
    {
        id: '1',
        title: 'product 1',
        price: '$39.99',
        rating: '2',
        image: Image
    },
    {
        id: '1',
        title: 'product 1',
        price: '$39.99',
        rating: '5',
        image: Image
    }
]

useEffect(() => {

    


}, []);




    return (
        <div>
            <header>
                <h1>Store</h1>
            </header>
            <div id="products" className="">
            <div className="product-div">

            {/* list of all products */}
                {items.map((item) => {
                    return (
                        <div className="product" key={item.id}>
                            <img className="productImage" src={item.image} alt="product one"/>
                            <h3>{item.title}</h3>
                            <p>{item.price}</p>
                            <p>{item.rating}</p>
                        </div>
                    )
                })}
            </div>

            </div>
        </div>
    )
}

export default Store;

