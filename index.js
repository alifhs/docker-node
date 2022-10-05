const express = require('express');
const { Octokit, App } = require("octokit");
require('dotenv').config()

const app = express();

//dummy comment

const octokit = new Octokit({
    auth: process.env.token
  })
  

    const getBuildInfo = async ()=> {

       const res =  await octokit.request('GET /repos/alifhs/docker-node/actions/runs', {
          owner: 'alifhs',
          repo: 'REPO'
        })

        // console.log(res.data.workflow_runs[0].updated_at);

        return res.data.workflow_runs[0].updated_at;
    }


const build_time = '10-5-2022'
app.get('/', async(req, res)=> {
    const getTime = await getBuildInfo();
    res.send(`Hello ${getTime}`);
})
app.get('/test', (req, res)=> {
    res.send(`Hello ${build_time}`);
})

app.listen(5000, ()=> {
    console.log('listening to ')
})