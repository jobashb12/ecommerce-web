const initialState = {
    Products: [
        { id: 1, name: 'Dslr', price: 300, image: 'dslr', status: 'hot' },
        { id: 2, name: 'Head Phones', price: 30, image: 'headphones', status: 'new' },
        { id: 3, name: 'Iphone', price: 800, image: 'iphone', status: 'hot' },
        { id: 4, name: 'Glasses', price: 15, image: 'glass', status: 'hot' },
        { id: 5, name: 'Perfume', price: 50, image: 'perfume', status: 'hot' },
        { id: 6, name: 'Rings', price: 100, image: 'ring', status: 'new' },
        { id: 7, name: 'Shoes', price: 40, image: 'shoes', status: 'hot' },
        { id: 8, name: 'Watch', price: 120, image: 'watch', status: 'new' }
    ],
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default productReducer;