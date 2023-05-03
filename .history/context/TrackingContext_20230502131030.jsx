import React, {useEffect, useState} from 'react';



export const TransactionContext= React.createContext();

if(typeof window.ethereum == 'undefined'){
    alert("Install Metamask!");
}

const { ethereum }= window;

window.ethereum;


export const TransactionProvider =({ children })=> {

    const [currentAccount, setCurrentAccount] = useState("");

    const checkIfWalletIsConnected = async ()=> {
        try {
            if(!ethereum) return alert("Please install Metamask");
            const accounts= await ethereum.request({method: 'eth_accounts'});
            if(accounts.length){
                setCurrentAccount(accounts[0]);
            }
            else{
                console.log("No accounts found");
            }
        } catch (error) {
            console.log(error);
            throw new Error("No Ethereum object");  
        }
    }

    const connectWallet = async () => {
        
        try {
            console.log("h");
            if(!ethereum) return alert("Please install Metamask");
            
            const accounts= await ethereum.request({method: 'eth_requestAccounts'});
            setCurrentAccount(accounts[0]);
            console.log(currentAccount);
        } catch (error) {
            console.log(error);

            throw new Error("No Ethereum object");
        }
    }

 
    useEffect(()=>{
        checkIfWalletIsConnected();
        //listenAccount();
    },[]);


    return(
        <TransactionContext.Provider value={{connectWallet}}>
            {children}
        </TransactionContext.Provider>
    )

}
