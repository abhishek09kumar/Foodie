import {useDispatch, useSelector} from "react-redux";
import ItemList from "./ItemList";
import { RiDeleteBin6Line } from "react-icons/ri";
import { clearCart } from "../utils/cartSlice";
import { removeItem } from "../utils/cartSlice";

const CartList=({items, onClearCart})=>
{

    const dispatch=useDispatch();
    const handleRemoveItem=(item)=>{
        console.log(item);
        dispatch(removeItem({id : item.card.info.id}));    
    }


    return (
        <div className="min-h-screen bg-black ml-7 w-5/12">
           
         <div>{console.log(items)}</div>
            {items.map(item =>(
              
            <div key={item.card.info.id} className="my-5 border-b-2 border-orange-400 text-left flex justify-between rounded-md ">
            <div className="w-7/12"> 
            <div><span className="text-slate-100 text-base my-1">{(item.card.info.name)}  </span></div>
            <span className="my-3 text-slate-200">@ Rs.{item.card.info.price
                 ? item.card.info.price/100
                 : item.card.info.defaultPrice/100}
            </span>
             <p className="text-slate-300 text-sm my-1">{item.card.info.description}</p>
              </div>
            
           <div>
           <img className="w-32 h-28 my-5 p-1 rounded-lg" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+item.card.info.imageId}></img>
           </div>
             
           <button className="text-white w-auto h-10 border-t-[2px] p-1 border-red-500 my-14 rounded-md "
                onClick={()=>handleRemoveItem(item)}>
                    <RiDeleteBin6Line className="m-1 text-white text-lg"/></button>  

            </div>

            ))}
            <div>
                <button className="border border-orange-400 m-2 rounded-md p-2 text-white flex justify-space"   onClick={onClearCart}>Clear Cart <RiDeleteBin6Line className="m-1 text-orange-400"/></button>
            </div>

        </div>)
    
 }


const Cart=()=>{

    const  cartItems=useSelector((store)=> store.cart.items); 
    const dispatch =useDispatch();
    const handleClearCart =()=> {
        //console.log("yuppp called succesfully");
        dispatch(clearCart());
    };

    return (
        <div className="min-h-screen bg-black ">
            <div className="text-white  text-xl ">Your cart have total {cartItems.length} items</div>
            {console.log(cartItems)}
            <h1 className="text-2xl font-bold ">Cart</h1>
            <div><CartList items={cartItems} onClearCart={handleClearCart} />
            </div>
        </div>
    );
};
export default Cart; 