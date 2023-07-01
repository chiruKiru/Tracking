import React, { useState, useEffect,useContext } from 'react'
import { TransactionContext } from '../context/TrackingContext'
import { Table } from '../components/index.js';



const AllTransac = () => {
  const {
        getAllTransaction,
  } = useContext(TransactionContext);

  const [createModel,setModel] = useState(false);


  const [data,setdata] = useState();

  useEffect(()=>{
    const getData = getAllTransaction();
      const getReq =  async() => {
        const allData = await getData;
        setdata(allData);
      }
      getReq()
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