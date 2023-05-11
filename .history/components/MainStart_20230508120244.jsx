import { useState } from "react";
import {Str1} from '../components/index'

export default ({startModel, setStartModel, startFund}) => {
  const [getProduct , setGetProduct] = useState({
    receiver: "",
    index: "",
  });

  const startShipping = () => {
    startFund(getProduct);
  };

  return (
          <div className="max-w-sm mx-auto py-3 space-y-3 text-center">
            <h4 className="text-lg font-medium text-gray-800">
              Starthipment
            </h4>
            <p className="text-[15px] text-gray-600">
              The people who are crazy enough to think that they can change the world they are the one who will.
            </p>
          <form onSubmit={(e)=> e.preventDefault()}>
            <div className="relative mt-3">
              <input
                type='text' placeholder="receiver" className="w-full pl-5 pr-3 py-2 text-gray-500 bg-transparent
                outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                onChange={(e)=> setGetProduct({
                  ...getProduct,
                  receiver: e.target.value,
                })}/>
                </div>
                <div className="relative mt-3">
              <input
                type='number' placeholder="Id" className="w-full pl-5 pr-3 py-2 text-gray-500 bg-transparent
                outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                onChange={(e)=> setGetProduct({
                  ...getProduct,
                  index: e.target.value,
                })}/>
                </div>
          <button onClick={()=> startShipping()} className='block w-full mt-3 py-4 font-medium text-sm text-center text-white bg-indigo-600
          hover:bg-indigo-500 active:bg-indigo-700 rounded-lg ring-offset-2 ring-indigo-600 focus:ring-2'>
            state Approve
          </button>
          <button className='block w-full mt-3 py-4 font-medium text-sm text-center text-white bg-indigo-600
          hover:bg-indigo-500 active:bg-indigo-700 rounded-lg ring-offset-2 ring-indigo-600 focus:ring-2'>
            Reject
          </button>
          </form>
          </div>
  )
};