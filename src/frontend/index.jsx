/* @refresh reload */
import { render } from 'solid-js/web';
import App from './App';
import { DenonProvider } from './api/DenonClient';
import './index.css';


render(() => (
  <DenonProvider host="localhost" port="9000">
    <App />
  </DenonProvider>
), document.getElementById('root'));
