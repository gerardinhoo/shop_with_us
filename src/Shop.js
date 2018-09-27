import React from 'react';
import './Shop.css';

const Shop = ({productName, productPrice, productQuantity}) => {
    return (
        <div>
            <ul>Product:{productName}</ul>
            <ul>Price:{productPrice}</ul>
            <ul>Quantity:{productQuantity}</ul>
        </div>
    )
}


export default Shop;