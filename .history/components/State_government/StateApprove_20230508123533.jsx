import React, { useState, useEffect,useContext } from 'react'
import { TransactionContext } from '../../context/TrackingContext'

import MainStart from '../MainStart';


const StateApprove = (receiver) => {
  console.log(receiver)
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