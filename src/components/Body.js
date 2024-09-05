import resList from "../utils/constants.js";
import RestaurantCard,{withPromotionLabel} from "../App.js";
import { MdStars } from "react-icons/md";
import {useEffect, useState} from "react";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js"

const Body=()=> 
{
    
   const [listofRestaurants,setlistofRestaurants]=useState([]);
   const [filteredRestaurant,setFilteredRestaurant]=useState([]);
   const [serachText,setSearchText]=useState("");
   const RestaurnatCardPromoted=withPromotionLabel(RestaurantCard);
useEffect(()=>{
    fetchData();
   },[]);

   const fetchData=async()=>{
   const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6090126&lng=76.9854526&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

   const json=await data.json();
  console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
   setlistofRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
   setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
};


const status=useOnlineStatus();
if (status===false)
   return ( <h2>please check your internet Connection</h2>);

   
if(listofRestaurants==0)
{ {
    const shimmerArray = Array(12).fill(null);
  
    return (
      <div className="shimmer-container">
        {shimmerArray.map(() => (
          <Shimmer key={Math.random()} /> 
        ))}
      </div>
    );
  }
  };

    return (<div className="body bg-black">
      <div class="flex mx-1 m-1" > 
        <div className="search  " >
          <input type="text" className="border  border-black rounded-sm bg-white font-mono text-orange-500 " value={serachText}  onChange={(e)=>{
            setSearchText(e.target.value);
          }}/>
          <button className="m-3 border border-black white rounded w-20 text-white bg-black"
           onClick={()=>{
            const searchResult=listofRestaurants.filter((res)=>res.info.name.toLowerCase().includes(serachText.toLowerCase()));
            console.log(searchResult);
            setFilteredRestaurant(searchResult);
          }}> Search</button>
          </div>
          
        <div > <button class=" w-50 h-11 mx-2 text-white" onClick={()=>{

           const list=listofRestaurants.filter((res)=>res.info.avgRating>4.5);  
           console.log(list);
          setFilteredRestaurant(list);  
 
        } }
        > <p class="flex my-1  "> < MdStars color="orange" class="h-6 w-5" /> Top Rated</p>
        
        </button>
        </div>
        </div>
        
        <div className="res-container"> 
       
        </div> 
        <div class="body flex flex-wrap  w-600">

        {filteredRestaurant.map((restaurant)=>(
            < Link key={restaurant.info.id}  to={"/restaurants/"+restaurant.info.id}>{restaurant.info.proomoted ? <PromotedRestaurantCard resData={restaurant}/> : <RestaurantCard resData={restaurant}/>} </Link>
        ))}
</div> 
    </div>);
};

export default Body;