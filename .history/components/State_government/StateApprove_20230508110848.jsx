import React, { useState, useEffect,useContext } from 'react'
import { TransactionContext } from '../../context/TrackingContext'

import {
  StartShipment,
} from '../../components/index';


const StateApprove = () => {
  const {
        startFund,
  } = useContext(TransactionContext);

  return (
    <>
        <StartShipment
          startModel = {startModel}
          startFund = {startFund}
          />
    </>
  )

};
export default StateApprove;