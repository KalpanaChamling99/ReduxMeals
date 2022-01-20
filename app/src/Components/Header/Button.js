import classes from './header.module.scss';
import {useDispatch} from 'react-redux';
import { uiActions } from './../../Store/ui-slice';


const CartButton = props => {
    const dispatch = useDispatch();
    const toggleCartHandler = () => {
        dispatch(uiActions.toggle());
    }
    return(
        <button className={classes['cart-btn']} onClick={toggleCartHandler}>
            <span>My cart</span>
            <span className={classes.counter}>10</span>
        </button>
    );
};

export default CartButton;