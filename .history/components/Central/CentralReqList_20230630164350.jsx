import React, { useState, useEffect,useContext } from 'react'
import { TransactionContext } from '../../context/TrackingContext'

import CentralPending from './CentralPending';


const CentralReqList = () => {
  const {
        getAllTransaction,
        getFundMain,
        startFund,
        RejectedFund,
        centralFund,
        currentUser
  } = useContext(TransactionContext);

  const [createShipmentModel,setcreateShipmentModel] = useState(false);
  const [getModel,setGetModel] = useState(false);
  const [startModel,setStartModel] = useState(false);
  const [completeModel,setCompleteModel] = useState(false);
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
       <CentralPending
          getModel={getModel}
          setGetModel = {setGetModel}
          getFundMain = {getFundMain}
          alldata = {alldata}
          RejectedFund = {RejectedFund}
          completeModel={completeModel}
          setCompleteModel = {setCompleteModel}
          centralFund = {centralFund}
          currentUser = {}
          />
    </>
  )

};
export default CentralReqList;