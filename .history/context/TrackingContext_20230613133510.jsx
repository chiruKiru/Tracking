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
    const central = '0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199'
    const state = '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266'
    const createFund = async (items) => {
        console.log(items);
        const {name,ReqDate,from,amount,Reason,image,feedback,To,file,Id_proof} = items;
        var payer;
        To != "Central" ? payer = state : payer = central
            try {
                const web3Modal = new Web3Modal();
                const connection = await web3Modal.connect();
                const provider = new ethers.providers.Web3Provider(connection);
                const signer = provider.getSigner();
                const contract = fetchContract(signer);
                const createReq = await contract.createFund(
                    payer,
                    name,
                    ReqDate,
                    from,
                    ethers.utils.parseUnits(amount,18),
                    {
                        value: ethers.utils.parseUnits(amount,18)
                    },Reason,
                    image,
                    feedback,To,file,Id_proof
                    );
                await createReq.wait();
                return true
            } catch (error) {
                console.log("Something went wrong",error)
                return false
            }
        };
    
        const getAllTransaction = async () => {
            try {
                const provider = new ethers.providers.JsonRpcProvider();
                const contract = fetchContract(provider);
                const Tranc = await contract.getAllTransactions();
                const allTransaction = Tranc.map((Transaction) => ({
                    name: Transaction.name,
                    ReqDate: Transaction.Req_Date,
                    receiver: Transaction.receiver,
                    amount: Transaction.amount.toNumber(),
                    from:Transaction.from,
                    reason:Transaction.reason,
                    isPaid: Transaction.isPaid,
                    status: Transaction.status,
                    sender: Transaction.sender,
                    To : Transaction.To
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
            const {receiver,index,amount} = complete;
            console.log(amount)
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
                    amount,
                    {
                        value:amount
                    }
                    );
                await transaction.wait();
                console.log(transaction);
                return true
            }
            catch(error){
                console.log('transaction Central',error);
                return false
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
                const fund = await contract.getFund(accounts[0],index * 1);
                console.log(accounts[0])
                const SingleData = {
                    sender: fund[0],
                    receiver: fund[1],
                    name: fund[2],
                    ReqDate: fund[3],
                    from: fund[4],
                    amount: fund[5].toNumber(),
                    reason: fund[6],
                    feedback: fund[7],
                    status: fund[8],
                    isPaid: fund[9],
                };
                console.log(SingleData.status)
                return SingleData;
            }
             catch(error){
                    console.log("no shipment")
            }
        };

        const getFundMain = async (index) => {
            try{
                if(!window.ethereum) return "Install MetaMask";
    
                const accounts = await window.ethereum.request({
                    method: "eth_accounts",
                });
    
                const provider = new ethers.providers.JsonRpcProvider();
                const contract = fetchContract(provider);
                const fund = await contract.getFundmain(accounts[0],index * 1);
                console.log(accounts[0])
                const SingleData = {
                    sender: fund[0],
                    receiver: fund[1],
                    name: fund[2],
                    ReqDate: fund[3],
                    from: fund[4],
                    amount: fund[5].toNumber(),
                    reason: fund[6],
                    feedback: fund[7],
                    status: fund[8],
                    isPaid: fund[9],
                    image: fund[10],
                    Id_proof :fund[11],
                    file : fund[12]
                };
                console.log(SingleData.status)
                return SingleData;
            }
             catch(error){
                    console.log("no shipment")
            }
        };
    
       
        const startFund = async(getProduct) => {
            const {receiver,index} = getProduct;
            console.log(receiver)
    
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
                index * 1,
                central
            );
            shipment.wait();
            return true
            
            } catch (error) {
                console.log("Sorry no shipment")
                return false
            }
        };

        const RejectedFund = async(getProduct,result) => {
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
            const shipment = await contract.RejectFund(
                accounts[0],
                receiver,
                index * 1,
                result,
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
        getFundMain,
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
