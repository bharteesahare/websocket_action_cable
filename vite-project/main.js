function createSocket(){
  const socket_url = 'ws://localhost:3000/cable'
  const socket  = new WebSocket(socket_url);

  // when socket is open, we can send data to the server
  socket.onopen = function(event) {
    console.log("connected to server rails side ");
    const msg = {
      command: "subscribe",
      identifier: JSON.stringify({
        id: 1,
        channel: 'AlertsChannel'
      })

    };
    socket.send(JSON.stringify(msg));
  }

  socket.onmessage = function (event) {
    const data = JSON.parse(event.data);

    if (data.type === 'ping'){
      return;
    }
    if (data.message){
      console.log(data.message);
    }
    console.log("Received data from server", event.data);
  }

  socket.onclose = function (event) {
    console.log("Dissconnected from server");
  }

  socket.onerror = function (error) {
    console.log('Websocket error observed:', error);
  }

}

createSocket();
