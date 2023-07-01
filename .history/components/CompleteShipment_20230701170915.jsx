import { useState,useEffect } from "react";

export default ({completeModel, setCompleteModel, completeFund,TotalValues}) => {
  const [completeShip , setCompleteShip] = useState({
    receiver: "",
    index: "",
  });

  const [alldata,setalldata] = useState();

  useEffect(()=>{
    const getCampaingsData = TotalValues();
      const getdata =  async() => {
        const allData = await getCampaingsData;
        setalldata(allData);
      }
      getdata()
  },[]);

  console.log(alldata)

  const changeStatus = () => {
    completeFund(completeShip);
  };

  return completeModel ?(
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div className="fixed inset-0 w-full h-full bg-black opacity-40" onClick={()=> setCompleteModel(false)}>
        </div>
        <div className="flex items-center min-h-screen px-4 py-8">
          <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
          <div className="flex justify-end">
            <button className="p-2 text-gray-400 rounded-md hover:bg-gray-100"
            onClick={()=> setCompleteModel(false)}>
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
              Starthipment
            </h4>
            <p className="text-[15px] text-gray-600">
              The people who are crazy enough to think that they can change the world they are the one who will. 1234
             
            <> hi : {alldata[0].toNumber()} </>
             <> CentralApproved : {alldata[0].toNumber()}</> 
              <>  {CentralRejected = alldata[1].toNumber()}</> 
              <>   {TotalRequest = alldata[2].toNumber()}</> 
              <>   {ToatlRejected = alldata[3].toNumber()}</> 
              <>   {CentralRequest = alldata[4].toNumber()}</> 
              <>  {CentralTotal = alldata[5].toNumber()}</>
            </p>
        
          <form onSubmit={(e)=> e.preventDefault()}>
            <div className="relative mt-3">
              <input
                type='text' placeholder="receiver" className="w-full pl-5 pr-3 py-2 text-gray-500 bg-transparent
                outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                onChange={(e)=> setCompleteShip({
                  ...completeShip,
                  receiver: e.target.value,
                })}/>
                </div>
                <div className="relative mt-3">
              <input
                type='number' placeholder="Id" className="w-full pl-5 pr-3 py-2 text-gray-500 bg-transparent
                outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                onChange={(e)=> setCompleteShip({
                  ...completeShip,
                  index: e.target.value,
                })}/>
                </div>
          <button onClick={()=> changeStatus()} className='block w-full mt-3 py-4 font-medium text-sm text-center text-white bg-indigo-600
          hover:bg-indigo-500 active:bg-indigo-700 rounded-lg ring-offset-2 ring-indigo-600 focus:ring-2'>
            Start Shipment
          </button>
          </form>
          </div>
        </div>
        </div>
      </div>
  ): ("")
};