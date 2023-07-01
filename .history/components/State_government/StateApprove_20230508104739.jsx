import React, { useState, useEffect,useContext } from 'react'
import { TransactionContext } from '../../context/TrackingContext'
import StateServices from './StateServices';

import {
  Profile,
  TrackFund,
  StartShipment,
} from '../../components/index.js';


const StateApprove = () => {
  const {

        getAllTransaction,
        getFund,
        startFund,
        getFundCount,
        currentUser,
  } = useContext(TransactionContext);

  const [getModel,setGetModel] = useState(false);

  return (
    <>

       <TrackFund
          getModel={getModel}
          setGetModel = {setGetModel}
          getFund = {getFund}
          />
    </>
  )
};
export default App;