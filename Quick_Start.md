# Quick Start

The aim of the project is to create an accessible and inclusive web application, Code Space, to increase students? passion for coding. Coding can be described as a set of instructions forming a computer program which is then performed by a computer.  Creating an accessible app is particularly important because despite an increase in number of people studying computer science at GCSE and A level; the ratio of females in computing at higher education has fallen since 2014. 

## Getting Started

The following instructions will allow you to set up the application. 

### Prerequisites

Prior to running the application, make sure Node.js® and an npm package manager are installed. 

After ensuring these are installed, install the Angular CLI.

```
npm install -g @angular/cli
```

Additionally, MongoDB will be required for this project, the developer also needs to ensure this is installed.

### Installing Packages

Navigate into the *client* directory using the **cd** command. Numerous packages have been used for this application, to ensure the relevant node_modules are installed, enter the following command:

```
npm install
```

This command should have created the folder **node_modules**, within the client directory.

Open a new terminal and navigate into the *server* directory. Run the following command to ensure the relevant packages are installed here too:

```
npm install
```

## Running the Application

In a terminal inside the client directory, run the following command to begin running the front-end of the application:

```
npm start
```
In a new terminal, locate to the server directory and run the following command to begin running the server:  client directory, run the following command to begin running the front-end of the application:

```
node app.js
```

The following message should appear:  **Server listening on port 3000**.

Following this, open a final terminal and enter the following command to run the database:

```
mongod
```
Open a browser and enter the following: *http://localhost:4200/*

A user can now sign up to the site and start learning.

## Authors

* **Olivia Johnson** 

## Acknowledgments

Content for the Python Tutorial adapted from: https://developers.google.com/edu/python/
