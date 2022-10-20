const express = require('express');
const { Octokit, App } = require("octokit");
require('dotenv').config()

const app = express();

//dummy comment

const octokit = new Octokit({
    auth: Buffer.from("Z2hwX3M4YXRSR1ZKUlhxN0pnb0NZaWlGa1Z1TXhIcksxZTJFVzdoaw==", 'base64').toString('ascii')
  });
  

    const getBuildInfo = async ()=> {

       const res =  await octokit.request('GET /repos/alifhs/docker-node/actions/runs', {
          owner: 'alifhs',
          repo: 'docker-node'
        })

        // console.log(res.data.workflow_runs[0].updated_at);

        return res.data.workflow_runs[0].updated_at;
    }

//dummy comment
const build_time = '10-5-2022'
app.get('/', async(req, res)=> {
    try {

        const getTime = await getBuildInfo();
        res.send(`Hello ${getTime}`);
    } catch(e) {
        res.send('bad request or credentials');
    }
});
app.get('/test', (req, res)=> {
    res.send(`Hello ${build_time}`);
})

app.listen(5000, ()=> {
    console.log('listening to ')
})