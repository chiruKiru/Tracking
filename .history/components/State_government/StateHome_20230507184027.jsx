import React, { useState, useEffect,useContext } from 'react'
import { TransactionContext } from '../../context/TrackingContext'
import Request from '../Citizen/Request';

import {
  Profile,
  TrackFund,
} from '../index.js';
import CitizenService from '../../CitizenService';


const StateHome = () => {
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
    <Request
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

       <TrackFund
          getModel={getModel}
          setGetModel = {setGetModel}
          getFund = {getFund}
          />
    </>
  )

};
export default StateHome;