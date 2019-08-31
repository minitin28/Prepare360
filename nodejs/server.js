const express = require('express');
const app = express();
var jsonFile = require('jsonfile');
var fileName = 'student.json';
const port = 3000;

app.get(('/'),(req,res) => res.send('Hello Nibba'));


jsonFile.readFile(fileName,function(err,jsonData){
    if(err) throw err;
    for(var i=0;i<jsonData.length;i++){
        console.log("Emp Name: "+jsonData[i].emp_name);
    }
});

app.listen(port, () => console.log(`Server started at port ${port}`));

// console.log("server started at" +port);
