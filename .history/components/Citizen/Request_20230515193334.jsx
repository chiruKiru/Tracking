import { useState } from "react";
import { create as ipfsHttpClient } from "ipfs-http-client";
const projectId = "2PPHv7CfM6AjQ29aV1homs8JJ3z"
const projectSecretKey = "6825e059342937d03df4505a79f0d28f"
const authorization = "Basic " + btoa(projectId + ":" + projectSecretKey);

export default ({
  createFund,
}) => {

  const [shipment, setShipment] = useState({
    receiver:"",
    pickupTime: "",
    distance:"",
    price:"",
    image:""
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
    const form = event.target;
    const files = (form[0]).files;

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

    form.reset();
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
          <form onSubmit={(e)=>{ e.preventDefault(); e.onSubmitHandler()}}>
            <div className="relative mt-3">
              <input
                type='text' placeholder="receiver" className="w-full pl-5 pr-3 py-2 text-gray-500 bg-transparent
                outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                onChange={(e)=> setShipment({ ...shipment, receiver: e.target.value,})}/>
                </div>
            <div className="relative mt-3">
              <input
                type='date' placeholder="pickupTime" className="w-full pl-5 pr-3 py-2 text-gray-500 bg-transparent
                outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                onChange={(e)=> setShipment({ ...shipment, pickupTime: e.target.value,})}/>
                </div>
                <div className="relative mt-3">
              <input
                type='text' placeholder="distance" className="w-full pl-5 pr-3 py-2 text-gray-500 bg-transparent
                outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                onChange={(e)=> setShipment({ ...shipment, distance: e.target.value,})}/>
                </div>
                <div className="relative mt-3">
              <input
                type='text' placeholder="price" className="w-full pl-5 pr-3 py-2 text-gray-500 bg-transparent
                outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                onChange={(e)=> setShipment({ ...shipment, price: e.target.value,})}/>
                </div>
                <div className="relative mt-3">
                <input
                type='text' placeholder="image" className="w-full pl-5 pr-3 py-2 text-gray-500 bg-transparent
                outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                onChange={(e)=> setShipment({ ...shipment, image: e.target.value,})}/>
                </div>
                <div className="relative mt-3">
              {ipfs && (
                <>
                  <h3>Upload file to IPFS</h3>

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
          <button onClick={()=>createItem()} className='block w-full mt-3 py-4 font-medium text-sm text-center text-white bg-indigo-600
          hover:bg-indigo-500 active:bg-indigo-700 rounded-lg ring-offset-2 ring-indigo-600 focus:ring-2'>
            Create Shipment
          </button>
          </form>
          <div className="relative mt-3">
      {ipfs && (
        <>
          <h3>Upload file to IPFS</h3>
          <form onSubmit={onSubmitHandler}>
            <input type="file" name="file" />
            <button type="submit">Upload file</button>
          </form>
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
          </div>
        </>
  )
};