import React from 'react';
import Shop from './Shop';
import HDLogo from './HDLogo';


const ProductList = ({products}) => {
  const productArray = products.map((myproduct, i) => {
      return ( <Shop 
                key={i} 
                productName ={products[i].productName} 
                productPrice={products[i].productPrice}
                productQuantity={products[i].productQuantity}
              />
       );
  })
        return (
                <div>
                    <HDLogo />
                    {productArray}
                </div>
    );
}



export default ProductList;