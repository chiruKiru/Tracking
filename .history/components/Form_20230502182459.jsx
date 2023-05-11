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
      <div className="fixed inset-0 w-full h-full bg-black opacity-40" onClick={()=> setCreateShipmentModel(false)}
    </div>
  )
}