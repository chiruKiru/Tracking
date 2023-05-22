import { useState } from "react";
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
      const val= await createFund(request);
      SetSuccess(val)
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
  const [success, SetSuccess]  = useState(false)

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
  return (
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
          {console.log(success)}
          {success ? (Data.reset()):('')}
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
          {console.log(ip)}
          </form> 
          </div>
        </>
  )
};