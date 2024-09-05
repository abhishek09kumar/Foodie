import React,{lazy, Suspense} from 'react';
import  ReactDOM  from "react-dom/client"; 
import Header from './components/Header.js';
import Body from './components/Body.js';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import About from "./components/About";
import Error from "./components/Error.js";
import { Outlet } from 'react-router-dom';
import Contacts from './components/Contacts.js';
import Cart from './components/Cart.js';
import RestaurantMenu from './components/RestaurantMenu.js';
import { Provider } from "react-redux";
import appStore from "./utils/appStore";


const Grocery =lazy(()=>import("./components/Grocery"));

const AppLayout=()=>
{
    return (
      <Provider store={appStore}>
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
        </Provider>
    ) ; 
};

const RestaurantCard=(props)=>
{
    const {resData}=props;
    const {name,cloudinaryImageId,avgRating,sla}=resData?.info;
    return ( 
        <div class="w-56 h-auto m-3 border-2 border-black rounded-lg bg-black  hover:border-orange-500 ">
          
          <img 
            className="res-logo h-52 w-60 rounded-md"
            alt="res_logo"
            src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} /> 
            <p><h4 className="font-bold text-white">{name}
            <h5>{}
            </h5></h4><h6 class="text-white">Delivery Time : {sla.slaString}</h6>
            <h6 class="text-white">Rating : {avgRating}</h6></p>
         
        </div> 
    );
};

export const withPromotionLabel=(RestaurantCard)=>{
  return (props)=>{
    return (
     <div>
       <label>Promoted</label>
      <RestaurantCard  {...props}/>
     </div>
    )
  }
}

const appRouter=createBrowserRouter([
    {
      path:"/",
      element:<AppLayout/>,
      errorElement:<Error/>,
      children:[
        {
            path:"/",
            element:<Body/>,
        },
        {
            path:"/cart",
            element:<Cart/>,
        },
        {
          path:"/about",
          element: <About/>,
        },
        {
          path:"/contact",
          element:<Contacts/>,
         },
         {
          path:"/grocery",
          element:<Suspense fallBack={<h2>Hold tight we are loading....</h2>}><Grocery/></Suspense>,
         },
         {
          path:"/restaurants/:resId",
          element:<RestaurantMenu/>
      
         },
      ],
    },
   
   
   
    
]);
 
export default RestaurantCard;
const  root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);  