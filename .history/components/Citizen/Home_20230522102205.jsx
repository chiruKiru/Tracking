import React, { useState, useEffect,useContext } from 'react'
import { TransactionContext } from '../../context/TrackingContext'

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
    <div className="bg-[url('../Images/data-bg.jpg')] w-screen h-screen bg-cover  bg-no-repeat">
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
      </div>
    </>
  )

};
export default CitizenHome;