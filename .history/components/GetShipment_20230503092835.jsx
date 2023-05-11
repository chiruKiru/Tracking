import { useState } from "react";

export default ({getModel, setGetModel, getFund}) => {
  const [index , setIndex] = useState(0);
  const [singleShipmentData, setSingleShipmentData] = useState();

  const getShipmentData = async () => {
    const getData = await getFund(index);
    setSingleShipmentData(getData);
    console.log(getData)
  };
  console.log(singleShipmentData);

  const converTime = (time) =>{
    const newTime = new Date(time);
    const dateTime = new Intl.DateTimeFormat("en-US",{
      year:'numeric',
      month:'2-digit',
      day:'2-digit',
    }).format(newTime);
    return dateTime;
  };

  return getModel ?(
    <div className="fixed inset-0 z-10 overflow-y-auto">
    <div className="fixed inset-0 w-full h-full bg-black opacity-40" onClick={()=> setGetModel(false)}>
      </div>
  )


}