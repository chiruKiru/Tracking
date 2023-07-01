import React, { useState, useEffect,useContext } from 'react'
import { TransactionContext } from '../context/TrackingContext'
import { Table,Form } from '../components/index.js';



const AllTransac = () => {
  const {
        getAllTransaction,
  } = useContext(TransactionContext);

  const [createShipmentModel,setcreateShipmentModel] = useState(false);


  const [allShipmentsdata,setallShipmentsdata] = useState();

  useEffect(()=>{
    const getCampaingsData = getAllTransaction();
      const vinod =  async() => {
        const allData = await getCampaingsData;
        setallShipmentsdata(allData);
      }
      
  },[]);
  return (
    <>
      <Table
      setcreateShipmentModel = {setcreateShipmentModel}
      allShipmentsdata = {allShipmentsdata}
      getAllTransaction = {getAllTransaction}
      />
      </>
    )
};
export default AllTransac;