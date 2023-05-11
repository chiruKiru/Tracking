import React, { useState, useEffect,useContext } from 'react'
import { TransactionContext } from '../../context/TrackingContext'

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
        saveText
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

import {
  Profile,
  GetShipment,
} from '../index.js';
import CitizenService from './CitizenService';


const CitizenHome = () => {
  const {
        getFund,
        getFundCount,
        currentUser
  } = useContext(TransactionContext);

  const [openProfile,setOpenProfile] = useState(false);
  const [startModel,setStartModel] = useState(false);
  const [completeModel,setCompleteModel] = useState(false);
  const [getModel,setGetModel] = useState(false);


  return (
    <>
      <CitizenService
      setOpenProfile = {setOpenProfile}
      setCompleteModel = {setCompleteModel}
      setGetModel = {setGetModel}
      setStartModel = {setStartModel}
      
      />
      <Profile
        openProfile={openProfile}
        setOpenProfile = {setOpenProfile}
        currentUser={currentUser}
        getFundCount={getFundCount}
        />

       <GetShipment
          getModel={getModel}
          setGetModel = {setGetModel}
          getFund = {getFund}
          />
    </>
  )

};
export default CitizenHome;