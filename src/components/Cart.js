import React from 'react';
import CartFooter from './CartFooter';
import CartHeader from './CartHeader';
import CartItemList from './CartItemList';
import {useState} from 'react'



function Cart(){
    
    const [data,setData] =useState({ 
        items: [ 
        { price: 1399, 
            image: 'http://www.pngall.com/wp-content/uploads/7/Blender.png', 
            quantity: 1,  
            name: 'Blender', 
            color: 'Red' },
        { price: 2399, 
            image: 'https://cdn.shopify.com/s/files/1/2660/5106/products/47956213-IMAGE_1_1400x.png?v=1597024154', 
            quantity: 1, 
            name: 'Blender',
             color: 'Blue' }] ,
             subtotal: 1000 }
    )
    console.groupCollapsed(data.subtotal)
    return (
<div>
    <CartHeader />
    <CartItemList data={data} />
    <CartFooter data1={data}/>
</div>
           )
}
export default Cart;



