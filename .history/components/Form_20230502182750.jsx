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
              xnm
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}