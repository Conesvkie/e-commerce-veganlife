import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Cart from './components/cart/Cart';
import AboutUs from './components/AboutUs';
import Default from './components/Default';
import Details from './components/Details';
//import Product from './components/Product'; 
import ProductList from './components/ProductList';
import Modal from './components/Modal';

function App() {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <Switch>
        <Route path='/aboutus' exact component={AboutUs}></Route>
        <Route path='/details' exact component={Details}></Route>
        <Route path='/cart' exact component={Cart}></Route>
        <Route path='/' exact component={ProductList}></Route>
        <Route component={Default}></Route>
      </Switch> 
      <Modal></Modal>
    </React.Fragment>
  );
}

export default App;
