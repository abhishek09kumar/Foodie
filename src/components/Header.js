import {useState} from "react";
import { Link } from "react-router-dom";
import { GrCart } from "react-icons/gr";
import {useSelector } from "react-redux";

const Header =()=>
{

    const [btnName,setbtnName]=useState("Login");
    const cartItems=useSelector ((store)=>store.cart.items);
    console.log(cartItems);
    return (
        <div class="flex justify-between bg-black ">  
            <div className="logo-contianer" >
                <img class="w-64 " src="https://i.ibb.co/RDs5YXP/You-Pick.png"></img>
            </div>
            <div className='flex item-center'>
                <ul className="flex p-4 m-6">
                <li class="color text-white text-2xl px-4 flex item-center" ><Link to="/">Home</Link></li>
                    
                    <li class="color text-white text-2xl px-4">Location</li>
                    <li class="color text-white text-2xl px-4 "><Link to="/contact">Contact Us</Link></li>
                    <li class="color text-white text-2xl px-4"><Link to="/grocery">Grocery</Link></li>
                    <li class="color text-white text-2xl px-4"><Link to="/about">About Us</Link></li>
                    <li class="color text-white text-2xl px-4"><button className="login-btn" onClick={()=>{
                        btnName=="Login" ? setbtnName("Logout") : setbtnName("Login");
                    }}>{btnName}</button>  </li>
                    <li class="color text-white text-2xl px-4 "> <Link to="/cart" className="flex"><GrCart /><w className="text-orange-500 text-base font-bold my-2">{cartItems.length}</w></Link></li>
                </ul>
            </div>
           
        </div>
    )
};
export default Header; 