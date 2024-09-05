import {useDispatch} from "react-redux";
import {addItem} from "../utils/cartSlice";
import { useState } from "react";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";



const ItemList =(props)=>{
     
    const [addedItemIds, setAddedItemIds] = useState(new Set());
    const dispatch=useDispatch();

    const handleAddItem=(item)=>{
        console.log(item);
        dispatch(addItem(item));    
        setAddedItemIds((prevAddedItemIds) =>
        {
            const newAddedItemIds= new Set(prevAddedItemIds);

            newAddedItemIds.add(item.card.info.id);
            return newAddedItemIds;
        });
    };
     

    console.log(props)
    return (
       
            
        <div>
            
           {props?.menuData?.itemCards?.map((item) => (
            
            <div key={item.card.info.id} className="my-5 border-b-2 border-orange-400 text-left flex justify-between rounded-md ">
                <div className="w-9/12"> 
                    <div><span>{item.card.info.name}  </span></div>
                 <span className="my-3">@ Rs.{item.card.info.price
                 ? item.card.info.price/100
                 : item.card.info.defaultPrice/100
                 }</span>
                 <p className="text-slate-300 text-sm my-1">{item.card.info.description}</p>
                  </div>
                
               <div>
               <img className="w-32 h-28 my-5 p-1 rounded-lg" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+item.card.info.imageId}></img>
               </div>
                <button className={`text-white w-auto h-10 border-t-[2px] p-1  ${addedItemIds.has(item.card.info.id) ?  "bg-black border-green-400" : "bg-black border-orange-600"} my-14 rounded-md `}
                onClick={()=>handleAddItem(item)}>
                    + Add</button>    
            
                </div>
            
            

            
           ))} 
        </div>
  )

} 
export default ItemList;