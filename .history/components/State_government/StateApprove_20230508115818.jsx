import React, { useState, useEffect,useContext } from 'react'
import { TransactionContext } from '../../context/TrackingContext'

import {
  StartShipment,
} from '../../components/index';
import MainStart from '../MainStart';


const StateApprove = (receiver) => {
  console.log(receiver)
  const {
        startFund,
  } = useContext(TransactionContext);
  console.log(index)
  return (
    <>
        <MainStart
          startFund = {startFund}
          />
    </>
  )

};
export default StateApprove;