import classes from './cart.module.scss';
const CartItem = props => {
    return(
        <li className={classes['cart-item']}>
            <h3 className={classes.name}>Pasta</h3>
            <div className={classes['action-section']}>

                <div className={classes.action}>
                    <div className={classes['quantity']}>x 3</div>
                    <div className={classes['btn-section']}>
                        <button> - </button>
                        <button> + </button>
                    </div>
                </div>

                <div className={classes['total-amount']}>
                    $60<span>($20.00/item)</span>
                </div>  

            </div>
        </li>
    );
};
export default CartItem;