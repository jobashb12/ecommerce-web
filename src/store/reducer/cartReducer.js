const initialState = {
    products: [],
    count: 0,
    totalItem: 0,
    totalPrice: 0,
};

const cartReducer = (state = initialState, action) => {
    let index;
    let product;
    switch (action.type) {
        case "ADD_TO_CART":
            product = action.payload;
            const Find = state.products.find(e => e.id === product.id);
            if (Find) {
                return state;
            } else {
                product["qty"] = 1;
                return {
                    products: [...state.products, product],
                    count: state.count + 1,
                    totalItem: state.totalItem + 1,
                    totalPrice: state.totalPrice + product.price,
                };
            }
        case "INCREMENT":
            index = state.products.findIndex(e => e.id === action.payload.id);
            product = state.products[index];
            product.qty += 1;
            state.count += 1;
            state.products[index] = product;
            state.totalPrice += product.price;
            return {
                ...state,
            };
        case "DECREMENT":
            index = state.products.findIndex(e => e.id === action.payload.id);
            product = state.products[index];
            if (product.qty > 1) {
                product.qty -= 1;
                state.count -= 1;
                state.totalPrice -= product.price;
            }
            state.products[index] = product;
            return {
                ...state,
            };
        case "DELETE":
            const filt = state.products.filter(e => e.id !== action.payload.id);
            product = action.payload.cart;
            const updateCount = state.count - product.qty;
            const updatedItem = state.totalItem - 1;
            const updatedPrice = state.totalPrice - product.price * product.qty;
            return {
                products: [...filt],
                count: updateCount,
                totalItem: updatedItem,
                totalPrice: updatedPrice,
            };
        default:
            return state;
    }
};

export default cartReducer;
