import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeFromCartAjax } from '../store/cart';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

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

                            <ListItemText primary={"Delete"} style={{ color: "red", marginLeft: "25px", textAlign: "right" }} onClick={() => props.removeFromCartAjax(item, idx)} />
                        </ListItem>
                    )
                })}

                <ListItem>
                    <Button variant="contained" color="primary"><Link to="/cart">Checkout</Link></Button>
                </ListItem>

            </List>
        </>
    )
}

const mapStateToProps = state => ({
    cart: state.cart
})

const mapDispatchToProps = { removeFromCartAjax }

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

