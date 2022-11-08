import { createContext, useContext } from "solid-js";
import { createStore, reconcile, unwrap } from "solid-js/store"
import { openSocket } from "./websocketClient";

const defaultState = {
  A: {},
  M: {},
  '2': {},
  '3': {},
};

const DenonContext = createContext([
  defaultState,
  {
    send: () => undefined,
  },
]);

export const DenonProvider = (props) => {
  let socket;
  const [state, setState] = createStore(defaultState);
  const url = `ws://${props.host}:${props.port}`;
  const connect = () => {
    const handleData = (data) => {
      if(!data) {
        return;
      }
      const {zone, parameter, value} = data;
      const newState = { ...(unwrap(state)[zone]), [parameter]: value };
      setState(zone, reconcile(newState));
    };
    socket = openSocket(url, (data) => {
      if(Array.isArray(data))
        data.forEach(handleData);
      else {
        handleData(data);
      }
    });
  };
  
  const send = (message) => {
    if (socket?.readyState === 1) {
      socket.send(JSON.stringify(message));
    } else {
      setTimeout(() => { send(message); }, 500);
    }
  };

  setInterval(() => {
    if (!socket || socket.readyState === 3) {
      connect();
    }
  }, 2000);

  return (
    <DenonContext.Provider value={[state, { send }]}>
      {props.children}
    </DenonContext.Provider>
  );
};

export const useDenon = () => useContext(DenonContext);
