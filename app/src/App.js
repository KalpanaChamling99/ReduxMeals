import {Fragment,useEffect} from 'react';
import {useSelector} from 'react-redux';

import Header from './Components/Header/Header';
import Cart from './Components/Cart/Cart';
import ProductList from './Components/Shop/Product';


import './App.css';

function App() {
  const cartIsVisible = useSelector((state)=>state.ui.cartIsVisible);
  const cart = useSelector((state)=>state.cart);

  useEffect(()=>{
    const sendCartData = async() =>{
      const response = await fetch(
        'https://reduxmeal-default-rtdb.firebaseio.com/cart.json',
        {
          method: 'PUT',
          body: JSON.stringify(cart)
        }
      );
      if(!response.ok){
        throw new Error('something went wrong');
      }
    }
    sendCartData().catch(error=>{
      
    });
    
  },[cart]);

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
