const express = require('express')
const bodyParser = require('body-parser')
const http = require('http')
const ws = require('ws')

const webServer = http.createserver(express)
const socketServer = new ws.Server({ webServer });

const port = 3000;

webServer.listen(port, function(req, res) {
    console.log(`listening on port ${port}.`)
})