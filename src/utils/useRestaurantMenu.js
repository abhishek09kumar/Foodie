import { useState,useEffect } from "react";


export const useRestaurantInfo=(resId)=>{
    
    const [resInfo,setResInfo]=useState([]);
     
   useEffect(()=>{
    fetchData();
   },[]);

   const fetchData=async()=>{
    const data= await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6090126&lng=76.9854526&restaurantId="+resId+"&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER");
    const json= await data.json();

    setResInfo(json.data?.cards[2]?.card?.card?.info);
    
   }
    return resInfo;
}



export const useRestaurantMenu =(resId)=>{
    const [resMenu,setResMenu]=useState([]);
    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData=async()=>{
    const data= await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6090126&lng=76.9854526&restaurantId="+resId+"&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER");
    const json= await data.json();
    //console.log(json.data)
    setResMenu(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards);
    }
    return resMenu;
}

