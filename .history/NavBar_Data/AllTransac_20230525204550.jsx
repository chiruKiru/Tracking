import React, { useState, useEffect,useContext } from 'react'
import { TransactionContext } from '../context/TrackingContext'
import { Table,Form } from '../components/index.js';



const AllTransac = () => {
  const {
        getAllTransaction,
  } = useContext(TransactionContext);

  const [alldata,setalldata] = useState();

  useEffect(()=>{
    const getData = getAllTransaction();
      const getdata =  async() => {
        const allData = await getData;
        setalldata(allData);
      }
      getdata()
  },[]);
  return (
    <>
      <Table
      alldata = {alldata}
      />
      </>
    )
};
export default AllTransac;