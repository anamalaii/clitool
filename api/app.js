const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const { exec, spawn } = require('child_process');
var server = require('http').Server(app);
const io = require('socket.io')(http);

app.use(cors()) 
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
    
    
  io.on('getDoc',(socket) => {

    exec(req.params.path, (error, stdout, stderr) => {
      if (error) {           
        return;
      }
      socket.emit('data', stdout);
    });

  });
    app.get('/details/:path',(req,res) =>
	{
        console.log(req.params.path)
        exec(req.params.path, (error, stdout, stderr) => {
            if (error) {           
              return;
            }
            socket.emit('data', stdout);
            res.send(stdout)
          });
    })
    app.get('/execute/:p',(req,res) =>
	{
        exec(req.params.p, (error, stdout, stderr) => {
            if (error) {           
              return;
            }
            let out1=stdout;
            res.send(out1)
          });
	})
app.listen(3000, () => {
	return console.log('Listening ');
})