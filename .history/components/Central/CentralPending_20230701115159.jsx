import { useState } from "react";
import Swal from 'sweetalert2';

export default ({getModel,setGetModel,alldata,RejectedFund,centralFund,getFundMain,currentUser}) => {

    const [completePay , setCompletePay] = useState({
        receiver: "",
        index: "",
        amount: ""
      });

      const final = async() => {
        const val = await centralFund(completePay)
        showAlert(val)
      }


  const [getProduct , setGetProduct] = useState({
    receiver: "",
    index:""
  });

  const reject = () => {
    Swal.fire({
      title: "Feedback",
      text: "Give Feedback:",
      input: 'text',       
  }).then((result) => {
      if (result.value) {
        RejectedFund(getProduct,result)
      }
  });
  }

  
  const central = 0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199
  const [singleData, setSingleData] = useState();

  const getData = async (idx) => {
    const getData = await getFundMain(idx);
    setSingleData(getData);
    console.log(currentUser)
    if (currentUser != central){
      showAlertFailed(true)
    }else
    getData? setGetModel(true) : showAlertFailed(true)
  };

  const showAlertFailed = (val) => {
    val ?
    Swal.fire({
        title: "Failed",
        text: "Only Central wallet can access \n connect to central wallet",
        icon: "error",
        confirmButtonText: "OK",
      }).then(function () {
        window.location.reload(true);
      }):('')
  }

  const showAlert = (val) => {
    val ?
    Swal.fire({
        title: "Success",
        text: "successful",
        icon: "success",
        confirmButtonText: "OK",
      }).then(function () {
        window.location.reload(true);
      }):('')
  }

  return (
    getModel ?(
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div className="fixed inset-0 w-full h-full bg-black opacity-40" onClick={()=> setGetModel(false)}>
        </div>
        <div className="flex items-center min-h-screen px-4 py-8">
          <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
          <div className="flex justify-end">
            <button className="p-2 text-gray-400 rounded-md hover:bg-gray-100"
            onClick={()=> {setGetModel(false)}}>
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
              Request details
            </h4>
            <p className="text-[15px] text-gray-600">
              The people who are crazy enough to think that they can change the world they are the one who will.
            </p>
          {singleData == undefined ?(
            ""
          ): (
            <div className="text-left">
              <p>name: {singleData.name}</p>
              <p>Receiver: {singleData.receiver.slice(0,25)}...</p>
              <p>Requested Date: {singleData.ReqDate}</p>
              <p>From: {singleData.from}</p>
              <p>Requested Amount: {singleData.amount}</p>
              <div className=" mt-5">
                <p> Image of Disaster</p>
            {singleData.image != '' ?(
                  <a href={"https://kiran.infura-ipfs.io/ipfs/"+singleData.image} target="_blank">
                  <img 
                    src = '../../Images/success.png'
                    alt = 'Hello'
                    style={{ maxWidth: "40px", margin: "15px" }}
                    />
                    <p align='left'> click to view </p>
                    </a>
                ):('')
            }
            </div>
            <div className=" mt-5">
                <p> Govt verified Document</p>
            {singleData.file != '' ?(
                  <a href={"https://kiran.infura-ipfs.io/ipfs/"+singleData.file} target="_blank">
                  <img 
                    src = '../../Images/success.png'
                    alt = 'Hello'
                    style={{ maxWidth: "40px", margin: "15px" }}
                    />
                    <p align='left'> click to view </p>
                    </a>
                ):('')
            }
            </div>
            <div className=" mt-5">
                <p> Id Proof of Requester</p>
            {singleData.Id_proof != '' ?(
                  <a href={"https://kiran.infura-ipfs.io/ipfs/"+singleData.Id_proof} target="_blank">
                  <img 
                    src = '../../Images/success.png'
                    alt = 'Hello'
                    style={{ maxWidth: "40px", margin: "15px" }}
                    />
                    <p align='left'> click to view </p>
                    </a>
                ):('')
            }
            </div>
              <p> Paid:{''} {singleData.isPaid ? 'Complete' : "Not Complete"}</p>
              </div>
          )
          }
          <button onClick={()=> final()} className='block w-full mt-3 py-4 font-medium text-sm text-center text-white bg-indigo-600
          hover:bg-indigo-500 active:bg-indigo-700 rounded-lg ring-offset-2 ring-indigo-600 focus:ring-2'>
            PAY
          </button>
          <button onClick={()=> {reject(); setGetModel(false);}} className='block w-full mt-3 py-4 font-medium text-sm text-center text-white bg-red-600
          hover:bg-red-500 active:bg-red-700 rounded-lg ring-offset-2 ring-red-600 focus:ring-2'>
            REJECT
          </button>
          </div>
          
        </div>
        </div>
      </div>
  ): ( <div className="mx-w-screen-xl mx-auto px-4 md:px-8">
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
              <th className="py-3 px-6"> name </th>
              <th className="py-3 px-6"> sender </th>
              <th className="py-3 px-6"> Receiver </th>
              <th className="py-3 px-6"> From </th>
              <th className="py-3 px-6"> Requested Date </th>
              <th className="py-3 px-6"> Reason </th>
              <th className="py-3 px-6"> Req Amount </th>
              <th className="py-3 px-6"> Payment </th>
              <th className="py-3 px-6"> Status </th>
        </tr>
      </thead>
      {<tbody className="text-gray-600 divide-y">
        {alldata?.map((fund, idx) => (
          fund.To == "Central"  && fund.status < 2 ?(
              <tr key={idx}>
                <td className="px-6 py-4 whitespace-nowrap">
                  {idx}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {fund.name}
                </td>
                <td align="center" className="px-6 py-4 whitespace-nowrap">
                  {fund.sender.slice(0.15)}...
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {fund.receiver.slice(0,15)}...
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {fund.from}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {fund.ReqDate}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {fund.reason}
                </td>
                <td align="center" className="px-6 py-4 whitespace-nowrap">
                  {fund.amount} ₹
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                {fund.isPaid ? 'complete' : 'not complete'}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {fund.status == 0 ? 'Pending' : fund.status == 1 ? 'STATE APPROVED' : 'CENTRAL'}
                </td>
            <td>
            <button className="flex items-center justify-center gap-x-1 py-2 px-4 text-white fot-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900
            rounded-full md:inline-flex" onClick={() =>{ getData(idx); setCompletePay(
              {...completePay,
                receiver:fund.receiver,
                index:idx,
                amount:fund.amount
            })
            }}>
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