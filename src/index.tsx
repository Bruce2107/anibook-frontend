import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { RecoilRoot } from 'recoil';
import App from './App';
import store from './store';

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <Provider store={store}>
        <App />
      </Provider>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
);
