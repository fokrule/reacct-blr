import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import MenuBar from './components/MenuBar';
import MainBody from './components/MainBody';
import SinglePost from './components/SinglePost';
function App() {
  return (
    <div className="main">
      <MenuBar />    
    </div>
  );
}

export default App;
