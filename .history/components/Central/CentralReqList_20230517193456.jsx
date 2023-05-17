import React, { useState, useEffect,useContext } from 'react'
import { TransactionContext } from '../../context/TrackingContext'

import CentralPending from './CentralPending';


const CentralReqList = () => {
  const {
        getAllTransaction,
        getFund,
        startFund,
        RejectedFund,
        centralFund,
  } = useContext(TransactionContext);

  const [createShipmentModel,setcreateShipmentModel] = useState(false);
  const [getModel,setGetModel] = useState(false);
  const [startModel,setStartModel] = useState(false);
  const [completeModel,setCompleteModel] = useState(false);
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
       <CentralPending
          getModel={getModel}
          setGetModel = {setGetModel}
          getFund = {getFund}
          setcreateShipmentModel = {setcreateShipmentModel}
          allShipmentsdata = {allShipmentsdata}
          startModel = {startModel}
          setStartModel = {setStartModel}
          startFund = {startFund}
          RejectedFund = {RejectedFund}
          completeModel={completeModel}
          setCompleteModel = {setCompleteModel}
          completeFund = {completeFund}
          />
    </>
  )

};
export default CentralReqList;