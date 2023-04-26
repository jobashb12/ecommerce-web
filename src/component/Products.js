import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Products = () => {
    const { Products } = useSelector((state) => state.productReducer);
    const dispatch = useDispatch();
    const addCart = (product) => {
        dispatch({ type: "ADD_TO_CART", payload: product });
    }
    return (
        <div className='container'>
            <div className='products'>
                {
                    Products.map((product) => {
                        return (
                            <div className='product-card' key={product.id}>
                                <div className='product-img'>
                                    <img src={`./assets/${product.image}.jpg`}
                                        alt={product.name} />
                                </div>
                                <div className='product-details'>
                                    <div className='product-name'>
                                        {product.name}
                                    </div>
                                    <div className='product-price'>
                                        {`$${product.price}.00`}
                                    </div>
                                </div>
                                <div className='product-btn' onClick={() => addCart(product)}>
                                    add to cart
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Products;
