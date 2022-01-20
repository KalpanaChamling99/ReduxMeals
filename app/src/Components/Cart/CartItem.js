import {useDispatch} from 'react-redux';
import {cartActions} from './../../Store/cart-slice';
import classes from './cart.module.scss';
const CartItem = (props) => {
    const dispatch = useDispatch();
    const {id,name,price,total,quantity} = props.items;

    const addItemHandler = () =>{
        dispatch(cartActions.addItemToCart({
            id,
            name,
            price,
        }));
    };

    const removeItemHandler = () =>{
        dispatch(cartActions.removeItemFromCart(id));
    }
    return(
        <li className={classes['cart-item']} id={id}>
            <h3 className={classes.name}>{name}</h3>
            <div className={classes['action-section']}>

                <div className={classes.action}>
                    <div className={classes['quantity']}>x {quantity}</div>
                    <div className={classes['btn-section']}>
                        <button onClick={removeItemHandler}> - </button>
                        <button onClick={addItemHandler}> + </button>
                    </div>
                </div>

                <div className={classes['total-amount']}>
                    ${total}<span>(${price}/item)</span>
                </div>  

            </div>
        </li>
    );
};
export default CartItem;