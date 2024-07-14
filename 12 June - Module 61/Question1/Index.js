// <-------------- QUESTION 2 -------------->

// const fs = require('fs');

// const nodejsInfo = `
// Node.js Architecture:

// Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient.
// The architecture consists of:
// - Event Loop: Handles asynchronous operations.
// - V8 Engine: Executes JavaScript code.
// - libuv: Provides cross-platform asynchronous I/O operations.
// - Core Modules: Built-in modules like fs, http, etc.
// - C++ Addons: Allows interfacing with native libraries.
// `;

// const filePath = 'nodejs_architecture.txt';

// fs.writeFile(filePath, nodejsInfo, (err) => {
//     if (err) {
//       console.error('Error writing file:', err);
//     } else {
//       console.log(`Successfully wrote ${filePath}`);
//     }
// });

// <-------------- QUESTION 3 -------------->

// fs.readFile(filePath, 'utf8', (err, data) => {
//     if (err) {
//       console.error('Error reading file:', err);
//     } else {
//       console.log('Content of nodejs_architecture.txt:');
//       console.log(data);
//     }
//   });


// <-------------- QUESTION 4 -------------->

// const additionalData = `
// Advantages of Node.js:
// - Non-blocking and asynchronous nature, ideal for I/O intensive applications.
// - Lightweight and efficient, suitable for real-time applications.
// - Large ecosystem of libraries (npm) and active community support.
// `;

// // Append the additional data to the file
// fs.appendFile(filePath, additionalData, (err) => {
//   if (err) {
//     console.error('Error appending to file:', err);
//   } else {
//     console.log('Additional data appended successfully.');

//     // Read the updated content of the file
//     fs.readFile(filePath, 'utf8', (err, data) => {
//       if (err) {
//         console.error('Error reading file:', err);
//       } else {
//         console.log('Updated content of nodejs_architecture.txt:');
//         console.log(data);
//       }
//     });
//   }
// });


// <-------------- QUESTION 5 -------------->

// fs.unlink(filePath, (err) => {
//     if (err) {
//       console.error('Error deleting file:', err);
//     } else {
//       console.log('File Deleted Successfully.');
//     }
//   });

// <-------------- QUESTION 6 -------------->

// const os = require('os');

// // Get the operating system platform
// const osName = os.platform();

// // Get the operating system release version
// const osRelease = os.release();

// console.log(`Operating System: ${osName}`);
// console.log(`OS Release Version: ${osRelease}`);

// <-------------- QUESTION 7 -------------->

// const http = require('http');

// const message = "I Am Happy To Learn Full Stack Web Development From PW Skills!";

// const server = http.createServer((req, res) => {
    //   res.writeHead(200, {'Content-Type': 'text/plain'});
    //   res.end(message);
    // });
    
    // const port = 3000;
    // server.listen(port, () => {
        //   console.log(`Server is running on http://localhost:${port}`);
        // });
        
        
// <-------------- QUESTION 8 -------------->

// const EventEmitter = require('events');

// // Create an EventEmitter instance
// const eventEmitter = new EventEmitter();

// // Define the event name as "subscribe"
// const eventName = 'subscribe';

// // Listener function for the "subscribe" event
// const subscribeHandler = () => {
//     console.log('Thanks for subscribing to college Wallah');
// };

// // Attach the listener function to the "subscribe" event
// eventEmitter.on(eventName, subscribeHandler);

// // Simulate the event being triggered (user subscribes)
// eventEmitter.emit(eventName);

// <-------------- QUESTION 9 -------------->

// const EventEmitter = require('events');

// // Create an EventEmitter instance
// const eventEmitter = new EventEmitter();

// // Define the event name as "testEvent"
// const eventName = 'testEvent';

// // Listener function for the event
// const eventHandler = () => {
    //   console.log('Event handler called!');
    // };
    
    // // Attach the listener function to the event
    // eventEmitter.on(eventName, eventHandler);
    
    // // Emit the event
    // console.log('Triggering event handler...');
    // eventEmitter.emit(eventName);
    
    // // Remove the event handler
    // console.log('Removing event handler...');
    // eventEmitter.off(eventName, eventHandler);
    
    // // Attempt to emit the event again
    // console.log('Attempting to trigger event handler after removal...');
    // eventEmitter.emit(eventName);

// <-------------- QUESTION 10 -------------->

// const EventEmitter = require('events');

// // Create an EventEmitter instance
// const eventEmitter = new EventEmitter();

// // Define the event name as "testEvent"
// const eventName = 'testEvent';

// // Determine the current maximum number of listeners
// const currentMaxListeners = eventEmitter.getMaxListeners();
// console.log(`Current max listeners: ${currentMaxListeners}`);

// // Set the maximum number of listeners to 51
// eventEmitter.setMaxListeners(5);

// // Check the updated maximum number of listeners
// const updatedMaxListeners = eventEmitter.getMaxListeners();
// console.log(`Updated max listeners: ${updatedMaxListeners}`);

// // Add 5 event listeners to the event
// for (let i = 1; i <= 5; i++) {
//   eventEmitter.on(eventName, () => {
//     console.log(`Listener ${i} called!`);
//   });
// }

// // Emit the event to trigger all listeners
// eventEmitter.emit(eventName);