import React from 'react';
import {useSelector} from "react-redux";
import ProductCard from "../Product/ProductCard";

const Favorites = () => {
    const {favorites} = useSelector(state => state)
    return (
        <div>
            {
                favorites.map(el => (
                    <ProductCard product={el}/>
                ))
            }
        </div>
    );
};

export default Favorites;