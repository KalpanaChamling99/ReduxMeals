import {createSlice} from '@reduxjs/toolkit';



const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0
    },
    reducers:{
        addItemToCart(state,action){
            const newItem = action.payload;
            const existingItem = state.items.find( item => item.id === newItem.id);
            state.totalQuantity = state.totalQuantity + 1;
            if(!existingItem){
                state.items.push({
                    id: newItem.id,
                    name: newItem.name,
                    quantity: 1,
                    totalPrice: newItem.price,
                    price: newItem.price   
                });
            }else{
                // existingItem.quantity = existingItem.quantity + 1;
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price;
            }
        },
        removeItemFromCart(state,action){
            const itemId = action.payload;
            const existingItem = state.items.find(item => item.id === itemId);
            state.totalQuantity--;

            if(existingItem.quantity === 1){
                state.items = state.items.filter(item => item.id !== itemId);
            }else{
                // existingItem.quantity = existingItem.quantity - 1;
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
            }
        }
    }
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;