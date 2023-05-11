import {create as ipfsHttpClient} from 'ipfs-http-client'
import { useState } from 'react'
import './src/App.css'

const projectId = '2PPHv7CfM6AjQ29aV1homs8JJ3z'
const projectSecret= '6825e059342937d03df4505a79f0d28f'
const auth = 'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64');

function App() {
  https://ipfs.infura.io/api/v0/2PPHv7CfM6AjQ29aV1homs8JJ3z:6825e059342937d03df4505a79f0d28f
    
    const [images, setImages] = useState([])
    const ipfs = ipfsHttpClient({
      host: 'ipfs.infura.io',
      port: 5001,
      protocol: 'https',
      apiPath: '/api/v0',
      headers: {
        authorization: auth,
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
              src={"https://ipfs.infura.io:5001" + image.path}
              style={{ maxWidth: "400px", margin: "15px" }}
              key={image.cid.toString() + index}
            />
          ))}
        </div>
      </div>
    )
  }
  
  export default App
