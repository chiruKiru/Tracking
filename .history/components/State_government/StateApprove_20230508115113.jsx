import React, { useState, useEffect,useContext } from 'react'
import { TransactionContext } from '../../context/TrackingContext'

import {
  StartShipment,
} from '../../components/index';
import MainStart from '../MainStart';


const StateApprove = (receiver,index) => {
  con
  const {
        startFund,
  } = useContext(TransactionContext);

  return (
    <>
        <MainStart
          startFund = {startFund}
          />
    </>
  )

};
export default StateApprove;