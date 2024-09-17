## Q1. What is server?

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Client-server-model.svg/300px-Client-server-model.svg.png" />
A server is a computer or device that provides services, resources, or data to other computers or devices over a network. It acts as a central hub that manages and distributes information, applications, or services to clients, which are typically computers, laptops, or mobile devices.

### Key Characteristics of a Server:

- `Centralized`: A server is a central point of access for multiple clients.
- `Resource Provider`: A server provides resources, such as files, applications, or services, to clients.
- `Network Connectivity`: A server is connected to a network, which enables communication with clients.
- `Multi-User Support`: A server can support multiple clients simultaneously.
  Types of Servers:

### Key Characteristics of a Server:

- `Centralized`: A server is a central point of access for multiple clients.
- `Resource Provider`: A server provides resources, such as files, applications, or services, to clients.
- `Network Connectivity`: A server is connected to a network, which enables communication with clients.
- `Multi-User Support`: A server can support multiple clients simultaneously.

### Types of Servers:

- `Web Server`: Hosts websites and serves web pages to clients.
- `File Server`: Stores and manages files, providing access to clients.
- `Database Server`: Manages and provides access to databases.
- `Mail Server`: Handles email communication and distribution.
- `Game Server`: Hosts online games and manages game sessions.

### In Simple Terms:

Think of a server like a librarian. Just as a librarian manages books and provides access to them, a server manages resources and provides access to them over a network.

## Q2. What is web server?

A web server is a type of server that hosts and serves websites, web applications, and web services over the internet. Its primary function is to store, process, and deliver web pages, websites, and web-based applications to clients, which are typically web browsers or mobile apps.

### Key Functions of a Web Server:

- `Hosting`: Stores website files, such as HTML, CSS, JavaScript, images, and videos.
- `Request Handling`: Receives and processes HTTP requests from clients, such as GET, POST, PUT, and DELETE.
- `Response Generation`: Generates and sends HTTP responses back to clients, including the requested web pages or data.
- `Security`: Implements security measures, such as authentication, authorization, and encryption, to protect the website and its data.

### How a Web Server Works:

1. A client (web browser or mobile app) sends an HTTP request to the web server.
2. The web server receives the request and processes it.
3. web server retrieves the requested resource (web page, image, etc.) from its storage.
4. The web server generates an HTTP response, which includes the requested resource.
5. The web server sends the HTTP response back to the client.
6. The client receives the response and displays the web page or resource.

### Examples of Web Servers:

- `Apache HTTP Server`: An open-source web server software.
- `Microsoft IIS (Internet Information Services)`: A web server software developed by Microsoft.
- `Nginx`: A popular open-source web server software.
- `Lighttpd`: A lightweight open-source web server software.

### In Simple Terms:

Think of a web server like a restaurant. Just as a restaurant stores food, prepares orders, and serves them to customers, a web server stores website files, processes requests, and serves web pages to clients.

## Node JS

- Nodejs is an open source `(open source means a software or program which is free to use and free to contribute for every developers globally)` and cross platform `(corss platform means a software or a programming language which runs same in every types of operating system like windows, linux, mac etc.)` software environment allows the developer to run javascript outside of the browser environment.

* Nodejs allows developers to use javascript programming language in server side.
* Nodejs build upon V8 engine (Chromes Javascript engines and a `c++ library` and `libuv library`)

## Q3. What is difference between nodejs and web browser environment?

| Nodejs                                                                                                                             | Web Browser                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| It is mostly use on the server side                                                                                                | It is use on the client side                                                                         |
| Nodejs does not have capability to add HTML tabs                                                                                   | Javascript is capable enough to add HTML and play with the DOM                                       |
| Nodejs is used in server side development                                                                                          | Javascript is used in frontend developement                                                          |
| Nodejs supports the common javascript modules (require function and module.exports)                                                | Browser javascript supports ES6 modules (import, export keyword)                                     |
| Nodejs doesnot have any access to window object and web API's, it uses a global object with some predefined methods and properties | Browser javascript can access the window object and web API's of web browser                         |
| Nodejs environment built by using chromes V8 engine and libuv library                                                              | Browser environment are like V8 engine, spider monkey, chakra, js core are uses in different browser |

## History of Nodejs

- Nodejs initially developed by `Ryan Dahl` in the year of 2009 who wanted to create an environment to run the javascript in the server side.
- In 2010 they release npm(Node Package Manager) which allows the developers to install the javascript library and packages in CLI(command line interface)
- In 2015 nodejs foundation was istablished which is a non profit organization that promotes the growth and adoption of Nodejs.
- The latest stable version of nodejs is v20.17.0

## Feature of Nodejs

Nodejs has gained immense popularity among developers for its ability to handle server side operations efficiently and effectively. Built on Chrome v8 javascript engine, Nodejs is designed to build scalable and high performance application.

