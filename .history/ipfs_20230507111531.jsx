import { create } from 'ipfs-http-client'

const projectId = '2PPHv7CfM6AjQ29aV1homs8JJ3z'
const projectSecret = '...';
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