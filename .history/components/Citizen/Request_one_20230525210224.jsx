import React, { useState, useEffect,useContext } from 'react'
import { TransactionContext } from '../../context/TrackingContext'
import Request from './Request';

const Request_one = () => {
  const {
        createFund,
        getAllTransaction,
        currentUser
  } = useContext(TransactionContext);

  const [createShipmentModel,setcreateShipmentModel] = useState(false);

  const [allShipmentsdata,setallShipmentsdata] = useState();

  useEffect(()=>{
    const getData = getAllTransaction();
      return async () => {
        const allData = await getData;
        setallShipmentsdata(allData);
      }
  },[]);

  const [alldata,setalldata] = useState();

  useEffect(()=>{
    const getData = getAllTransaction();
      const getdata =  async() => {
        const allData = await getData;
        setalldata(allData);
      }
      getdata()
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
export default Request_one;