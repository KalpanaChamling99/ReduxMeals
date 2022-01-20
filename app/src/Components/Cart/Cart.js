import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import Card from './../../UI/Card';
import classes from './cart.module.scss';

const Cart = (props) => {
    const cartItems = useSelector((state) => state.cart.items);
    return(
        <Card class={classes['cart-item-section']}>
            <h3 className={classes.title}>Your Shopping Cart</h3>
            <ul className={classes['cart-item-list']}>
                {cartItems.map((item)=>(
                    <CartItem 
                        key= {item.id}
                        items = {{
                            id:item.id,
                            name: item.name,
                            quantity: item.quantity,
                            price: item.price,
                            total: item.totalPrice
                        }}
                    />
                ))}
                
            </ul>
        </Card>
    ); 
};
export default Cart;