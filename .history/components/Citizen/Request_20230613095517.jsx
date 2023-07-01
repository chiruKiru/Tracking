import { useState, useEffect } from "react";
import Swal from 'sweetalert2';
import { create as ipfsHttpClient } from "ipfs-http-client";
const projectId = "2PPHv7CfM6AjQ29aV1homs8JJ3z"
const projectSecretKey = "6825e059342937d03df4505a79f0d28f"
const authorization = "Basic " + btoa(projectId + ":" + projectSecretKey);


export default ({
  createFund,
}) => {
  const [request, setRequest] = useState({
    name:"",
    sender:"",
    ReqDate: "",
    from:"Citizen",
    amount:"",
    Reason:"",
    image:"",
    feedback:"Na",
    To: "",
    file:"",
    Id_proof:""
  });
  console.log(request)
  useEffect(() => {
    const Today = () => {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    setRequest({...request, ReqDate : date + '/' + month + '/' + year });
    }
    Today();
  },[])

  const mass = "w-full pl-5 pr-3 py-3 text-black-500 bg-transparent border-slate-400 outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
  const err = "w-full pl-5 pr-3 py-2 border-2 border-rose-600 rounded-lg ..."
  const [success, setSuccess] = useState(false)
  const  createItem = async() => {
    try {
      const val= await createFund(request);
      setSuccess(val)
      showAlert(val)
    } catch (error) {
      console.log("Wrong creating item")
    }
  };
  
  const showAlert = (val) => {
    val? (
    Swal.fire({
        title: "Success",
        text: "successful",
        icon: "success",
        confirmButtonText: "OK",
      }).then(function () {
          window.location.href = "/Home";
        })
    ):(Swal.fire({
      title: "Failed",
      text: "Enter ProperValue",
      icon: "failed",
      confirmButtonText: "OK",
    }).then(function () {
        window.location.reload(true);
      }))

}

  const [images, setImages] = useState([])
    const ipfs = ipfsHttpClient({
    url: "https://ipfs.infura.io:5001",
    headers: {
      authorization
    }
  });
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    console.log(event.target)
    const files = event.target.files;
 

    if (!files || files.length === 0) {
      return alert("No files selected");
    }

    const file = files[0];
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
    request.Id_proof == ""? setRequest({ ...request, Id_proof: result.path}):
    request.image == ""? setRequest({ ...request, image: result.path}):
    setRequest({ ...request, file: result.path})
  };

  return (
          <div className="max-w mx-auto w-5/6 py-3 space-y-3 text-center">
            <h4 className="text-lg font-medium text-gray-800">
              Request Fund, Create New Request
            </h4>
            <p className="text-[15px] text-gray-600">
              Wait Till Each Documents upload and provide proper info else it will be.
            </p>
          <form id='Data'onSubmit={(e)=> {e.preventDefault()}}>
            <div className="relative mt-5">
              <input
                type='text' placeholder="name" className={mass}
                onChange={(e)=> setRequest({ ...request, name: e.target.value,})}/>
                </div>
            <div className="relative mt-5">
            <input id="q" type="text" name="q" className={mass} value={request.ReqDate} onChange={()=>""}/>
            </div>
                <div className="relative mt-5">
              <input
                type='text' id='amo' placeholder="amount in INR" className={mass}
                onChange={(e)=> setRequest({ ...request, amount: e.target.value,})}/>
                </div>
                <div className="relative mt-5">
                <select name="request" id="req" className={`${request.Reason !='0' ? mass : err}`} onChange={(e)=> setRequest({ ...request, Reason: e.target.value})}>
                  <option value="0">Select Disaster Type</option>
                  <option value="Floods">Floods</option>
                  <option value="Fire">Fire</option>
                  <option value="Animal Damage">Animal Damage</option>
                </select>
                </div>
                <div className="relative mt-5">
                <select name="request" id="req" className={`${request.To !='0' ? mass : err}`} onChange={(e)=>{setRequest({ ...request, To: e.target.value}),Sender()}}>
                  <option value="0">Select Request Type</option>
                  <option value="State and central">State and central</option>
                  <option value="Central">Central</option>
                </select>
                </div>
                <div className="relative mt-5">
                <div className="relative mt-5">
            <p align='left'> Upload your Id proof </p>
              {ipfs && ( 
                    <input type="file" className={mass} name="image" onChange={onSubmitHandler}/>
              )}
                {request.Id_proof != '' ?(
                  <a href={"https://kiran.infura-ipfs.io/ipfs/"+request.Id_proof} target="_blank">
                  <img 
                    src = '../../Images/success.png'
                    alt = 'Hello'
                    style={{ maxWidth: "40px", margin: "15px" }}
                    />
                    <p align='left'> click to view </p>
                    </a>
                ):('')
                } 
          </div>
                <p align='left'> Upload a Image of disater </p>
              {ipfs && ( 
                    <input type="file" className={mass} name="image" onChange={onSubmitHandler}/>
              )}
                {request.image != '' ?(
                  <a href={"https://kiran.infura-ipfs.io/ipfs/"+request.image} target="_blank">
                  <img 
                    src = '../../Images/success.png'
                    alt = 'Hello'
                    style={{ maxWidth: "40px", margin: "15px" }}
                    />
                    <p align='left'> click to view </p>
                    </a>
                ):('')
                } 
          </div>
          <div className="relative mt-5">
          <p align='left'> Upload a Govt verified file </p>
              {ipfs && ( 
                    <input type="file" className={mass} name="image" onChange={onSubmitHandler}/>
              )}
                {request.file != '' ?(
                  <a href={"https://kiran.infura-ipfs.io/ipfs/"+request.file} target="_blank">
                  <img 
                    src = '../../Images/success.png'
                    alt = 'Hello'
                    style={{ maxWidth: "40px", margin: "15px" }}
                    />
                    <p align='left'> click to view </p>
                    </a>
                ):('')
                } 
          </div>
          <div className="relative mt-5">
          <button onClick={createItem} className='bg-indigo-900 text-white hover:bg-blue-400 font-bold py-2 px-4 mt-3 rounded items-center'>
            Request Funds
          </button>
          </div>
          </form> 

          </div>
  )
};