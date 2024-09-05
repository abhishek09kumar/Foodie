import { useEffect,useState } from "react";
import { IoIosStar } from "react-icons/io";
import { BsDot } from "react-icons/bs";
import { IoTimerOutline } from "react-icons/io5";
import { MdLocationPin } from "react-icons/md";
import { useParams } from "react-router-dom";
import {useRestaurantInfo,useRestaurantMenu} from "../utils/useRestaurantMenu.js";
import { GiClassicalKnowledge } from "react-icons/gi";
//import useRestaurantMenu from "../utils/useRestaurantMenu";
import Itemlsit from "./ItemList.js"
import { FaSalesforce } from "react-icons/fa";

 

const RestaurantMenu=()=>
{   
    const {resId}=useParams();
    const resInfo=useRestaurantInfo(resId);
    const resMenu=useRestaurantMenu(resId);
   // console.log(resMenu);

   const {name,avgRating, costForTwoMessage,totalRatingsString,cuisines,areaName,sla}=resInfo;
   
   const categories=resMenu.filter(c=> c.card?.["card"]?.["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
//console.log(categories);
 
if({avgRating}==0)
  console.log("i am executing")
    

const RestaurantCategory=(props)=>{
  // console.log(props)

  const [showItem,setShowItem]=useState(null)
  const handleClick=()=>{
    setShowItem(!showItem);
   }

  return (
    <div className="">
      <div className=" w-7/12  mx-auto justify-between my-6 " >
       <div className="cursor-pointer" onClick={handleClick}> 
       <span className="text-orange-500  ">
          {props.categoryData.title} ({props.categoryData.itemCards.length}) 
          </span> 
          </div>
         <span> {showItem && <Itemlsit menuData={props.categoryData}/>}
         </span> 
    </div>
    </div>
  )
}  

return (<div className="text-center h-auto min-h-screen bg-black" >
   <div className="text-white "  >
            <h1 className="font-bold text">{name}</h1>
            <div className="items-center  mx-auto my-5 w-96 py-3 border border-orange-500 rounded" >
            <h6>{ avgRating} ({totalRatingsString})  .  {costForTwoMessage }</h6>
            <h5>{cuisines}</h5>
            <h6> {areaName}</h6>
            <h6>{}</h6>
            </div>
            <h1 className="font-bold">Menu</h1>
            
          {categories.map((category,index)=>(
            <RestaurantCategory key={Math.random()} 
            categoryData={category.card.card}
            
            />
          ))}
          
        </div>  

</div>);
};

export default RestaurantMenu;

