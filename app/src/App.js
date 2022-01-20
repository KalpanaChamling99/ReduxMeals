import {Fragment,useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';

import Header from './Components/Header/Header';
import Cart from './Components/Cart/Cart';
import ProductList from './Components/Shop/Product';
import Notification from './UI/Notification';
import { uiActions } from './Store/ui-slice';

import './App.css';

let isInitial = true;

function App() {
  const dispatch = useDispatch();

  const cartIsVisible = useSelector((state)=>state.ui.cartIsVisible);
  const cart = useSelector((state)=>state.cart);
  const notification = useSelector((state)=>state.ui.notification);

  useEffect(()=>{
    const sendCartData = async() =>{
      dispatch(
        uiActions.showNotification({
          status: 'pending',
          title: 'sending...',
          message:'sending cart data'
        })
      );

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
      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'success!',
          message:'sending cart data successfully!'
        })
      );
    }
    if(isInitial){
      isInitial = false;
      return
    }
    
    sendCartData().catch(error=>{
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message:'sending cart data failed!'
        })
      );
    });
    
  },[cart,dispatch]);

  return (
    <Fragment>
      <Header />
      {notification && <Notification title={notification.title} status={notification.status} message={notification.message} /> }
      <div className="main-content container">
        {cartIsVisible &&  <Cart />}
        <ProductList />
      </div>
    </Fragment>
  );
}

export default App;
