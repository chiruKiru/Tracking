import { useEffect,useState,useContext } from "react";
import { TransactionContext } from "../Context/TrackingContext";
import { Nav1,Nav2,Nav3 } from "./index";

export default() => {
  const {currentUser,connectWallet}  = useContext(TransactionContext)
  const [state,setState] = useState(false);
  const navigation = [
    {title: "Home",path: "Home"},
    {title: "Service",path: "#"},
    {title: "Request List",path: "#"},
    {title: "Last Transaction",path: "Transaction"}
  ];

  useEffect(() => {
    document.onclick= (e) => {
      const target = e.target;
      if(!target.closest(".menu-btn")) setState(false);
    }
  },[]);
  return (
    <nav className={`relative z-20 bg-white w-full md:static md:text-sm md:border-none ${state ? "shadow-lg rounded-b-xl md:shadow-none" : ""}`}>
    <div className="items-center  px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
        <a href="/">
          <img src='../Images/logo.png' width={120} height={50} alt="Float UI logo" />
        </a>
        <div className="md:hidden">
          <button className="menu-btn text-gray-500 hover:text-gray-800" onClick={()=>setState(!state)}>
            {state ? <Nav1/> : <Nav2/>}
          </button>
        </div>
      </div>
      <div className={`flex-1 items-center mt-8 md:mt-0 md:flex ${state ? "block" : "hidden"}`}>
        <ul className="justify-center items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
          {navigation.map((item,idx)=>{
             return (
              <li key={idx} className="text-gray-700 hover:text-grey-900">
                <a href={item.path} className="block">
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
            <div className="flex-1 gap-x-6 items-center justify-end mt-6 space-y-6 md:flex md:space-y-0 md:mt-0">
              {currentUser ? (
                <p className="flex items-center justify-center gap-x-1 py-2 px-4 text-white fot-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900
                rounded-full md:inline-flex">
                  {currentUser.slice(0,25)}..
                </p>
              ):( <button onClick={()=>connectWallet()}
              className="flex items-center justify-center gap-x-1 py-2 px-4 text-white fot-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900
              rounded-full md:inline-flex"> Connect Wallet
              <Nav3/> </button>
              )}
            </div>
      </div>
      </div>
    </nav>
  );
}