import React, {useState} from 'react';
import product from "./index";
import {BiBasket} from "react-icons/bi"
import {useDispatch} from "react-redux";
import {FaHeart} from "react-icons/fa";

const ProductCard = ({product}) => {
    const [color, setColor] = useState(false)

    const getColor = () => {
        setColor(!color)
    }
    const dispatch = useDispatch()
    const addToBasket = (product) => {
        dispatch({type: 'ADD_TO_BASKET',payload:product})
    }
    const addToFavorite = (product) => {
        dispatch({type: 'FAVORITE', payload:product})
    }
    return (
        <div
            className="basis-1/5 mx-2 my-5 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#" >
                <img className="rounded-t-lg flex grid grid-cols-3" src={product.image} alt=""/>
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{product.title}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{product.description}</p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{product.price} &nbsp; рубль</p>
                <div className="flex items-center justify-between">
                    <div>
                        <button onClick={() => addToBasket(product)}
                                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Add &nbsp; <BiBasket/>
                        </button>
                    </div>
                    <div>
                        <button onClick={() => addToFavorite(product)}><FaHeart/></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;