import {useSelector,useDispatch} from 'react-redux';
import {cartActions} from './../../Store/cart-slice';
import classes from './cart.module.scss';
const CartItem = props => {
    const {id,name,price,total,quantity} = props.items;
    const additemHandler = () =>{

    };
    const removeItemHandler = () =>{

    }
    return(
        <li className={classes['cart-item']}>
            <h3 className={classes.name}>{name}</h3>
            <div className={classes['action-section']}>

                <div className={classes.action}>
                    <div className={classes['quantity']}>x {quantity}</div>
                    <div className={classes['btn-section']}>
                        <button onClick={additemHandler}> - </button>
                        <button onClick={removeItemHandler}> + </button>
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