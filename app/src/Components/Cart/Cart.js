import CartItem from './CartItem';
import Card from './../../UI/Card';
import classes from './cart.module.scss';

const Cart = () => {
    return(
        <Card class={classes['cart-item-section']}>
            <h3 className={classes.title}>Your Shopping Cart</h3>
            <ul className={classes['cart-item-list']}>
                <CartItem 
                    items = {{
                        name: 'pasta',
                        quantity: '30',
                        price: '300',
                        total: '600',
                    }}

                />
            </ul>
        </Card>
    ); 
};
export default Cart;