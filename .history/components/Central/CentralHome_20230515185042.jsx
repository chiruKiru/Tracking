import React, { useState, useEffect,useContext } from 'react'
import { TransactionContext } from '../../context/TrackingContext'

import {
  Table,
  Services,
  Profile,
  GetShipment,
  CompleteShipment,
  StartShipment,
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
      return async () => {
        const allData = await getCampaingsData;
        setallShipmentsdata(allData);
      }
  },[]);

  return (
    <>
      <Services
      setOpenProfile = {setOpenProfile}
      setCompleteModel = {setCompleteModel}
      setGetModel = {setGetModel}
      setStartModel = {setStartModel}
      
      />
      <Table
      setcreateShipmentModel = {setcreateShipmentModel}
      allShipmentsdata = {allShipmentsdata}
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
    </>
  )

};
export default CentralHome;