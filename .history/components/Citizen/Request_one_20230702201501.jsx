import React, { useState, useEffect,useContext } from 'react'
import { TransactionContext } from '../../context/TrackingContext'
import Request from './Request';

const Request_one = () => {
  const {
        createFund,
        getFundCount
  } = useContext(TransactionContext);

  return (
    <>
      <Request
      createFund = {createFund}
      getFundCount = {getFundCount}
    />
    </>
  )

};
export default Request_one;