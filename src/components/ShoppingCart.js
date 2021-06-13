import React from 'react';
import { useEffect } from 'react';

import { connect } from 'react-redux';


const ShoppingCart = (props) => {

    useEffect(() => {
        console.log(props.cart)
    }, [])

    return (
        <>
            Shopping Cart
        </>
    )

}

const mapStateToProps = state => ({ cart: state.cart });

export default connect(mapStateToProps)(ShoppingCart);