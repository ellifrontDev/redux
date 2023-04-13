import React from 'react';
import {useSelector} from "react-redux";
import BasketTable from "./BasketTable";

const Basket = () => {
    const {basket} = useSelector(state => state)
    return (
        <div className="container py-20">
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Product name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Color
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Category
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Price
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        basket.map(el => <BasketTable product={el}/>)
                    }
                    </tbody>
                </table>
            </div>

        </div>

    );
};

export default Basket;