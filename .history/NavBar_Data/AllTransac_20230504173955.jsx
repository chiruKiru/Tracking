import React, { useState, useEffect,useContext } from 'react'
import { TransactionContext } from '../context/TrackingContext'

import { Table,Form } from '../components/index.js';



const AllTransac = () => {
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
      <Table
      setcreateShipmentModel = {setcreateShipmentModel}
      allShipmentsdata = {allShipmentsdata}
      />

     <Form
      createShipmentModel = {createShipmentModel}
      createFund = {createFund}
      setcreateShipmentModel ={setcreateShipmentModel}

      />  
      </>
    )
};
export default AllTransac;