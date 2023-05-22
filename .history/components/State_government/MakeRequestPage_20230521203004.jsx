import { useState } from "react";
import Alert from 'react-bootstrap/Alert';
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
  const [success, setSuccess] = useState(false)
  const  createItem = async() => {
    try {
      const val= await createFund(request);
      setSuccess(val)
      setip(!val)
    } catch (error) {
      console.log("Wrong creating item")
    }
  };
  const [ip,setip] = useState(true)
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
    setRequest({ ...request, image: result.path})
  };
  return success ?(
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div className="fixed inset-0 w-full h-full bg-black opacity-40" onClick={()=> setRejectFund(false)}>
        </div>
        <div className="flex items-center min-h-screen px-4 py-8">
          <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
          <div className="flex justify-end">
            <button className="p-2 text-gray-400 rounded-md hover:bg-gray-100"
            onClick={()=> setRejectFund(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 mx-auto"
                viewBox="0 0 20 20"
                fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
            </button>
          </div>
          <div className="max-w-sm mx-auto py-3 space-y-3 text-center">
            <h4 className="text-lg font-medium text-gray-800">
              Product Tracking details
            </h4>
            <p className="text-[15px] text-gray-600">
              The people who are crazy enough to think that they can change the world they are the one who will.
            </p>
            <form onSubmit={(e)=> e.preventDefault()}>
            <div className="relative mt-3">
              <input
                type='text' placeholder="feedback" className="w-full pl-5 pr-3 py-2 text-gray-500 bg-transparent
                outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                onChange={(e)=> setrejectfeedback({
                  ...rejectfeedback,
                  feedback: e.target.value
                })}/>
                </div>
            </form>
            <button onClick={()=>reject()} className="flex items-center justify-center gap-x-1 py-2 px-4 text-white fot-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900
            rounded-full md:inline-flex">
             OK
            </button>
        </div>
        </div>
      </div>
      </div>
    ):(
    <>
          <div className="max-w-sm mx-auto py-3 space-y-3 text-center">
            <h4 className="text-lg font-medium text-gray-800">
              Track product, Create Shipment
            </h4>
            <p className="text-[15px] text-gray-600">
              The people who are crazy enough to think that they can change the world they are the one who will.
            </p>
          <form id='Data'onSubmit={(e)=> {e.preventDefault()}}>
            <div className="relative mt-3">
              <input
                type='text' placeholder="receiver" className="w-full pl-5 pr-3 py-2 text-gray-500 bg-transparent
                outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                onChange={(e)=> setRequest({ ...request, receiver: e.target.value,})}/>
                </div>
            <div className="relative mt-3">
              <input
                type='date' placeholder="ReqDate" className="w-full pl-5 pr-3 py-2 text-gray-500 bg-transparent
                outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                onChange={(e)=> setRequest({ ...request, ReqDate : e.target.value,})}/>
                </div>
                <div className="relative mt-3">
              <input
                type='text' placeholder="from" className="w-full pl-5 pr-3 py-2 text-gray-500 bg-transparent
                outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                onChange={(e)=> setRequest({ ...request, from: e.target.value,})}/>
                </div>
                <div className="relative mt-3">
              <input
                type='text' placeholder="amount" className="w-full pl-5 pr-3 py-2 text-gray-500 bg-transparent
                outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                onChange={(e)=> setRequest({ ...request, amount: e.target.value,})}/>
                </div>
                <div className="relative mt-3">
              {ipfs && (
                    <input type="file" name="file" onChange={onSubmitHandler}/>
              )}
                {ip&&images.map((image, index) => (
                  <img
                    alt={`Uploaded #${index + 1}`}
                    src={"https://kiran.infura-ipfs.io/ipfs/" + image.path}
                    style={{ maxWidth: "350px", margin: "15px" }}
                    key={image.cid.toString() + index}
                  />
                ))}
          </div>
          {request.image != '' ? (
          <button onClick={()=>{createItem();}} className='block w-full mt-3 py-4 font-medium text-sm text-center text-white bg-indigo-600
          hover:bg-indigo-500 active:bg-indigo-700 rounded-lg ring-offset-2 ring-indigo-600 focus:ring-2'>
            Request Funds
          </button>
          ):(<button className='block w-full mt-3 py-4 font-medium text-sm text-center text-white bg-indigo-600
          hover:bg-indigo-500 active:bg-indigo-700 rounded-lg ring-offset-2 ring-indigo-600 focus:ring-2'>
            Request Funds
          </button>)
          }
          {success ? (Data.reset(),AdditionalContentExample()):('')}
          {console.log(ip)}
          </form> 
          </div>
        </>
  )
};

function AdditionalContentExample() {
  return (
    <Alert variant="success">
      <Alert.Heading>Hey, nice to see you</Alert.Heading>
      <p>
        Aww yeah, you successfully read this important alert message. This
        example text is going to run a bit longer so that you can see how
        spacing within an alert works with this kind of content.
      </p>
      <hr />
      <p className="mb-0">
        Whenever you need to, be sure to use margin utilities to keep things
        nice and tidy.
      </p>
    </Alert>
  );
}