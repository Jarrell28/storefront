import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { addToCartAjax } from '../store/cart';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const API = 'https://storefront-api-jarrell.herokuapp.com';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        margin: '50px auto 0',
        padding: '20px 10px'
    },
    media: {
        height: 250,
        backgroundSize: "contain"
    },

    cardContent: {
        display: "flex",
        justifyContent: "space-between"
    },

    button: {
        width: '100%'
    }

});

const ProductDetails = props => {
    const [product, setProduct] = useState({});
    const { id } = useParams();
    const classes = useStyles();

    useEffect(() => {

        axios.get(`${API}/products/${id}`)
            .then(response => setProduct(response.data));
    }, [])

    const addToCart = async (product) => {
        await props.addToCartAjax(product);
        axios.get(`${API}/products/${id}`)
            .then(response => setProduct(response.data))
    }

    return (
        <>
            {Object.keys(product).length ?
                (
                    <div>
                        <Typography variant={'h4'} component={'h2'} style={{ marginTop: 50, textAlign: 'center' }}>{product.product}</Typography>

                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={product.image}
                                    title={product.product}
                                />
                                <CardContent >
                                    <Typography gutterBottom variant={'body2'} component={'p'} color={'textSecondary'}>{product.description}</Typography>
                                    <div className={classes.cardContent}>
                                        <Typography variant="body2" component="p">
                                            In Stock: {product.inventory}
                                        </Typography>
                                        <Typography gutterBottom variant="body2" component="p">
                                            ${product.price}
                                        </Typography>
                                    </div>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary" variant="contained" className={classes.button} onClick={() => addToCart(product)} disabled={product.inventory > 0 ? false : true}>
                                    Add To Cart
                                </Button>
                            </CardActions>
                        </Card>
                    </div>
                ) :

                <h2>Product does not exist!</h2>
            }
        </>
    )
}
const mapStateToProps = state => { };

const mapDispatchToProps = { addToCartAjax };

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);

