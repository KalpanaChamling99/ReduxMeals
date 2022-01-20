import {Fragment} from 'react';
import Header from './Components/Header/Header';
import Cart from './Components/Cart/Cart';
import ProductList from './Components/Shop/Product';
import './App.css';

function App() {
  return (
    <Fragment>
      <Header />
      <div className="main-content container">
        <Cart />
        <ProductList />
      </div>
    </Fragment>
  );
}

export default App;
