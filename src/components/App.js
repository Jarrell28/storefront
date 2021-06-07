import React from 'react';
import "../styles/app.scss";

import Header from './Header';
import Categories from './Categories';
import Products from './Products';

import Container from '@material-ui/core/Container';

function App() {

  return (
    <div className="App">
      <Header />
      <Container >
        <Categories />
        <Products />
      </Container>
    </div>
  );
}


export default App;
