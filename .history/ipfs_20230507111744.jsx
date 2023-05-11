import { create } from 'ipfs-http-client'

const projectId = '2PPHv7CfM6AjQ29aV1homs8JJ3z'
const projectSecret = '6825e059342937d03df4505a79f0d28f'
const auth = 'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64');
const client = create({
  host: 'ipfs.infura.io',
  port: 5001,
  protocol: 'https',
  apiPath: '/api/v0',
  headers: {
    authorization: auth,
  }
})
async function onChange(e) {
  const file = e.target.files[0]
  try {
    const added = await client.add(file)
    const url = `https://yourdedicatedgwname.infura-ipfs.io/ipfs/${added.path}`
    updateFileUrl(url)
  } catch (error) {
    console.log('Error uploading file: ', error)
  }  
}
return (
  <div className="App">
    <h1>IPFS Example</h1>
    
    <input
      type="file"
      onChange={onChange}
    />
    {
      
      fileUrl && (
        <img src={fileUrl} width="600px" /> 
      )
    }
    <p>{fileUrl}</p>