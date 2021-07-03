import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Layout from './component/common/layout';
import reportWebVitals from './reportWebVitals';
import HomePage from './component/home';

ReactDOM.render(
  <React.StrictMode>
    <Layout>
      <HomePage />
    </Layout>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
