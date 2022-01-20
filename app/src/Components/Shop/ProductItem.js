import { useDispatch} from 'react-redux';
import {cartActions} from './../../Store/cart-slice';

import classes from './product.module.scss';
const ProductItem = props => {

    const dispatch = useDispatch();
    const {id,name,price,description} = props;
    const addToCartHandler = () => {
        dispatch(cartActions.addItemToCart({
            id,
            name,
            price
        }));
    }
    return(
        <li className={classes.product}>
            <h3 className={classes.name}>{props.name}</h3>
            <div className={classes.price}><span>${props.price}</span></div>
            <p>{props.description}</p>
            <div className={classes['btn-section']}>
                <button onClick={addToCartHandler}>Add to Cart</button>
            </div>
        </li>
    )
};
export default ProductItem;