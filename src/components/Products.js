import React, { useEffect, useState } from 'react';

import { connect } from 'react-redux';
import { addToCartAjax } from '../store/cart';
import { fetchProducts } from '../store/products';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const Products = (props) => {
    const [products, setProducts] = useState();

    useEffect(() => {
        props.fetchProducts();
    }, [])

    useEffect(() => {
        setProducts(props.products.products);
    }, [props.products.products])

    useEffect(() => {
        if (props.activeCategory) {
            setProducts(props.products.filteredProducts);
        } else {
            setProducts(props.products.products);
        }

    }, [props.activeCategory])

    return (
        <>
            <Typography variant="h5" style={{ marginTop: "50px" }}>
                Products - {props.activeCategory}
            </Typography>


            <div className="products">

                {
                    products?.map((product, idx) => {
                        if (product.inventory > 0) {
                            return (
                                <Card key={idx}>
                                    <CardActionArea>
                                        <CardMedia

                                            image={product.image}
                                            title={product.product}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                {product.product}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                {product.description}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                ${product.price}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            View Product</Button>

                                        <Button size="small" color="primary" onClick={() => props.addToCartAjax(product)}>
                                            Add To Cart</Button>
                                    </CardActions>
                                </Card>
                            )
                        }
                    })
                }
            </div>


        </>
    )
}

const mapStateToProps = state => ({
    products: state.products,
    activeCategory: state.categories.activeCategory
})

const mapDispatchToProps = { addToCartAjax, fetchProducts }

export default connect(mapStateToProps, mapDispatchToProps)(Products);