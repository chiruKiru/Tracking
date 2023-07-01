import React, { useState, useEffect,useContext } from 'react'
import { TransactionContext } from '../../context/TrackingContext'
import Request from './Request';

const Request_one = () => {
  const {
        createFund,
        getAllTransaction,
        currentUser
  } = useContext(TransactionContext);

  return (
    <>
      <Request
      createFund = {createFund}
    />
    </>
  )

};
export default Request_one;