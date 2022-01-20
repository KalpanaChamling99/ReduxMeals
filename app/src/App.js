import {Fragment,useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';

import Header from './Components/Header/Header';
import Cart from './Components/Cart/Cart';
import ProductList from './Components/Shop/Product';
import Notification from './UI/Notification';
import {sendCartData} from './Store/cart-action';
import './App.css';

let isInitial = true;

function App() {
  const dispatch = useDispatch();

  const cartIsVisible = useSelector((state)=>state.ui.cartIsVisible);
  const cart = useSelector((state)=>state.cart);
  const notification = useSelector((state)=>state.ui.notification);

  useEffect(()=>{

    if(isInitial){
      isInitial = false;
      return
    }
    dispatch(sendCartData(cart));
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
