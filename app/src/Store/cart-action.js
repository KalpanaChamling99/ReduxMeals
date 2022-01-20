import {uiActions} from './ui-slice';
export const sendCartData = (cart) => {
    return async(dispatch)=>{
        dispatch(
            uiActions.showNotification({
              status: 'pending',
              title: 'sending...',
              message:'sending cart data'
            })
        );
         const sendRequest = async() =>{
            const response = await fetch(
                'https://reduxmeal-default-rtdb.firebaseio.com/cart.json',
                {
                    method: 'PUT',
                    body: JSON.stringify(cart)
                }
            );
            if(!response.ok){
                throw new Error('something went wrong');
            }

         }
      
          
        try{
            await sendRequest();

            dispatch(
                uiActions.showNotification({
                  status: 'success',
                  title: 'success!',
                  message:'sending cart data successfully!'
                })
            );

        }catch(error){
            dispatch(
                uiActions.showNotification({
                  status: 'error',
                  title: 'Error!',
                  message:'sending cart data failed!'
                })
            );
        }
    }
};