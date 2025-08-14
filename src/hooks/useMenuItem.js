import { useDispatch } from "react-redux"
import { getMenuItem } from "../Slices/menuItemSlice"
import {useEffect } from "react"

const useMenuItem = () => {
  const dispatch = useDispatch()


   const menuItem = async () => {
     
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please login first");
      return;
    };

        try {
            const data = await fetch("http://localhost:5000/menu",{
        method: "get",
        headers: {
          Authorization: `Bearer ${token}`,
        },
            });

        const jsonRes = await data.json() 
        dispatch(getMenuItem(jsonRes))        
        } catch (error) {
            console.log("data fetching error:", error);
        } 
    }

    useEffect(()=>{
        menuItem()
    },[])

   
}

export default useMenuItem