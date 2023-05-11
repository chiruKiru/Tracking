import React, { useState, useEffect,useContext } from 'react'
import { TransactionContext } from '../../context/TrackingContext'
import StateRequestPage from './StateRequestPage';

const StateReques = () => {
  const {
        createFund,
  } = useContext(TransactionContext);

  const [createShipmentModel,setcreateShipmentModel] = useState(false);

  return (
    <>
      <StateRequestPage
      createShipmentModel = {createShipmentModel}
      createFund = {createFund}
      setcreateShipmentModel ={setcreateShipmentModel}
    />
    </>
  )

};
export default Request_one;