import { useState } from "react";
import ConnectToPortis from "web3modal/dist/providers/connectors/portis";

export default ({getModel, setGetModel, getShipment}) => {
  const [index , setIndex] = useState(0);
  const [singleShipmentDta, setSingleShipmentData] = useState();

  const getShipmentData = async () => {
    const getData = await getShipment(index);
    setSingleShipmentData(getData);
    ConnectToPortis
  }
}