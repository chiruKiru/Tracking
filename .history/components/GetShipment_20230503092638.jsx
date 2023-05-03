import { useState } from "react";

export default ({getModel, setGetModel, getShipment}) => {
  const [index , setIndex] = useState(0);
  const [singleShipmentData, setSingleShipmentData] = useState();

  const getShipmentData = async () => {
    const getData = await getShipment(index);
    setSingleShipmentData(getData);
    console.log(get)
  };
  console.log(singleShipmentData)
}