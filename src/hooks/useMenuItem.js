import { useDispatch } from "react-redux"
import { getMenuItem } from "../Slices/menuItemSlice"
import { useEffect } from "react"

const useMenuItem = () => {

  const dispatch = useDispatch()

   const menuItem = async () => {
        try {
            const data = await fetch("http://localhost:3000/menu")
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