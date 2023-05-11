import React, { useState, useEffect,useContext } from 'react'
import { TransactionContext } from '../context/TrackingContext'

import { Table,For } from '../components/index.js';


const AllTransac = () => {
  const {getAllTransaction} = useContext(TransactionContext);

  const [createShipmentModel,setcreateShipmentModel] = useState(false);

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