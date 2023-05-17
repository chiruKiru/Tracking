import React, { useState, useEffect,useContext } from 'react'
import { TransactionContext } from '../../context/TrackingContext'

import CentralPending from './CentralPending';


const CentralReqList = () => {
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
          />
    </>
  )

};
export default CentralReqList;

import React, { useState, useEffect,useContext } from 'react'
import { TransactionContext } from '../context/TrackingContext'

import {
  Table,
  Form,
  Services,
  Profile,
  GetShipment,
  CompleteShipment,
  StartShipment,
} from '../components/index.js';


const App = () => {
  const {
        createFund,
        getAllTransaction,
        completeFund,
        getFund,
        startFund,
        getFundCount,
        currentUser,
  } = useContext(TransactionContext);

  const [createShipmentModel,setcreateShipmentModel] = useState(false);
  const [openProfile,setOpenProfile] = useState(false);
  const [startModel,setStartModel] = useState(false);
  const [completeModel,setCompleteModel] = useState(false);
  const [getModel,setGetModel] = useState(false);

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
      
      <Form
      createShipmentModel = {createShipmentModel}
      createFund = {createFund}
      setcreateShipmentModel ={setcreateShipmentModel}

      />
      <Profile
        openProfile={openProfile}
        setOpenProfile = {setOpenProfile}
        currentUser={currentUser}
        getFundCount={getFundCount}
        />

        <CompleteShipment
        completeModel={completeModel}
        setCompleteModel = {setCompleteModel}
        completeFund = {completeFund}
        />

       <GetShipment
          getModel={getModel}
          setGetModel = {setGetModel}
          getFund = {getFund}
          />
        <StartShipment
          startModel = {startModel}
          setStartModel = {setStartModel}
          startFund = {startFund}
          />
    </>
  )

};
export default App;