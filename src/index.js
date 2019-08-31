// import React, {Component} from 'react';
import React from 'react';
//import "./assets/style.css";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';

// class QuizBee extends Component{
//     render(){
//         return(
//             <div className="container">
//             <div className="title">QuizBee</div>
//             </div>
//         );
//     }
// }
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
