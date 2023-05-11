import React,{useState, useEffect} from "react";
import Web3Modal from 'web3modal';
import {ethers} from 'ethers';

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
        const {receiver,pickupTime,distance,price} = items;
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
    
        const completeFund = async (completeShip) => {
            console.log(completeShip);
    
            const {receiver , index} = completeShip;
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
                const transaction = await contract.completeFund(
                    accounts[0],
                    receiver,
                    index,
                    {
                        gasLimit: 300000,
    
                    }
                );
                transaction.wait();
                console.log(transaction);
    
            }
            catch(error){
                console.log('transaction completShipment',error);
            }
        };
        const getFund = async (index) => {
            console.log(index * 1);
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
                    status: shipment[6],
                    isPaid: shipment[7],
                };
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
        connectWallet,
        createFund,
        getAllTransaction,
        completeFund,
        getFund,
        startFund,
        getFundCount,
        DaapName,
        currentUser}}>
            {children}
        </TransactionContext.Provider>
    )

}
