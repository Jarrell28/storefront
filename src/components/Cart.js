import React from 'react';

import { connect } from 'react-redux';
import { removeFromCartAjax } from '../store/cart';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
// import ListItemText from '@material-ui/core/ListItemText';

const Cart = props => {

    return (
        <>
            <List component="nav" aria-label="secondary mailbox folders">
                <ListItem>
                    <ListItemText primary={
                        <Typography
                            component="p"
                            variant="body1"
                        >
                            Your Cart
                        </Typography>
                    } />
                </ListItem>
                {props.cart.map((item, idx) => {
                    return (
                        <ListItem button>
                            <ListItemAvatar>
                                <Avatar alt="Remy Sharp" src={item.image} />
                            </ListItemAvatar>

                            <ListItemText primary={item.product} secondary={
                                <>
                                    <Typography
                                        component="span"
                                        variant="body2"
                                        style={{ display: "block" }}
                                        color="textPrimary"
                                    >
                                        Price - ${item.price}
                                    </Typography>
                                </>
                            } />

                            <ListItemText primary={"Delete"} style={{ color: "red", marginLeft: "25px" }} onClick={() => props.removeFromCartAjax(item, idx)} />
                        </ListItem>
                    )
                })}

            </List>
        </>
    )
}

const mapStateToProps = state => ({
    cart: state.cart
})

const mapDispatchToProps = { removeFromCartAjax }

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

