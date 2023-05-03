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
        startShipment,
        getShipmentsCount,


        createShipment,
        getAllShipment,
        completeShipment,
        getShipment,
        startShipment,
        getShipmentsCount,
        DaapName,
        currentUser
  } = useContext(TransactionContext);

  const [createShipmentModel,setcreateShipmentModel] = useState(false);
  const [openProfile,setOpenProfile] = useState(false);
  const [startModel,setStartModel] = useState(false);
  const [completeModel,setCompleteModel] = useState(false);
  const [getModel,setGetModel] = useState(false);

  const [allShipmentsdata,setallShipmentsdata] = useState(false);

  useEffect(()=>{
    const getCampaingsData = getAllShipment;
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

      <Form
      createShipmentModel = {createShipmentModel}
      createShipment = {createShipment}
      setcreateShipmentModel ={setcreateShipmentModel}

      />
      <Profile
        openProfile={openProfile}
        setOpenProfile = {setOpenProfile}
        currentUser={currentUser}
        getShipmentsCount={getShipmentsCount}
        />

        <CompleteShipment
        completeModel={completeModel}
        setCompleteModel = {setCompleteModel}
        completeShipment = {completeShipment}
        />

        <GetShipment
          getModel={getModel}
          setGetModel = {setGetModel}
          getShipment = {getShipment}
          />

        <StartShipment
          startModel = {startModel}
          setStartModel = {setGetModel}
          startShipment = {startShipment}
          />
    </>
  )

};
export default App;