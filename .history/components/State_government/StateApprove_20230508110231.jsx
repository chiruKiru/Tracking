import React, { useState, useEffect,useContext } from 'react'
import { TransactionContext } from '../../context/TrackingContext'

import {
  StartShipment,
} from '../../';


const StateApprove = () => {
  const {
        startFund,
  } = useContext(TransactionContext);
  const [startModel,setStartModel] = useState(false);

  return (
    <>
        <StartShipment
          startModel = {startModel}
          setStartModel = {setStartModel}
          startFund = {startFund}
          />
    </>
  )

};
export default StateApprove;