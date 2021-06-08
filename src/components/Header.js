import React, { useState } from 'react';
import { connect } from 'react-redux';

import Cart from './Cart';
import { AppBar, Toolbar, Typography, Button, Popover } from '@material-ui/core';




const Header = (props) => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <AppBar position="static">
            <Toolbar style={{ justifyContent: 'space-between' }}>
                <Typography variant="h6">
                    Storefront
                </Typography>
                <Button color="inherit" onClick={handleClick} className="cart">Cart <span>({props.cart.length})</span></Button>
            </Toolbar>

            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <Cart />

            </Popover>
        </AppBar>
    )
}


const mapStateToProps = state => ({
    cart: state.cart
});

export default connect(mapStateToProps)(Header);