import React, { useState, useEffect,useContext } from 'react'
import { TransactionContext } from '../context/TrackingContext'
import Request from '../components/Citizen/Request';

import {
  Table,
  Form,
  Services,
  Profile,
  GetShipment,
  CompleteShipment,
  StartShipment,
} from '../components/index.js';


const App = () => {
  const {
        createFund,
        getAllTransaction,
  } = useContext(TransactionContext);

  const [createShipmentModel,setcreateShipmentModel] = useState(false);
  const [openProfile,setOpenProfile] = useState(false);
  const [startModel,setStartModel] = useState(false);
  const [completeModel,setCompleteModel] = useState(false);
  const [getModel,setGetModel] = useState(false);

  const [allShipmentsdata,setallShipmentsdata] = useState();

  useEffect(()=>{
    const getCampaingsData = getAllTransaction();
      return async () => {
        const allData = await getCampaingsData;
        setallShipmentsdata(allData);
      }
  },[]);

  return (
    <>
      <Request
      createShipmentModel = {createShipmentModel}
      createFund = {createFund}
      setcreateShipmentModel ={setcreateShipmentModel}
    />
    </>
  )

};
export default App;