import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from './context/context';
import App from './App';
import './index.css';
import { SpeechProvider } from '@speechly/react-client';
ReactDOM.render(
    
      <SpeechProvider appId="064c20b1-a793-426e-a8e3-0df9ddde0970" language="en-US">
        <Provider>
      <App />
    </Provider>
  </SpeechProvider>,
  document.getElementById('root'),
  );