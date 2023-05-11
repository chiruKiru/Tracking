import React, { useState, useEffect,useContext } from 'react'
import { TransactionContext } from '../../context/TrackingContext'

import {
  StartShipment,
} from '../../components/index';
import MainStart from '../MainStart';


const StateApprove = () => {
  const {
        startFund,
  } = useContext(TransactionContext);
  const [startModel,setStartModel] = useState(false);

  return (
    <>
        <MainStart
          startModel = {startModel}
          startFund = {startFund}
          />
    </>
  )

};
export default StateApprove;