1. Nodejs supports asynchronous input and output and event driven architecture.
2. Nodejs uses single threaded mechanism.
3. Scalability
4. Fast Performance
5. Real-Time Application which supports micro-services
6. Rich Ecosystem and NPM library
7. Community Support
8. Cross-Platform Compatibility
9. RESTful APIs and Real-Time Communication
10. No Buffering

### REPL

- REPL stands for _`Read Evaluate Print Loop`_ and it is a programming language environment (basically a console window) that takes single expression as user input and returns the result back to the console after execution.
- The REPL feature of nodejs is very useful to experiment and debug the javascript code in window console.
- `Read`: Read feature takes the input from users and stores them in memory.
- `Eval`: It takes the input and evaluate the data according to the users experision.
- `Print`: It prints the result.
- `Loop`: It loops the above commands till the user does not close the repl environment.

Some commands of repl:-

1. `.help`: shows the dot commands help
2. `.editor`: enables editor mode to write multiline javascript code with ease. Once you are in thsi mode enter ctrl+D to run the code you wrote.
3. `.break`: when inputing a multiline expression entering the .break command will abort further input. Same as pressing ctrl+C.
4. `.clear`: resets the REPL context to an empty object and clears any multi-line expression currently bein input.
5. `.load`: loads a javascript file relative to the current working directory
6. `.save`: saves all you entered in the REPL session to a file (specify the filename)\
   <img src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*U_zyHnKdlvjCdAQkoh0uuQ.png" width="900px">

## V8 Engine

- V8 Engine is the fundamental part of Nodejs architecutre. It identify the javascript code and convert it to c++ code which can be understood by machines.

## Libuv

- Libuv is an open source library that is strongly focused on asynchronous I/O. This library provides access to Nodejs as a computer operating system file system and Networking.

## Event Queue

- Event queue to the incomming client request and pass them to the event loop in sequentially.

## Event Loop

- The event loop is responsible for handling small tasks such as executing callback functions or network I/O. Those are non blocking tasks that do not block the main thread.

## Thread Pool

- Thread pool consists of all the threads available for carrying out some tasks that might be required to fulfill client requests.

## Modules

<img src="https://i.ibb.co/ygq6N63/2024-09-13-11-44-40-AI-Eraser.png" width="900px">

- Modules are some pic of javascript code store in separate files to split out a complex javascript program into manageable code.
- Modules are use to increase the code readibility and can be use multiple times in separate files.
- By default Nodejs supports common javascript modules.
- Nodejs works with 3 types modules:-

1. Custom Modules (user defined)
2. Core Modules (inbuilt Modules)
3. Third Party Modules (npm library packages)

### Custom Modules

- The modules which are created by the users for code seperation and reusability purpose and called as custom modules.
- For sending a variable or function from one file to another we are using `module.exports` for receiving `require()` which takes the file path as a argument.

#### first.js

```
function add(a, b) {
  return a + b
}
function sub(a, b) {
  return a - b
}
module.exports = {add, sub}
```

#### second.js

```
const {add, sub} = require("./first")
let x = 10
let y = 20

let result = add(x, y)
console.log(result);

let result1 = sub(x, y)
console.log(result1);
```

### Core Modules

- Nodejs environment provides some inbuilt libraries to work on different functionalities in a server application those are known as core modules.

#### Examples

- OS
- Path
- File System
- HTTP
- HTTPS
- event
- stream
- crypto

### OS Module

- OS module use to get the information of the operating system and local machine where the server is created.

#### use

```
const OS = require('os');
```

### Path Module

- It gets the information about a given path and use to provide dynamic path in the server application.

### FS Module

- FS module use to handle the files inside a node application it performs the `CURD` operation to the files and folders.
- Every functionalities of FS modules comes with both synchronous and asynchronous methods.

#### Syntax

```
fs.writeFile(path, data, (error) => { });
fs.writeFileSync(path, data);
```

## Events Module

- Events module alows us to assign event handlers to your own events with the EventEmitter object.
- EventEmitter is a powerful feature in Nodejs that enables asynchronous and event driven programming.

## http module

- An inbuilt nodejs module used to create http servers.
- The server handles the requests of the client system and returns the response to them.
- A node servers works with rest APIs and manages the web applications.

#### use

```
const http = require('http');

const server = http.createServer((request, response) => {
  // server logic
});

server.listen(PORT, hostname, () => {});
```

### Step -1

- Create server folder

### Step - 2

- cd folderName

### Step - 3

- install package.json file

```
npm init (manual details)

(or)

npm init -y (automatic default details)
```

### Step - 4

- install nodemon library

```
npm i nodemon
```

### Step - 5

- create server root file

```
index.js (default root name)
```

### Step - 6

- create http server

```
const http = require("http");

const app = htttp.createServer((req, res) => {

});

app.listen(PORT);
```

### Step - 7

- run the server file

```
nodemon index.js
```

### Step - 7 (bonus)

- run the server
- set the scripts in package.json file

```
"start": "node index";
"dev": "nodemon index";
```

- run the commands

```
npm start (node server)

(or)

npm run dev (nodemon server)
```
