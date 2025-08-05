import { useDispatch } from "react-redux";
import { getUserItem } from "../Slices/userSlice";
import { useEffect } from "react";

const useUser = () => {
   const dispatch = useDispatch()

    const getProfile = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please login first");
      return;
    }

    try {
      const responce = await fetch("http://localhost:5000/profile", {
        method: "get",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await responce.json();

      if (responce.ok) {
        dispatch(getUserItem(data.woner));
      }
    } catch (error) {
      console.log(error);
    }


    
  };

     useEffect(() => {
    getProfile();
  }, []);
}

export default useUser


 

 
