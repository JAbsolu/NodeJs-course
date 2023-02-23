// example of a code that creates an instance of a server using the modules.js module

const http = require('modules.js');
http.createServer((req, res) => {
    res.write('Hello from the server'); //write a message to the server
    res.end() // end of the response 
}).listen(3000); // the server instance listens for http requests on port 3000


/*
The fs module is used to interact with a file system. 
It does not need to be installed because it is part of the Node.js 
core and can simply be required. The following code sample reads 
a local file synchronously using the fs module and prints the file 
contents to the console.
*/

//sample code to read a file synchronously using the fs.readFile() method

const fs = require('fs');
const data = fs.readFile('sample.txt', 'utf8'); 

// print contant of the file "sample.txt" to the console

console.log(data);


/*
The fs module can also be used for input and output, known as I/O. 
The fs module methods can be used to retrieve information from or 
write data to an external file.
*/

const fse2 = require('fs');  //fse2 means fs example 2 in this case

const datae2 = fse2.readFileSync('/content.md'); // blocks here until file is read

console.log(datae2); //writes data in the content.md file to the console


/*
The OS module provides methods to retrieve information from the operating 
system that the application is running on and interact with it. This is 
sample code from the OS module that gets the computer's platform and architecture.
*/

var os = require('os');
console.log("Computer OS Platform Info : " + os.platform());
console.log("Computer OS Architecture Info: " + os.arch());

/*
The path module allows you to retrieve and manipulate directory and file paths.
The following code retrieves the last portion of a given file path and prints 
that value to the console:
*/

const path = require('path');
let result = path.basename('/content/index/home.html');
console.log(result); //outputs home.html to the console

/* 
The Node.js util module is intended for internal use for accomplishing 
such tasks as debugging and deprecating functions. Say you want to debug 
a program to count the number of iterations in a loop. You could use 
util.format() method as follows:
*/

let util = require('util');
var str = 'The loop has executed %d time(s).';
for (let i = 1; i <= 10; i++) {
console.log(util.format(str, i)); //outputs "The loop has executed <i> time(s)
}

/* 
The URL module is used to divide up a web address into readable parts. 
Here is sample code used to return a hostname given a URL.
*/

const url = require('url'); 
let webAddress = 'http://localhost:2000/index.html?lastName=Kent&firstName=Clark'; 
var qry = url.parse(webAddress, true); 
var qrydata = qry.query; //returns an object: {lastName: 'Kent', firstName: 'Clark'} 
console.log(qrydata.firstName); //returns Clark


/* 
The querystring module provides methods to parse through the query string of a URL.
For example,
*/
var qry = require('querystring');
var qryParams = qry.parse('lastName=Kent&firstName=Clark');
console.log(qryParams.firstName); //returns Clark
