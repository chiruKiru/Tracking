import React, { useState, useEffect,useContext } from 'react'
import { TransactionContext } from '../../context/TrackingContext'
import StateServices from './StateServices';

import {
  Profile,
  TrackFund,
  StartShipment,
} from '../../components/index.js';


const App = () => {
  const {
        getAllTransaction,
        getFund,
        startFund,
        getFundCount,
        currentUser,
  } = useContext(TransactionContext);

  const [openProfile,setOpenProfile] = useState(false);
  const [startModel,setStartModel] = useState(false);
  const [completeModel,setCompleteModel] = useState(false);
  const [getModel,setGetModel] = useState(false);

  const [alldata,setalldata] = useState();

  useEffect(()=>{
    const getData = getAllTransaction();
      const get =  async() => {
        const allData = await getData;
        setalldata(allData);
      }
      get()
  },[]);

  return (
    <>
      <StateServices
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

       <TrackFund
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