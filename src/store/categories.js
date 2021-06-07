let initialState = {
    categories: [
        { name: 'electronics', displayName: 'Electronics', description: 'Collection of Electronics' },
        { name: 'books', displayName: 'Books', description: 'Collection of Books' },
        { name: 'clothes', displayName: 'Clothes', description: 'Collection of Clothes' }
    ],
    activeCategory: ""
}

export default (state = initialState, action) => {
    let { type, payload } = action;

    switch (type) {
        case 'SELECT CATEGORY':
            let activeCategory = payload;
            return { categories: [...state.categories], activeCategory }

        case 'GET CATEGORIES':
            return state;

        default:
            return state;
    }
}


export const selectCategory = (category) => {
    return {
        type: 'SELECT CATEGORY',
        payload: category
    }
}

export const getCategories = () => {
    return {
        type: 'GET CATEGORIES'
    }
}