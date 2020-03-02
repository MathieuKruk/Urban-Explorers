import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import ParticlesBackground from './Components/Containers/ParticlesBackground/ParticlesBackground';
import CarouselHeader from './Components/Containers/Jumbotron/CarouselHeader';
import Chat from './Components/Containers/Chat/Chat';
import Register from './Components/Containers/Authentication/Register';
import Login from './Components/Containers/Authentication/Login';
import RibbonInfos from './Components/Containers/RibbonInfos/RibbonInfos';

import NavigationBar from './Components/Functionals/NavigationBar/NavigationBar';



function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar />
        <ParticlesBackground />
        <CarouselHeader />
        <RibbonInfos />
      </Router>
    </div>
  );
}

export default App;
