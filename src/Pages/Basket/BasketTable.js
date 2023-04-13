import React from 'react';

const BasketTable = ({product}) => {
    return (
      <div >
          <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {
                      product.title
                  }
              </th>
              <td className="px-6 py-4">
                  <img src={product.image} width={150} alt=""/>
              </td>
              <td className="px-6 py-4">
                  {
                      product.description
                  }
              </td>
              <td className="px-6 py-4">
                  {
                      product.price
                  }
              </td>
              <td className="px-6 py-4">
                  <a href="src/Pages/Basket/BasketTable#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
              </td>
          </tr>
      </div>
    );
};

export default BasketTable;