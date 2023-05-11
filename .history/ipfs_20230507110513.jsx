import {create as ipfsHttpClient} from 'ipfs-http-client'
import { useState } from 'react'
import './src/App.css'

const projectId = '2PPHv7CfM6AjQ29aV1homs8JJ3z'
const projectSecret= '6825e059342937d03df4505a79f0d28f'
const authorization = "Basic" + btoa(projectId+':'+projectSecret);

/*function App() {

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
  
  export default App*/

  const App = () => {
    const [file, setFile] = useState(null);
    const retrieveFile = (e) => {
      const data = e.target.files[0];
      const reader = new window.FileReader();
      reader.readAsArrayBuffer(data);
      reader.onloadend = () => {
        console.log("Buffer data: ", Buffer(reader.result));
      }
  
      e.preventDefault();  
    }
  
    return (
      <div className="App">
        <form className="form" onSubmit={handleSubmit}>
          <input type="file" name="data" onChange={retrieveFile} />
          <button type="submit" className="btn">Upload file</button>
        </form>
      </div>
    )
  }

  export default App