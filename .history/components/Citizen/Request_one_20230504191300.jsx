import React, { useState, useEffect,useContext } from 'react'
import { TransactionContext } from '../context/TrackingContext'
import Request from '../components/Citizen/Request';
import { Table,Form } from '../components/index.js';



const AllTransac = () => {
  const {
        createFund,
        getAllTransaction,
  } = useContext(TransactionContext);

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

     <Request
      createShipmentModel = {createShipmentModel}
      createFund = {createFund}
      setcreateShipmentModel ={setcreateShipmentModel}

      />  
      </>
    )
};
export default AllTransac;