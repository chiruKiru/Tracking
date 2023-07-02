import React, { useState, useEffect,useContext } from 'react'
import { TransactionContext } from '../../context/TrackingContext'

const TotalsCentral = () => {
  const {
    TotalValues
  } = useContext(TransactionContext);

    const [alldata,setalldata] = useState();

    useEffect(()=>{
      const getCampaingsData = TotalValues();
        const getdata =  async() => {
          const allData = await getCampaingsData;
          setalldata(allData);
        }
        getdata()
    },[]);
  
    console.log(typealldata)
  return (
    <>
    <section className='py-10 pb-14 px-20 justify-center'>
    <div className="mt-10px flex items-center justify-center">
    <ul className='grid gap-8 sm:grid-cols-2 md:grid-cols-3'>
    <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/docs/images/blog/image-4.jpg" alt=""/>
    <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Total Transaction Done Till Date </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><> hi : </> </p>
        
    </div>
    </a>
    <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/docs/images/blog/image-4.jpg" alt=""/>
    <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
    </div>
    </a>
    </ul>
    </div>
    </section>


    </>
  );
};

export default TotalsCentral;