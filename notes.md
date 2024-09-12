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

REPL stands for _`Read Evaluate Print Loop`_ and it is a programming language environment (basically a console window) that takes single expression as user input and returns the result back to the console after execution.
