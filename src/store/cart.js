const axios = require('axios');

let initialState = [];


export default (state = initialState, action) => {
    let { type, payload } = action;

    switch (type) {
        case 'ADD TO CART':
            return [...state, { ...payload }]

        case 'REMOVE FROM CART':
            return [...state.filter((item, idx) => {
                if (idx !== payload.idx) {
                    return item;
                }
            })]

        default:
            return state;
    }
}

let api = 'https://storefront-api-jarrell.herokuapp.com';

export const addToCart = (product) => {
    return {
        type: 'ADD TO CART',
        payload: product
    }
}

export const addToCartAjax = (product) => dispatch => {
    product.inventory--;

    return axios.put(`${api}/products/${product._id}`, product)
        .then(response => {
            dispatch(addToCart(response.data))
        })
}

export const removeFromCartAjax = (product, idx) => dispatch => {
    product.inventory++;

    return axios.put(`${api}/products/${product._id}`, product)
        .then(response => {
            dispatch(removeFromCart(response.data, idx))
        })
}

export const removeFromCart = (product, idx) => {
    return {
        type: 'REMOVE FROM CART',
        payload: { product, idx }
    }
}