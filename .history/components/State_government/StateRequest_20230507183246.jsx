import React, { useState, useEffect,useContext } from 'react'
import { TransactionContext } from '../../context/TrackingContext'
import 

import {
  Table,
  Form,
  Services,
  Profile,
  TrackFund,
  CompleteShipment,
  StartShipment,
} from '../../components/index.js';


const Request_one = () => {
  const {
        createFund,
  } = useContext(TransactionContext);

  const [createShipmentModel,setcreateShipmentModel] = useState(false);

  return (
    <>
      <Request
      createShipmentModel = {createShipmentModel}
      createFund = {createFund}
      setcreateShipmentModel ={setcreateShipmentModel}
    />
    </>
  )

};
export default Request_one;