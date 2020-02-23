import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import JumbotronHeader from './Components/Containers/Jumbotron/Jumbotron';
import RibbonInfos from './Components/Containers/RibbonInfos/RibbonInfos';

import NavigationBar from './Components/Functionals/NavigationBar/NavigationBar';


function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar />
        <JumbotronHeader />
        <RibbonInfos />
      </Router>
    </div>
  );
}

export default App;
