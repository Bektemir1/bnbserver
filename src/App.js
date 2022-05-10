
import './App.css';
import React,{useEffect} from 'react';
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
import Search from './pages/Search/Search';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Basket from './pages/Basket/Basket';
import PublicOffer from './pages/publicOffer/publicOffer';

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
                <Route exact path="/collections" component={Collections}/>
                <Route path="/collection-page/:id" component={CollectionPage}/>
                <Route path="/search" component={Search}/>
                <Route path="/public-offer" component={PublicOffer}/>
                <Route path="/basket" component={Basket}/>
                <Route path="/collections/product-detail/:id" component={ProductDetail}/>
            </Switch>
        <Footer/>
      </div>
    );
 
}

export default App;
