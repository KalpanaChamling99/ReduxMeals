import {Fragment} from 'react';
import {useSelector} from 'react-redux';

import Header from './Components/Header/Header';
import Cart from './Components/Cart/Cart';
import ProductList from './Components/Shop/Product';


import './App.css';

function App() {
  const cartIsVisible = useSelector((state)=>state.ui.cartIsVisible);

  return (
    <Fragment>
      <Header />
      <div className="main-content container">
        {cartIsVisible &&  <Cart />}
        <ProductList />
      </div>
    </Fragment>
  );
}

export default App;
