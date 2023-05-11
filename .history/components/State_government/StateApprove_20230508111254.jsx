import React, { useState, useEffect,useContext } from 'react'
import { TransactionContext } from '../../context/TrackingContext'

import {
  StartShipment,
} from '../../components/index';


const StateApprove = () => {
  const {
        startFund,
  } = useContext(TransactionContext);
  const [setStartModel] = useState(true);

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