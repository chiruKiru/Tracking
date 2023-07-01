import React, { useState, useEffect,useContext } from 'react'
import { TransactionContext } from '../../context/TrackingContext'
import CentralServices from './CentralServices';

import {
  Table,
  Services,
  Profile,
  TrackFund,
  CompleteShipment,
} from '../../components/index.js';


const CentralHome = () => {
  const {
        getAllTransaction,
        completeFund,
        getFund,
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
      const getdata =  async() => {
        const allData = await getCampaingsData;
        setallShipmentsdata(allData);
      }
      getdata()
  },[]);

  return (
    <>
      <CentralServices
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

        <CompleteShipment
        completeModel={completeModel}
        setCompleteModel = {setCompleteModel}
        completeFund = {completeFund}
        />

       <TrackFund
          getModel={getModel}
          setGetModel = {setGetModel}
          getFund = {getFund}
      />
      <currentUser/>
    </>
  )

};
export default CentralHome;