import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

class Element extends React.Component {
  render () {
    return <h1 style={true && {color: 'red'}}>Hello World</h1>
  }
}
// class Element extends React.Component {
//   render () {
//     return React.createElement('h1', {style: {color: 'red'}}, 'Hello World');
//   }
// }
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Element/>
  );
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
// ReactDOM.render(<Element></Element>, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
