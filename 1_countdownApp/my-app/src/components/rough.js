function sayHello() {
    console.log('Hello, world!');
  }
  
  // This will log "Hello, world!" every 2 seconds.
  const intervalId = setInterval(sayHello, 2000);
  clearInterval(intervalId);  // Stops the setInterval from running.
