import React, { useState, useEffect,useContext } from 'react'
import { TransactionContext } from '../../context/TrackingContext'
import StatePending from './StatePending';



const RequestList = () => {

  const {
        getAllTransaction,
        get
  } = useContext(TransactionContext);

  const [createShipmentModel,setcreateShipmentModel] = useState(false);


  const [allShipmentsdata,setallShipmentsdata] = useState();
  const [getModel,setGetModel] = useState(false);

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
      getModel={getModel}
      setGetModel = {setGetModel}
      getFund = {getFund}
      />
      
      </>
    )
};
export default RequestList;