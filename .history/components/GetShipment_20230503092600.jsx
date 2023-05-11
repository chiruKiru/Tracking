import { useState } from "react";

export default ({getModel, setGetModel, getFund}) => {
  const [index , setIndex] = useState(0);
  const [singleShipmentDta, setSingleShipmentData] = useState();

  const getShipmentData = async () => {
    const getData = await getFund(index);
    setSingleShipmentData(getData);
    console.log()
  }
}