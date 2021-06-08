let initialState = [];


export default (state = initialState, action) => {
    let { type, payload } = action;

    switch (type) {
        case 'ADD TO CART':
            return [...state, { ...payload, inventory: payload.inventory - 1 }]

        default:
            return state;
    }
}

export const addToCart = (product) => {
    return {
        type: 'ADD TO CART',
        payload: product
    }
}