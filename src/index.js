import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

var kowsi={
  rno:1001,
  sname:"kowsalya",
  mark:12,
  rank:37,
  grade:"super",
  location:"nandhanur",
  issingle:true,
  aadhar:223344557799,
  height:"155cm",
  phone:7806872575,
  dateofbirth: "30.12.2002",
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App data= {kowsi}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
