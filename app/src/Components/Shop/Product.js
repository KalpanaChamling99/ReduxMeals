import {useState } from 'react';
import ProductItem from './ProductItem';
import Card from './../../UI/Card';
import classes from './product.module.scss';
const DUMMY_MEAL = [
    {
        id: 'p1',
        name: 'Pasta',
        price: 30,
        description: "Italian Food"
    },
    {
        id: 'p2',
        name: 'momo',
        price: 40,
        description: "Nepali Food"
    }
];

const ProductList = props =>{
    const productList = DUMMY_MEAL.map((item)=>(
        <ProductItem 
            id={item.id}
            name={item.name}
            price={item.price}
            key={item.id}
            description={item.description}
        />
    ));
    return(
        <Card class={classes['product-section']}>
            <h2 className={classes['section-title']}>Order Your fav food items</h2>
            <ul className={classes['product-list']}>
                {productList}
            </ul>
        </Card>
    )
};
export default ProductList;