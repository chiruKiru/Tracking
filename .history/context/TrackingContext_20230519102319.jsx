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
        const {receiver,ReqDate,from,amount,image,feedback} = items;
            try {
                const web3Modal = new Web3Modal();
                const connection = await web3Modal.connect();
                const provider = new ethers.providers.Web3Provider(connection);
                const signer = provider.getSigner();
                const contract = fetchContract(signer);
                const createReq = await contract.createFund(
                    receiver,
                    new Date(ReqDate).getTime(),
                    from,
                    ethers.utils.parseUnits(amount,18),
                    image,
                    feedback
                    );
                await createReq.wait();
                console.log(createReq)
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
                const allTransaction = shipments.map((shipment) => ({
                    index: index+1,
                    sender: Transaction.sender,
                    receiver: allTransaction.receiver,
                    price: ethers.utils.formatEther(allTransaction.price.toString()),
                    pickupTime: allTransaction.pickupTime.toNumber(),
                    deliveryTime: allTransaction.deliveryTime.toNumber(),
                    distance:allTransaction.distance.toNumber(),
                    isPaid: allTransaction.isPaid,
                    status: allTransaction.status,
                    feedback: allTransaction.feedback,
                }));
                return allTransaction;
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
                const Fundscount = await contract.getFundCount(accounts[0]);
                return Fundscount.toNumber();
                
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
