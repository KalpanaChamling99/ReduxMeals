import CartButton from './Button';
import classes from './header.module.scss';
const Header = props => {
    return(
        <header>
            <div className="container">
                <div className={classes.wrapper + ' ' + classes.row }>
                    <div className={classes['title-section']}>
                        <h2 className={classes['site-title']}>Redux Meals</h2>
                    </div>
                    <div className={classes['site-feature']}>
                        <CartButton />
                    </div>
                </div>
            </div>
        </header>
    )
};

export default Header;