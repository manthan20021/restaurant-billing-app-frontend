import React, { useState } from 'react'

const Register = () => {

    const [user, setUser] = useState({
        name:"",
        password:"",
        email:"",
        phone:"",
        restaurantname:""
    })

    const handelInputChange = (e) => {
    let name = e.target.name;
    let values = e.target.value;
    setUser({
      ...user,
      [name]: values,
    })
  };

    const hendelSubmit =  async () =>{
        try {
           const responce = await fetch("http://localhost:5000/register", {
            method: "POST",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user)
            })

            if(responce.ok){
                setUser({ 
        name:"",
        password:"",
        email:"",
        phone:"",
        restaurantname:""
    })
            }
        } catch (error) {
            console.log("respnce-frondernd-error:", error);
        }
    }

  return (
    <div
      className="rounded-2xl
    w-full flex 
    flex-col items-center h-screen
    bg-[#F6F5FF] 
    "
    >
      
      <form
        onSubmit={hendelSubmit}
        className="flex flex-col w-full h-auto
        items-center pt-10
        "
        action=""
      >
        <h1 className="m-3 text-[#5959b2] font-bold w-[260px] text-xl ">Register</h1>

        <input
          className="
            bg-[#D9D9D9] w-[260px] h-10 
            px-1.5 rounded-md 
            text-green-950 mb-3
            "
          onChange={handelInputChange}
          name="name"
          type="text"
          placeholder="name"
          required
        />

        <input
          className="
            bg-[#D9D9D9]  w-[260px] h-10 
            px-1.5 rounded-md 
            text-green-950 mb-3
            "
          onChange={handelInputChange}
          name="password"
          type="text"
          placeholder="password"
          required
        />
        
        <input
          className="
            bg-[#D9D9D9]  w-[260px] h-10 
            px-1.5 rounded-md 
            text-green-950 mb-3
            "
          onChange={handelInputChange}
          name="email"
          type="text"
          placeholder="email"
          required
        />

         <input
          className="
            bg-[#D9D9D9]  w-[260px] h-10 
            px-1.5 rounded-md 
            text-green-950 mb-3
            "
          onChange={handelInputChange}
          name="phone"
          type="number"
          placeholder="mobail"
          required
        />

         <input
          className="
            bg-[#D9D9D9]  w-[260px] h-10 
            px-1.5 rounded-md 
            text-green-950 mb-3
            "
          onChange={handelInputChange}
          name="restaurantname"
          type="text"
          placeholder="restaurantname"
          required
        />
        
          
        

        <button
          className="
            text-white  
            bg-[#5959b2]
            py-2 rounded-[4px] w-[260px] h-10
           "
        >
          SUBMIT
        </button>
      </form>
    </div>
  )
}

export default Register
