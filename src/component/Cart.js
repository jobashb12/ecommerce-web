import React from 'react';
import { FiTrash } from 'react-icons/fi'
import { useSelector, useDispatch } from 'react-redux';

const Cart = () => {
    const { products, totalPrice, totalItem } = useSelector((state) => state.cartReducer);
    const dispatch = useDispatch();
    const increment = (id) => {
        dispatch({ type: "INCREMENT", payload: { id } });
    }
    const decrement = (id) => {
        dispatch({ type: "DECREMENT", payload: { id } });
    }
    const del = (p) => {
        dispatch({ type: "DELETE", payload: { id: p.id, cart: p } });
    }
    return (
        <div className='container flex mt-100'>
            {
                products.length > 0 ? <div className='cart'>
                    {
                        products.map((p) => {
                            return (
                                <div className='cart-item'>
                                    <div className='item-img'>
                                        <img src={`./assets/${p.image}.jpg`} alt={p.name} />
                                    </div>
                                    <div className='item-name'>
                                        {p.name}
                                    </div>
                                    <div className='item-price'>
                                        ${p.price}.00
                                    </div>
                                    <div className='inc' onClick={() => increment(p.id)}>+</div>
                                    <div className='quant'>{p.qty}</div>
                                    <div className='dec' onClick={() => decrement(p.id)}>-</div>
                                    <div className='item-total'>${p.price * p.qty}.00</div>
                                    <div className='item-del' onClick={() => del(p)}><FiTrash /></div>
                                </div>
                            )
                        })
                    }
                </div> : "Your Cart is empty!"
            }
            {products.length > 0 && <div className='summary'>
                <div className="heading">Order Summary</div>
                <div className='item'>
                    <div className='item-heading'>Total Item</div>
                    <div className='total-item'>{`${totalItem}.00`}</div>
                </div>
                <div className='price'>
                    <div className='price-heading'>Total Price</div>
                    <div className='total-price'>{`$${totalPrice}.00`}</div>
                </div>
            </div>
            }
        </div>
    )
}

export default Cart;
