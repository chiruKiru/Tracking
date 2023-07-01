import React, { useState, useEffect,useContext } from 'react'
import { TransactionContext } from '../../context/TrackingContext'


import GetPending from '../GetPending';


const App = () => {
  const {
        getAllTransaction,
        startFund,
        RejectedFund,
        getFundMain
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
          alldata = {alldata}
          startModel = {startModel}
          setStartModel = {setStartModel}
          startFund = {startFund}
          RejectedFund = {RejectedFund}
          getFundMain = {getFundMain}
          />
    </>
  )

};
export default App;