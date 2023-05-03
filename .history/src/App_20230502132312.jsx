import React, { useContext } from 'react'
import { TransactionContext } from '../context/TrackingContext'

const {connectWallet} = useContext(TransactionContext)
import {
  Table,
  Form,
  Services,
  Profile,
  GetShipment,
  CompleteShipment,
  StartShipment,
} from '../Components/index.js';

import { TrackingContext } from "../Context/TrackingContext";

const App = () => {
  const {
        currentUser,
        createShipment,
        getAllShipment,
        completeShipment,
        getShipment,
        startShipment,
        getShipmentsCount
  } = useContext(TrackingContext);

  const [createShipmentModel,setcreateShipmentModel] = useState(false);
  const [openProfile,setOpenProfile] = useState(false);
  const [startModel,setStartModel] = useState(false);
  const [completeModel,setCompleteModel] = useState(false);
  const [getModel,setGetModel] = useState(false);

  const [allShipmentsdata,setallShipmentsdata] = useState();

  useEffect(()=>{
    const getCampaingsData = getAllShipment;
      return async () => {
        const allData = await getCampaingsData;
        setallShipmentsdata(allData);
      }
  },[]);

  return (
    <>
      <Services
      setOpenProfile = {setOpenProfile}
      setCompleteModel = {setCompleteModel}
      setGetModel = {setGetModel}
      setStartModel = {setStartModel}
      
      />
      <Table
      setcreateShipmentModel = {setcreateShipmentModel}
      allShipmentsdata = {allShipmentsdata}
      />

      <Form
      createShipmentModel = {createShipmentModel}
      setcreateShipmentModel ={setcreateShipmentModel}

      />
      <Profile
        openProfile={openProfile}
        setOpenProfile = {setOpenProfile}
        currentUser={currentUser}
        getShipmentsCount={getShipmentsCount}
        />

        <CompleteShipment
        completeModel={completeModel}
        setCompleteModel = {setCompleteModel}
        completeShipment = {completeShipment}
        />

        <GetShipment
          getModel={getModel}
          setGetModel = {setGetModel}
          getShipment = {getShipment}
          />

        <StartShipment
          startModel = {startModel}
          setStartModel = {setGetModel}
          startShipment = {startShipment}
          />
    </>
  )

};
export default App;