import { useState } from "react";



const ManeuItemForm = () => {
  const [menuItem, setMenuItem] = useState({
    itemName: "",
    description: "",
    price: "",
    itemImg: "",
  });



  //we need to hendel the cases
  //1. if item-name = number > error
  //2. if item-name = ""/ emty > errorf
  //3. if item-name = all the simbols like !@#$%^&* > error

  const handelInputChange = (e) => {
    let name = e.target.name;
    let values = e.target.value;
    setMenuItem({
      ...menuItem,
      [name]: values,
    })
  };

  const henderlOnSubmit = async () => {
    try {
      const responce = await fetch("http://localhost:5000/menu", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(menuItem),
      });
      if (responce.ok) {
        setMenuItem({ itemName: "", description: "", price: "", itemImg: ""});
      }
      if(menuItem.itemName.length > 12){
      alert("Item-name shuld be 12 or less then 12 character ")
    }
    } catch (error) {
      console.log("respnce-frondernd-error:", error);
    }
  };

  return (
    <div
      className="rounded-2xl
    w-full flex 
    flex-col items-center h-screen
    bg-[#F6F5FF] 
    "
    >
      
      <form
        onSubmit={henderlOnSubmit}
        className="flex flex-col w-full h-auto
        items-center pt-20 
        "
        action=""
      >
        <h1 className="m-3 text-[#5959b2] font-bold w-[260px] text-xl ">Add Menu Item</h1>

        <input
          className="
            bg-[#D9D9D9] w-[260px] h-10 
            px-1.5 rounded-md 
            text-green-950 mb-5
            "
          onChange={handelInputChange}
          name="itemName"
          type="text"
          placeholder="Dish name"
          required
        />
        <input
          className="
            bg-[#D9D9D9]  w-[260px] h-10 
            px-1.5 rounded-md 
            text-green-950 mb-10
            "
          onChange={handelInputChange}
          name="price"
          type="number"
          placeholder="price"
          required
        />

        
          <input
          className=" text-white  
            bg-[#5959b2]
            py-2 rounded-[4px] w-[260px] h-10 mb-3"
          onChange={handelInputChange}
          name="file"
          type="file"
          placeholder="ADD DESH IMEGE +"
        />
        

        <button
          className="
            text-white  
            bg-[#5959b2]
            py-2 rounded-[4px] w-[260px] h-10
           "
        >
          ADD TO MENU
        </button>
      </form>
    </div>
  );
};

export default ManeuItemForm;
