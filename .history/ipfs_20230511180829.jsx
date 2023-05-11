import { useState } from 'react'
import { create as ipfsHttpClient } from "ipfs-http-client";
import './src/App.css';

// insert your infura project crediental you can find 
// easily these your infura account in API key management section
const projectId = "2PPHv7CfM6AjQ29aV1homs8JJ3z"
const projectSecretKey = "6825e059342937d03df4505a79f0d28f"
const authorization = "Basic " + btoa(projectId + ":" + projectSecretKey);

export function FileUpload() {

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

    setImages([
      ...images,
      {
        cid: result.cid,
        path: result.path,
      },
    ]);

    form.reset();
  };
  console.log()
  return (
    <div className="App">
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
  )
}

export default FileUpload;