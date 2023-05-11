import {create as ipfsHttpClient} from 'ipfs-http-client'
import { useState } from 'react'
import './src/App.css'

const projectId = '2PPHv7CfM6AjQ29aV1homs8JJ3z'
const projectSecret= '6825e059342937d03df4505a79f0d28f'
const auth = 'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64');

function App() {

  const auth = 'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString(‘base64’);
const client = ipfsClient.create({
  host: ‘ipfs.infura.io’,
  port: 5001,
  protocol: ‘https’,
  headers: {
      authorization: auth,
  },
});
client.add(‘Hello World’).then((res) => {
  console.log(res);
});