import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import "../styles/app.scss";
import Header from './Header';
import Categories from './Categories';
import Products from './Products';
import ProductDetails from './ProductDetails';
import ShoppingCart from './ShoppingCart';

import Container from '@material-ui/core/Container';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Container >


          <Switch>
            <Route path="/product/:id">
              <ProductDetails />
            </Route>

            <Route path="/cart"> <ShoppingCart /></Route>

            <Route path="/">
              <Categories />
              <Products />
            </Route>
          </Switch>

        </Container>
      </BrowserRouter>
    </div>
  );
}


export default App;
