import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const people = {
  name: 'Le Huu Tu',
  age: 22,
  status: true,
}

const person = {
  name: 'Nguyen Thanh Dung',
  age: 20,
  status: false,
}

function sum(valueA, valueB){
  return valueA + valueB;
}

const a = 10;
const b = 30;

const element = <h1>Tổng là: {sum(a,b)}</h1>;

ReactDOM.render(
  person.name,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
