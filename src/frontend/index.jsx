/* @refresh reload */
import { render } from 'solid-js/web';
import App from './App';
import { DenonProvider } from './api/DenonClient';
import './index.css';


render(() => (
  // <DenonProvider host="localhost" port="1337">
  <DenonProvider host="rpi-server.local" port="1337">
    <App />
  </DenonProvider>
), document.getElementById('root'));
