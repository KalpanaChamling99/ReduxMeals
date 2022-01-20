import classes from './header.module.scss';

const CartButton = props => {
    return(
        <button className={classes['cart-btn']}>
            <span>My cart</span>
            <span className={classes.counter}>10</span>
        </button>
    );
};

export default CartButton;