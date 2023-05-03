import React, { useContext } from 'react'
import { TransactionContext } from '../context/TrackingContext'
const App = () => {
  const {connectWallet} = useContext(TransactionContext)
  return (
    <button 
              className="flex items-center justify-center gap-x-1 py-2 px-4 text-white fot-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900
              rounded-full md:inline-flex"> Connect Wallet
    </button>
  )
}

export default App

/*import {
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