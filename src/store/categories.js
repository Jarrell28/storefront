const axios = require('axios');

// let initialState = {
//     categories: [
//         { name: 'electronics', displayName: 'Electronics', description: 'Collection of Electronics' },
//         { name: 'books', displayName: 'Books', description: 'Collection of Books' },
//         { name: 'clothes', displayName: 'Clothes', description: 'Collection of Clothes' }
//     ],
//     activeCategory: ""
// }

let initialState = {
    categories: [],
    activeCategory: ""
}

export default (state = initialState, action) => {
    let { type, payload } = action;

    switch (type) {
        case 'SELECT CATEGORY':
            let activeCategory = payload;
            return { categories: [...state.categories], activeCategory }

        case 'GET CATEGORIES':
            return { categories: payload, activeCategory: state.activeCategory };

        default:
            return state;
    }
}
let api = 'https://storefront-api-jarrell.herokuapp.com';

export const selectCategory = (category) => {
    return {
        type: 'SELECT CATEGORY',
        payload: category
    }
}

export const getCategories = (data) => {
    return {
        type: 'GET CATEGORIES',
        payload: data
    }
}

export const fetchCategories = () => dispatch => {
    return axios.get(`${api}/categories`)
        .then(response => {
            dispatch(getCategories(response.data))
        })
}