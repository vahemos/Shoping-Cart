function CartItem (data){
    
const {val}=data;
    return(
<div>


    <div>
        <img alt="qaq" src={val.image} width="200"></img>
    </div>
    
    <div>
        {val.name}
    </div>

    <div>
        {val.color}
    </div>
    <div>
        <select>
            <option>{val.quantity}</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
        </select>
    </div>
    <div>
        ${val.price}
    </div>






</div>)
}
export default CartItem