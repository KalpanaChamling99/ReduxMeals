import classes from './header.module.scss';
import {useDispatch,useSelector} from 'react-redux';
import { uiActions } from './../../Store/ui-slice';


const CartButton = props => {
    const dispatch = useDispatch();
    const cartQuantity= useSelector(state => state.cart.totalQuantity);
    const toggleCartHandler = () => {
        dispatch(uiActions.toggle());
    }
    return(
        <button className={classes['cart-btn']} onClick={toggleCartHandler}>
            <span>My cart</span>
            <span className={classes.counter}>{cartQuantity}</span>
        </button>
    );
};

export default CartButton;