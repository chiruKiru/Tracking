import { useState } from "react";

export default ({getModel, setGetModel, getShipment}) => {
  const [index , setIndex] = useState(0);
  const [singleShipmentDta, setSingleShipmentData] = useState();

  const getShipmentData = async () => {
    const getData = await getShipment(index);
    setSingleShipmentData(getData);
    console.log()
  }
}