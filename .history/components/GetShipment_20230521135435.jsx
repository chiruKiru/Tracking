import { useState } from "react";

export default ({getModel, setGetModel, getFund}) => {
  const [index , setIndex] = useState(0);
  const [singleShipmentData, setSingleShipmentData] = useState();

  const getShipmentData = async () => {
    const getData = await getFund(index);
    setSingleShipmentData(getData);
    console.log(getData)
  };
  console.log(singleShipmentData);

  const converTime = (time) =>{
    const newTime = new Date(time);
    const dateTime = new Intl.DateTimeFormat("en-US",{
      year:'numeric',
      month:'2-digit',
      day:'2-digit',
    }).format(newTime);
    return dateTime;
  };

  return getModel ?(
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div className="fixed inset-0 w-full h-full bg-black opacity-40" onClick={()=> setGetModel(false)}>
        </div>
        <div className="flex items-center min-h-screen px-4 py-8">
          <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
          <div className="flex justify-end">
            <button className="p-2 text-gray-400 rounded-md hover:bg-gray-100"
            onClick={()=> setGetModel(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 mx-auto"
                viewBox="0 0 20 20"
                fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
            </button>
          </div>
          <div className="max-w-sm mx-auto py-3 space-y-3 text-center">
            <h4 className="text-lg font-medium text-gray-800">
              Product Tracking details
            </h4>
            <p className="text-[15px] text-gray-600">
              The people who are crazy enough to think that they can change the world they are the one who will.
            </p>
          <form onSubmit={(e)=> e.preventDefault()}>
            <div className="relative mt-3">
              <input
                type='number' placeholder="Id" className="w-full pl-5 pr-3 py-2 text-gray-500 bg-transparent
                outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                onChange={(e)=> setIndex(e.target.value)}/>
                </div>
          <button onClick={()=> getShipmentData()} className='block w-full mt-3 py-4 font-medium text-sm text-center text-white bg-indigo-600
          hover:bg-indigo-500 active:bg-indigo-700 rounded-lg ring-offset-2 ring-indigo-600 focus:ring-2'>
            Get Details
          </button>
          </form>

          {singleShipmentData == undefined ?(
            ""
          ):singleShipmentData.status == 3 ? (
            <div className="text-left">
              <p> Your Request has been Rejected Due to </br></p>
              <p>Request Date: {singleShipmentData.ReqDate}</p>
              <p>From: {singleShipmentData.from}</p>
              <p>status: {singleShipmentData.status}</p>
              <p>Price: {singleShipmentData.amount}</p>
              <p>Paid:{''} {singleShipmentData.isPaid ? 'Complete' : "Not Complete"}</p>

              </div>
            ) :(
              <div className="text-left">
              <p>Sender: {singleShipmentData.sender.slice(0,25)}...</p>
             <p>Receiver: {singleShipmentData.receiver.slice(0,25)}...</p>
             <p>PickupTime: {singleShipmentData.ReqDate}</p>
             <p>Distance: {singleShipmentData.from}</p>
             <p> status: {singleShipmentData.status}</p>
             <p>Price: {singleShipmentData.amount}</p>
             <p> Paid:{''} {singleShipmentData.isPaid ? 'Complete' : "Not Complete"}</p>
             </div>
            ) 
          }
          </div>
        </div>
        </div>
      </div>
  ): ("")
};