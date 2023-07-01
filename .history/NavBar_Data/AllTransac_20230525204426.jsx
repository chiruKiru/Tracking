import React, { useState, useEffect,useContext } from 'react'
import { TransactionContext } from '../context/TrackingContext'
import { Table,Form } from '../components/index.js';



const AllTransac = () => {
  const {
        getAllTransaction,
  } = useContext(TransactionContext);

  const [createShipmentModel,setcreateShipmentModel] = useState(false);


  const [alldata,setallShipmentsdata] = useState();

  useEffect(()=>{
    const getCampaingsData = getAllTransaction();
      const getdata =  async() => {
        const allData = await getCampaingsData;
        setallShipmentsdata(allData);
      }
      getdata()
  },[]);
  return (
    <>
      <Table
      setcreateShipmentModel = {setcreateShipmentModel}
      alldata = {alldata}
      getAllTransaction = {getAllTransaction}
      />
      </>
    )
};
export default AllTransac;