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
  //2. if item-name = ""/ emty > error
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
      const responce = await fetch("http://localhost:3000/menu", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(menuItem),
      });
      if (responce.ok) {
        setMenuItem({ itemName: "", description: "", price: "", itemImg: "" });
      }
    } catch (error) {
      console.log("respnce-frondernd-error:", error);
    }
  };

  return (
    <div
      className="
    h-screen rounded-2xl
    w-[1200px] flex 
    flex-col items-center
    bg-amber-400 
    "
    >
      <h1
        className="
        bg-clip-text 
        text-gray-400 
        sm:text-transparent 
        text-center
        sm:bg-gradient-to-b 
        from-green-900 to-green-800 
        dark:from-green-700 
        dark:to-amber-400 
        text-2xl md:text-8xl 
        sm:text-7xl font-sans 
        py-2 md:py-10 relative z-20 
        font-bold tracking-tight
        "
      >
        MENU ITEM FORM
      </h1>

      <form
        onSubmit={henderlOnSubmit}
        className="flex flex-col w-[600px] 
        items-center 
        "
        action=""
      >
        <input
          className="
            bg-white w-full h-10 
            px-1.5 rounded-md 
            text-green-950 mb-10
            "
          onChange={handelInputChange}
          name="itemName"
          type="text"
          placeholder="Dish name"
          required
          id="itemnameInput"
        />
        <input
          className="
            bg-white w-full h-10 
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
          className="
            bg-green-800 
            h-20 w-32 px-1.5 rounded-md 
            text-white mb-10
            "
          onChange={handelInputChange}
          name="itemImg"
          type="file"
          placeholder="ADD DESH IMEGE +"
        />
        <button
          className="
            text-white  
            bg-green-800 px-5 
            py-2 rounded-[4px]
            "
        >
          ADD TO MENU
        </button>
      </form>
    </div>
  );
};

export default ManeuItemForm;
