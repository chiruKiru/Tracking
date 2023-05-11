import {create as ipfsHttpClient} from 'ipfs-http-client'

const projectId = '2PPHv7CfM6AjQ29aV1homs8JJ3z'
const projectSecret= '6825e059342937d03df4505a79f0d28f'
const authorization = "Basic" + btoa(projectId+':'+projectSecret);

const ipfs = create({
    url : "https://ipfs.infura.io:5001/api/v0",
    headers : {
        authorization
    }
})
<div className="App">
    {
        ipfs
    }