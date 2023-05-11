import { useState } from "react";

export default ({
  setCreateShipmentModel,
  createShipmentModel,
  createFund,
}) => {

  const [shipment, setShipment] = useState({
    receiver:"",
    pickupTime: "",
    distance:"",
    price:""
  });

  const  createItem = async() => {
    try {
      await createFund(shipment);
    } catch (error) {
      console.log("Wrong creating irem")
    }
  };
  return createShipmentModel ?(
    <div className="fixed iset-0 z-10 overflow-y-auto">
      <div className="fixed inset-0 w-full h-full bg-black opacity-40" onClick={()=> setCreateShipmentModel(false)}>
        <div className="flex items-center min-h-screen px-4 mx-auto bg-white rounded-md shadow-lg">
          <div className="flex justify-end">
            <button className="p-2 text-gray-400 rounded-md hover:bg-gray-100"
            onClick={()=> setCreateShipmentModel(false)}>
              <svg 
              xmlns="'http://www.w3.org/2000/svg"
              className="w- h-5 mx-auto"
              viewBox="0 0 20 20"
              fill="currentColor">
                <path
                fillRule="evenodd"
                d="M
                .293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414
                10l4.293 4.293a1 1 1 01-1.414 1.414L10 11.414l-4.293 4.293a1
                1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule='evenodd'/>
              </svg>
            </button>
          </div>
          <div className="max-w-sm mx-auto py-3 space-y-3 text-center">
            <h4 className="text-lg font-medium text-gray-800">
              Track product, Create Shipment
            </h4>
            <p className="text-[15px] text-gray-600">
              The people who are crazy enough to think that they can change the world they are the one who will.
            </p>
          <form onSubmit={(e)=> e.preventDefault()}>
            <div className="relative mt-3">
              <input
                type='text' placeholder="receiver" className="w-full pl-5 pr-3 py-2 text-gray-500 bg-transparent
                outline-none border "

            </div>
          </form>
          </div>
        </div>
      </div>
    </div>
  ):""
}