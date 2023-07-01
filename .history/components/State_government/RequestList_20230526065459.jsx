import React, { useState, useEffect,useContext } from 'react'
import { TransactionContext } from '../../context/TrackingContext'


import GetPending from '../GetPending';


const App = () => {
  const {
        getAllTransaction,
        getFund,
        startFund,
        RejectedFund
  } = useContext(TransactionContext);

  const [createShipmentModel,setcreateShipmentModel] = useState(false);
  const [getModel,setGetModel] = useState(false);
  const [startModel,setStartModel] = useState(false);

  const [allShipmentsdata,setallShipmentsdata] = useState();

  useEffect(()=>{
    const getData = getAllTransaction();
      const getdata =  async() => {
        const allData = await geData;
        setallShipmentsdata(allData);
      }
      getdata()
  },[]);

  return (
    <>
       <GetPending
          getModel={getModel}
          setGetModel = {setGetModel}
          getFund = {getFund}
          setcreateShipmentModel = {setcreateShipmentModel}
          allShipmentsdata = {allShipmentsdata}
          startModel = {startModel}
          setStartModel = {setStartModel}
          startFund = {startFund}
          RejectedFund = {RejectedFund}
          />
    </>
  )

};
export default App;