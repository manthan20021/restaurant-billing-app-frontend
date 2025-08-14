import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";



const MenuItemCard = ({ menuData }) => {

  

  let data = menuData;
  let {
    itemImg,
    itemName,
    price,
    _id
  } = data
 

  return (
    <div className="w-[103px] h-[141px] bg-[#5959b2] rounded-xl group"  >
      <div className=" w-full pt-[6px] flex justify-center items-center ">
              <img className="rounded-xl overflow-hidden w-[89px] h-[81px]" src={itemImg} alt="" />
      </div>
      <div>
        
        {/* //input forms for update items */}
       {/* <form>
          <input 
        className="border-transparent bg-transparent w-full" 
        placeholder="itemNmame"


         type="text" 
         />
         <input 
         className="border-transparent bg-transparent w-full" 
        placeholder="price"
         type="number"
         />
        </form>  */}
        
        <div className="w-full flex flex-col items-center text-[#F6F5FF]"> <p>{itemName}</p> <p>Rs : {price}</p></div>


     {/* btns for edit and delete items     */}
{/* <div className="w-7 h-[100px] flex-col items-center justify-around bg-[#D9D9D9]  rounded-2xl sticky mt-[-100px] ml-[103px] {isHover} group-hover:flex hidden ">
        <button className="text-[#5959b2] rounded-sm">
          <MdDelete />
        </button>
    <button className="text-[#5959b2]  rounded-sm">
        <FaEdit />
      </button>
      </div>   */}
      </div>
    </div>

  );  
};

export default MenuItemCard;
