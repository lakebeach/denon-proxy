export function openSocket(url, onData) {
  const socket = new WebSocket(url);

  socket.onopen = (e) => {
    console.log("[open] Connection established");
  };
  
  socket.onmessage = (e) => {
    console.info(`[message] Data received from server: ${e.data}`);
    const data = JSON.parse(e.data);
    onData(data);
  };
  
  socket.onclose = (e) => {
    if (e.wasClean) {
      console.log(`[close] Connection closed cleanly, code=${e.code} reason=${e.reason}`);
    } else {
      // e.g. server process killed or network down
      // event.code is usually 1006 in this case
      console.warn('[close] Connection died');
    }
  };
  
  socket.onerror = (err) => {
    console.error('[error]', err);
  };

  return socket;
}