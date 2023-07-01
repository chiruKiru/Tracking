/*import React, { useState, useEffect,useContext } from 'react'
import { TransactionContext } from '../../context/TrackingContext'
import { Table,Form } from '../../components/index.js';
import StatePending from './StatePending';



const RequestList = () => {
  const {
        getAllTransaction,
  } = useContext(TransactionContext);

  const [createShipmentModel,setcreateShipmentModel] = useState(false);


  const [allShipmentsdata,setallShipmentsdata] = useState();

  useEffect(()=>{
    const getCampaingsData = getAllTransaction();
      return async () => {
        const allData = await getCampaingsData;
        setallShipmentsdata(allData);
      }
  },[]);

  return (
    <>
      <StatePending
      setcreateShipmentModel = {setcreateShipmentModel}
      allShipmentsdata = {allShipmentsdata}
      />
      </>
    )
};
export default RequestList;*/

import React, { useState, useEffect,useContext } from 'react'
import { TransactionContext } from '../context/TrackingContext'

import {
  Table,
  Form,
  Services,
  Profile,
  TrackFund,
  CompleteShipment,
  StartShipment,
} from '../components/index.js';


const App = () => {
  const {
        getAllTransaction,
        getFund,
  } = useContext(TransactionContext);

  const [createShipmentModel,setcreateShipmentModel] = useState(false);
  const [getModel,setGetModel] = useState(false);

  const [allShipmentsdata,setallShipmentsdata] = useState();

  useEffect(()=>{
    const getCampaingsData = getAllTransaction();
      return async () => {
        const allData = await getCampaingsData;
        setallShipmentsdata(allData);
      }
  },[]);

  return (
    <>
       <TrackFund
          getModel={getModel}
          setGetModel = {setGetModel}
          getFund = {getFund}
          setcreateShipmentModel = {setcreateShipmentModel}
          allShipmentsdata = {allShipmentsdata}
          />
    </>
  )

};
export default App;