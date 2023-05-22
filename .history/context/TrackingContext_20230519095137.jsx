import React,{useState, useEffect} from "react";
import Web3Modal from 'web3modal';
import {ethers} from 'ethers';
import '../src/App.css';

import Tracking from './Tracking.json';
const ContractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
const ConractABI = Tracking.abi;
export const TransactionContext= React.createContext();

const fetchContract = (signerOrProvider) => 
    new ethers.Contract(ContractAddress, ConractABI, signerOrProvider);

export const TransactionProvider =({ children })=> {
    const  DaapName= 'Dapp'
    const [currentUser, setCurrentUser] = useState("");

    const createFund = async (items) => {
        console.log(items);
        const {receiver,import { useState } from "react";
        import { create as ipfsHttpClient } from "ipfs-http-client";
        const projectId = "2PPHv7CfM6AjQ29aV1homs8JJ3z"
        const projectSecretKey = "6825e059342937d03df4505a79f0d28f"
        const authorization = "Basic " + btoa(projectId + ":" + projectSecretKey);
        
        export default ({
          createFund,
        }) => {
        
          const [request, setRequest] = useState({
            receiver:"",
            ReqDate: "",
            from:"",
            amount:"",
            image:"",
            feedback:"Na"
          });
        
          const  createItem = async() => {
            try {
              await createFund(shipment);
            } catch (error) {
              console.log("Wrong creating irem")
            }
          };
        
          const [images, setImages] = useState([])
            const ipfs = ipfsHttpClient({
            url: "https://ipfs.infura.io:5001",
            headers: {
              authorization
            }
          })
        
          const onSubmitHandler = async (event) => {
            event.preventDefault();
            console.log(event.target)
            const files = event.target.files;
         
        
            if (!files || files.length === 0) {
              return alert("No files selected");
            }
        
            const file = files[0];
            // upload files
            const result = await ipfs.add(file);
            console.log(result.cid)
            console.log(result.path)
            setImages([
              ...images,
              {
                cid: result.cid,
                path: result.path,
              },
            ]);
            setShipment({ ...shipment, image: result.path})
          };
          return (
            <>
                  <div className="max-w-sm mx-auto py-3 space-y-3 text-center">
                    <h4 className="text-lg font-medium text-gray-800">
                      Track product, Create Shipment
                    </h4>
                    <p className="text-[15px] text-gray-600">
                      The people who are crazy enough to think that they can change the world they are the one who will.
                    </p>
                  <form onSubmit={(e)=> {e.preventDefault()}}>
                    <div className="relative mt-3">
                      <input
                        type='text' placeholder="receiver" className="w-full pl-5 pr-3 py-2 text-gray-500 bg-transparent
                        outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                        onChange={(e)=> setRequest({ ...request, receiver: e.target.value,})}/>
                        </div>
                    <div className="relative mt-3">
                      <input
                        type='date' placeholder="from" className="w-full pl-5 pr-3 py-2 text-gray-500 bg-transparent
                        outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                        onChange={(e)=> setRequest({ ...request, pickupTime: e.target.value,})}/>
                        </div>
                        <div className="relative mt-3">
                      <input
                        type='text' placeholder="ReqDate" className="w-full pl-5 pr-3 py-2 text-gray-500 bg-transparent
                        outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                        onChange={(e)=> setRequest({ ...request, distance: e.target.value,})}/>
                        </div>
                        <div className="relative mt-3">
                      <input
                        type='text' placeholder="amount" className="w-full pl-5 pr-3 py-2 text-gray-500 bg-transparent
                        outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                        onChange={(e)=> setRequest({ ...request, price: e.target.value,})}/>
                        </div>
                        <div className="relative mt-3">
                      {ipfs && (
                        <>
                            <input type="file" name="file" onChange={onSubmitHandler}/>
                        </>
                      )}
                      <div>
                        {images.map((image, index) => (
                          <img
                            alt={`Uploaded #${index + 1}`}
                            src={"https://kiran.infura-ipfs.io/ipfs/" + image.path}
                            style={{ maxWidth: "400px", margin: "15px" }}
                            key={image.cid.toString() + index}
                          />
                        ))}
                  </div>
                  </div>
                  <button onClick={()=> createItem()} className='block w-full mt-3 py-4 font-medium text-sm text-center text-white bg-indigo-600
                  hover:bg-indigo-500 active:bg-indigo-700 rounded-lg ring-offset-2 ring-indigo-600 focus:ring-2'>
                    Create Shipment
                  </button>
                  </form>
                  </div>
                </>
          )
        };,distance,amount,image,feedback} = items;
            try {
                const web3Modal = new Web3Modal();
                const connection = await web3Modal.connect();
                const provider = new ethers.providers.Web3Provider(connection);
                const signer = provider.getSigner();
                const contract = fetchContract(signer);
                const createItem = await contract.createFund(
                    receiver,
                    new Date(pickupTime).getTime(),
                    distance,
                    ethers.utils.parseUnits(price,18),
                    image,
                    feedback
                    );
                await createItem.wait();
                console.log(createItem)
            } catch (error) {
                console.log("Somethong went wrong",error)
            }
        };
    
        const getAllTransaction = async () => {
            const index = 0
            try {
                const provider = new ethers.providers.JsonRpcProvider();
                const contract = fetchContract(provider);
                const shipments = await contract.getAllTransactions();
                const allShipments = shipments.map((shipment) => ({
                    index: index+1,
                    sender: shipment.sender,
                    receiver: shipment.receiver,
                    price: ethers.utils.formatEther(shipment.price.toString()),
                    pickupTime: shipment.pickupTime.toNumber(),
                    deliveryTime: shipment.deliveryTime.toNumber(),
                    distance:shipment.distance.toNumber(),
                    isPaid: shipment.isPaid,
                    status: shipment.status,
                    feedback: shipment.feedback,
                }));
                return allShipments;
            } catch (error) {
                console.log("Error",error);
                
            }
        };
    
        const getFundCount = async () => {
            try {
                if (!window.ethereum) return "Install MetaMask";
                
                const accounts = await window.ethereum.request({
                    method: 'eth_accounts',
                });
                const provider = new ethers.providers.JsonRpcProvider();
                const contract = fetchContract(provider);
                const shipmentscount = await contract.getFundCount(accounts[0]);
                return shipmentscount.toNumber();
                
            } catch (error) {
                console.log(error,"error getting shipment");
            }
        };
    
        const centralFund = async (complete) => {
            console.log(complete);
    
            const {receiver,index,price} = complete;
            try{
                if(!window.ethereum) return "Install MetaMask";
    
                const accounts = await window.ethereum.request({
                    method: "eth_accounts",
                });
                const web3Modal = new Web3Modal();
                const connection = await web3Modal.connect();
                const provider = new ethers.providers.Web3Provider(connection);
                const signer = provider.getSigner();
                const contract = fetchContract(signer);
                const transaction = await contract.centralFund(
                    accounts[0],
                    receiver,
                    index,
                    ethers.utils.parseUnits(price,18),
                    {
                        value: ethers.utils.parseUnits(price,18)
                    }
                    );
                await transaction.wait();
                console.log(transaction);
    
            }
            catch(error){
                console.log('transaction Central',error);
            }
        };
        const getFund = async (index) => {
            try{
                if(!window.ethereum) return "Install MetaMask";
    
                const accounts = await window.ethereum.request({
                    method: "eth_accounts",
                });
    
                const provider = new ethers.providers.JsonRpcProvider();
                const contract = fetchContract(provider);
                const shipment = await contract.getFund(accounts[0],index * 1);
    
                const SingleShipment = {
                    sender: shipment[0],
                    receiver: shipment[1],
                    pickupTime: shipment[2].toNumber(),
                    deliveryTime: shipment[3].toNumber(),
                    distance: shipment[4].toNumber(),
                    price: ethers.utils.formatEther(shipment[5].toString()),
                    image: shipment[6],
                    feedback:shipment[7],
                    status: shipment[8],
                    isPaid: shipment[9],
                };
                console.log(SingleShipment.status)
                return SingleShipment;
            }
             catch(error){
                    console.log("no shipment")
            }
        };
    
       
        const startFund = async(getProduct) => {
            const {receiver,index} = getProduct;
    
            try{
                if(!window.ethereum) return "Install MetaMask";
    
                const accounts = await window.ethereum.request({
                    method: "eth_accounts",
            });   
            
            const web3Modal = new Web3Modal();
            const connection = await web3Modal.connect();
            const provider = new ethers.providers.Web3Provider(connection);
            const signer = provider.getSigner();
            const contract = fetchContract(signer);
            const shipment = await contract.startFund(
                accounts[0],
                receiver,
                index * 1
            );
    
            shipment.wait();
            console.log(shipment)
            } catch (error) {
                console.log("Sorry no shipment")
            }
        };

        const RejectedFund = async(getProduct) => {
            const {receiver,index,feedback} = getProduct;
    
            try{
                if(!window.ethereum) return "Install MetaMask";
    
                const accounts = await window.ethereum.request({
                    method: "eth_accounts",
            });   
            
            const web3Modal = new Web3Modal();
            const connection = await web3Modal.connect();
            const provider = new ethers.providers.Web3Provider(connection);
            const signer = provider.getSigner();
            const contract = fetchContract(signer);
            const shipment = await contract.RejectFund(
                accounts[0],
                receiver,
                index * 1,
                feedback,
            );
    
            shipment.wait();
            console.log(shipment)
            } catch (error) {
                console.log("Sorry no shipment")
            }
        };
    
        const checkIfWalletIsConnected = async () => {
            try {
                if(!window.ethereum) return "Install MetaMask";
    
                const accounts = await window.ethereum.request({
                    method: "eth_accounts",
            });   
    
            if (accounts.length){
                setCurrentUser(accounts[0]);
            } else{
                return "No account";
            }
            } catch (error) {
                return 'not connected;'
            }
        };
    
        const connectWallet = async () => {
            try {
                if(!window.ethereum) return "Install MetaMask"
                const accounts = await window.ethereum.request({
                    method: "eth_requestAccounts",
            });   
            setCurrentUser(accounts[0]);
            } catch (error) {
                return "Something went wrong";
            }
        };
    
    
        useEffect(()=>{
            checkIfWalletIsConnected();
        },[]);
    


    return(
        <TransactionContext.Provider value={{
        RejectedFund,
        connectWallet,
        createFund,
        getAllTransaction,
        centralFund,
        getFund,
        startFund,
        getFundCount,
        DaapName,
        currentUser}}>
            {children}
        </TransactionContext.Provider>
    )

}
