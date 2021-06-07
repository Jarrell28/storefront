let initialState = {
    products: [
        {
            product: "2020 Apple iPad", description: "The new iPad combines tremendous capability with unmatched ease of use and versatility", price: 395.00, image: "https://images-na.ssl-images-amazon.com/images/I/71UddJ3JSLL._AC_SL1500_.jpg", category: "electronics", inventory: 10
        },
        {
            product: "SAMSUNG 65-Inch Smart TV", description: "Enjoy entertainment in the picture quality you have been waiting for", price: 797.99, image: "https://images-na.ssl-images-amazon.com/images/I/71LJJrKbezL._AC_SL1500_.jpg", category: "electronics", inventory: 10
        },
        {
            product: "Champion T-Shirt", description: "Champion Men's Classic Jersey Script T-Shirt, Surf the Web2, X-Large", price: 12.50, image: "https://images-na.ssl-images-amazon.com/images/I/71Owur1oEQL._AC_UX569_.jpg", category: "clothes", inventory: 10
        },
        {
            product: "Champion Sweatpants", description: "Champion Boys Sweatpant Heritage Collection Slim Fit Brushed Fleece Big and Little Boys Kids", price: 17.00, image: "https://images-na.ssl-images-amazon.com/images/I/81OoZHJwEQL._AC_UY741_.jpg", category: "clothes", inventory: 10
        },
        {
            product: "Learning PHP, MySQL & JavaScript", description: "The new iPad combines tremendous capability with unmatched ease of use and versatility", price: 33.00, image: "https://m.media-amazon.com/images/P/1491978910.01._SCLZZZZZZZ_SX500_.jpg", category: "books", inventory: 10
        },
        {
            product: "Eloquent Javascript", description: "JavaScript lies at the heart of almost every modern web application, from social apps like Twitter to browser-based game frameworks like Phaser and Babylon.", price: 20.99, image: "https://m.media-amazon.com/images/P/1593279507.01._SCLZZZZZZZ_SX500_.jpg", category: "books", inventory: 10
        },
    ]
}

export default (state = initialState, action) => {
    let { type, payload } = action;

    switch (type) {
        case 'GET PRODUCTS':
            return state.products;

        case 'SELECT CATEGORY':
            if (payload) {
                return { products: [...initialState.products.filter(product => product.category === payload)] }
            }

            return { products: [...initialState.products] };

        default:
            return state;
    }
}


export const getProducts = () => {
    return {
        type: 'GET PRODUCTS'
    }
}

export const getProductsByCategory = (category) => {
    return {
        type: 'SELECT CATEGORY',
        payload: category
    }
}