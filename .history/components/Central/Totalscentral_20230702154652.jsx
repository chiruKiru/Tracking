import React, { useState, useEffect,useContext } from 'react'
import { TransactionContext } from '../../context/TrackingContext'

const TotalsCentral = () => {
  const {
    TotalValues,
    currentUser,
    result,
    getBalance
  } = useContext(TransactionContext);

    const [allmaindata,setalldata] = useState([]);
    const [balance, setCurrentbalance] = useState("");
    
    useEffect(()=>{
      const getCampaingsData = TotalValues();
        const getdata =  async() => {
          const allData = await getCampaingsData;
          setalldata(allData);
          const result = await getBalance();
          setCurrentbalance(result.toString())
        }
        getdata()
    },[]);
    console.log(allmaindata?.[4])
  
  return (
    <>
    <p className="text-[15px] text-gray-600">
              The people who are crazy enough to think that they can change the world they are the one who will. 1234
             
             <> CentralApproved : {allmaindata?.[0]}</> 
              <> CentralRejected {allmaindata?.[1]}</> 
              <> TotalRequest  {allmaindata?.[2]}</> 
              <> ToatlRejected  {allmaindata?.[3]}</> 
              <> CentralRequest  {allmaindata?.[4]}</> 
              <> CentralTotal {allmaindata?.[5]}</>
            </p>
    <section className='py-10 pb-14 px-20 justify-center'>
    <div className="mt-10px flex items-center justify-center">
    <ul className='grid gap-8 sm:grid-cols-2 md:grid-cols-3'>
    <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/docs/images/blog/image-4.jpg" alt=""/>
    <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{balance == undefined ? ("No wallet connected"): (balance.slice(0,4))}. {balance.slice(5,8))}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Account Balance </p>
    </div>
    </a>
    <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/docs/images/blog/image-4.jpg" alt=""/>
    <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{allmaindata?.[5]} </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><> Total Transaction Done Till Date </> </p>
        
    </div>
    </a>
    <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/docs/images/blog/image-4.jpg" alt=""/>
    <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{allmaindata?.[0]}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Total Approved </p>
    </div>
    </a>
    </ul>
    </div>
    </section>


    </>
  );
};

export default TotalsCentral;