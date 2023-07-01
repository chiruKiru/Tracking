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
  
  const [getModel,setGetModel] = useState(false);
  const [startModel,setStartModel] = useState(false);

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
       <GetPending
          getModel={getModel}
          setGetModel = {setGetModel}
          getFund = {getFund}
          setcreateShipmentModel = {setcreateShipmentModel}
          alldata = {alldata}
          startModel = {startModel}
          setStartModel = {setStartModel}
          startFund = {startFund}
          RejectedFund = {RejectedFund}
          />
    </>
  )

};
export default App;