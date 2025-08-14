import { useSelector } from "react-redux";
import useUser from "../../hooks/useUser";

const Profiel = () => {
 useUser()
 const userData = useSelector((store)=> store.user?.userItem)
 console.log(userData);
 
 

  return (
    <div className="h-4xl">
      <h1>profile page</h1>
       <button className="bg-[#5959b2] text-[#f1f1ff] px-5 py-1 rounded-[4px]">
        Logout
        </button>
    </div>
  );
};

export default Profiel;
