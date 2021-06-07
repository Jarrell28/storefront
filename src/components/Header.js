import React from 'react';

import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';

const Header = () => {

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6">
                    Storefront
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header;