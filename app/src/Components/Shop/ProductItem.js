import classes from './product.module.scss';
const ProductItem = props => {
    return(
        <li className={classes.product}>
            <h3 className={classes.name}>{props.productname}</h3>
            <div className={classes.price}><span>${props.price}</span></div>
            <p>{props.description}</p>
            <div className={classes['btn-section']}>
                <button>Add to Cart</button>
            </div>
        </li>
    )
};
export default ProductItem;