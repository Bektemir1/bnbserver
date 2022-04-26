
import './App.css';
import React from 'react';
import Homepage from './components/Homepage/Homepage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import {Route, Switch} from 'react-router-dom';
import News from './components/News/News';
import Help from './components/Help/Help';
import Collections from './components/Collections/Collections';
import Saved from './pages/Saved/Saved';
import CollectionPage from './pages/CollectionPage/CollecitonPage';

const App = () =>{  

    return (
      <div>
        <Header/>
      <Switch>
          <Route exact path="/" component={Homepage}/>
          <Route path="/about" component={About}/>
          <Route path="/news" component={News}/>
          <Route path="/help" component={Help}/>
          <Route path="/saved" component={Saved}/>
          <Route path="/collections" component={Collections}/>
          <Route path="/collection-page/:id" component={CollectionPage}/>
        </Switch>
        <Footer/>
      </div>
    );
 
}

export default App;
