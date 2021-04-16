import React from 'react';
import CartItem from './CartItem';



 function CartItemList (data){
 
    return (
        <div>
     {data.data.items.map((val)=>{
         return (<div >
             <CartItem val={val} />
         </div>)
     })}
        </div>
    )
}
export default CartItemList
 ///uzum em anem map   {/* <CartItem /> */}