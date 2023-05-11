import { useState } from "react";
import ConnectToPortis from "web3modal/dist/providers/connectors/portis";

export default ({getModel, setGetModel, getFund}) => {
  const [index , setIndex] = useState(0);
  const [singleShipmentDta, setSingleShipmentData] = useState();

  const getShipmentData = async () => {
    const getData = await getFund(index);
    setSingleShipmentData(getData);
    ConnectToPortis
  }
}