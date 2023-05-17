import { useState } from "react";

export default ({getModel, setGetModel, getFund,allShipmentsdata,startFund}) => {

  const [rejectfeedback, setrejectfeedback] = useState({
    receiver:"",
    index: index,
    feedback:""
  });

  const [index , setIndex] = useState(0);
  const [getProduct , setGetProduct] = useState({
    receiver: "",
    index:""
  });
  const {receiver} = getProduct
    console.log(receiver)
  const startShipping = () => {
    startFund(getProduct);
  };
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
  const [rejectFund, setRejectFund] = useState(false)

  return (
    getModel ?(
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
          {singleShipmentData == undefined ?(
            ""
          ): (
            <div className="text-left">
              <p>Sender: {singleShipmentData.sender.slice(0,25)}...</p>
              <p>Receiver: {singleShipmentData.receiver.slice(0,25)}...</p>
              <p>PickupTime: {singleShipmentData.pickupTime}</p>
              <p>DeliveryTime: {singleShipmentData.deliveryTime}</p>
              <p>Distance: {singleShipmentData.distance}</p>
              <p>Price: {singleShipmentData.price}</p>
              <div>
            <img
              alt='hello'
              src={"https://kiran.infura-ipfs.io/ipfs/" + singleShipmentData.image}
              style={{ maxWidth: "400px", margin: "15px" }}
            />
            </div>
              <p> Paid:{''} {singleShipmentData.isPaid ? 'Complete' : "Not Complete"}</p>
              </div>
          )
          }
          <button onClick={()=> startShipping()} className='block w-full mt-3 py-4 font-medium text-sm text-center text-white bg-indigo-600
          hover:bg-indigo-500 active:bg-indigo-700 rounded-lg ring-offset-2 ring-indigo-600 focus:ring-2'>
            APPROVE
          </button>
          <button onClick={()=> {setRejectFund(true); setGetModel(false);}} className='block w-full mt-3 py-4 font-medium text-sm text-center text-white bg-red-600
          hover:bg-red-500 active:bg-red-700 rounded-lg ring-offset-2 ring-red-600 focus:ring-2'>
            REJECT
          </button>
          </div>
        </div>
        </div>
      </div>
  ): rejectFund ?(
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div className="fixed inset-0 w-full h-full bg-black opacity-40" onClick={()=> setRejectFund(false)}>
        </div>
        <div className="flex items-center min-h-screen px-4 py-8">
          <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
          <div className="flex justify-end">
            <button className="p-2 text-gray-400 rounded-md hover:bg-gray-100"
            onClick={()=> setRejectFund(false)}>
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
                type='text' placeholder="feedback" className="w-full pl-5 pr-3 py-2 text-gray-500 bg-transparent
                outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                onChange={(e)=> setRejectFund(e.target.value)}/>
                </div>

            </form>
        </div>
        </div>
      </div>
      </div>
  ):  ( <div className="mx-w-screen-xl mx-auto px-4 md:px-8">
  <div className="items-start justify-between md:flex">
    <div className="max-w-lg">
      <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
        Pending List
      </h3>
      <p>
        Waiting for approval
      </p>
    </div>
  </div>
  <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
    <table className="w-full table-auto text-sm text-left">
      <thead className="bg-gray-50 text-gray-600 font-medium border-b">
        <tr>
          <th className="py-3 px-6"> ID </th>
          <th className="py-3 px-6"> Sender </th>
          <th className="py-3 px-6"> Receiver </th>
          <th className="py-3 px-6"> PickupTime </th>
          <th className="py-3 px-6"> Distance </th>
          <th className="py-3 px-6"> Price </th>
          <th className="py-3 px-6"> Delivery </th>
          <th className="py-3 px-6"> Paid </th>
          <th className="py-3 px-6"> Status </th>
        </tr>
      </thead>
      {<tbody className="text-gray-600 divide-y">
        {allShipmentsdata?.map((shipment, idx) => (
          shipment.status == 0 ? (
          <tr key={idx}>
            <td className="px-6 py-4 whitespace-nowrap">
              {idx}
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              {shipment.sender.slice(0,15)}...
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              {shipment.receiver.slice(0,15)}...
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              {converTime(shipment.pickupTime)}
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              {(shipment.distance)} Km
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              {shipment.price}
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              {shipment.deliveryTime}
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              {shipment.isPaid ? 'complete' : 'not complete'}
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              {shipment.status == 0 ? 'Pending' : shipment.status == 1 ? 'In Transit' : 'Delivered'}
            </td>
            <td>
            <button className="flex items-center justify-center gap-x-1 py-2 px-4 text-white fot-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900
            rounded-full md:inline-flex" onClick={() =>{setGetModel(true); setIndex(idx); getShipmentData(); setGetProduct({
              ...getProduct,
              receiver:shipment.receiver,
              index:idx
            }); setRejectFund({...setRe({

            })})}}>
             View
            </button>
            
            </td>
          </tr>
        ):''))}
      </tbody>
        }
    </table>
  </div>
</div>
  )
)
};