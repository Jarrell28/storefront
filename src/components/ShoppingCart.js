import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { resetCart } from '../store/cart';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        marginTop: 50,
        maxWidth: 700,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },

    cart: {
        display: 'flex',
        justifyContent: 'space-between'
    },

    form: {
        display: 'flex',
        justifyContent: 'space-around'
    }
});

const ShoppingCart = (props) => {
    const classes = useStyles();

    const placeOrder = () => {
        if (props.cart.length) {
            props.resetCart();
            alert('Thank you for ordering!')
        } else {
            alert('No Items in Cart')
        }
    }

    return (
        <>
            <Card className={classes.root}>
                <CardContent>
                    <Typography gutterBottom variant="h5" >
                        Order Summary
                    </Typography>
                    <List component="nav" aria-label="secondary mailbox folders">
                        {props.cart.map((item, idx) => {
                            return (
                                <ListItem button>
                                    <ListItemAvatar>
                                        <Avatar alt="Remy Sharp" src={item.image} variant="rounded" className="avatar" />
                                    </ListItemAvatar>

                                    <ListItemText primary={item.product} className={classes.cart} secondary={
                                        <>
                                            <Typography
                                                component="span"
                                                variant="body2"
                                                color="textPrimary"
                                            >
                                                ${item.price}
                                            </Typography>
                                        </>
                                    } />
                                </ListItem>
                            )
                        })}

                        <ListItem style={{ fontWeight: 'bold' }}>
                            <ListItemText style={{ fontWeight: 'bold' }}>Total:</ListItemText>
                            <ListItemText style={{ textAlign: 'right', fontWeight: 'bold' }}>${props.cart.reduce((acc, cur) => {
                                return acc + cur.price
                            }, 0)}</ListItemText>
                        </ListItem>
                    </List>

                    <form action="" autoComplete="off" className={classes.form}>
                        <FormControl>
                            <Typography component="h4" variant="h6">Billing Address</Typography>
                            <TextField id="standard-basic" label="Full Name" />
                            <TextField id="standard-basic" label="Address" />
                            <TextField id="standard-basic" label="City" />
                            <TextField id="standard-basic" label="State" />
                            <TextField id="standard-basic" label="Zip Code" />
                        </FormControl>

                        <FormControl>
                            <Typography component="h4" variant="h6">Payment Details</Typography>
                            <TextField id="standard-basic" label="Credit Card" />
                            <TextField id="standard-basic" label="Expiration" />
                            <TextField id="standard-basic" label="CVV" />
                        </FormControl>

                    </form>
                </CardContent>
                <CardActions style={{ justifyContent: 'center', marginTop: 20 }}>
                    <Button size="large" variant="contained" color="primary" onClick={placeOrder}>Place Your Order</Button>
                </CardActions>
            </Card>
        </>
    )

}

const mapStateToProps = state => ({ cart: state.cart });
const mapDispatchToProps = { resetCart }

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);