/* @refresh reload */
import { render } from 'solid-js/web';
import App from './App';
import { DenonProvider } from './api/DenonClient';
import './index.css';

const port = import.meta.env.NODE_ENV === 'production' ? 'WS_PORT' : 8090;

render(() => (
  <DenonProvider host="rpi-server.local" port={port}>
    <App />
  </DenonProvider>
), document.getElementById('root'));
