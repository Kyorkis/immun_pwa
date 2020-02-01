import React from 'react';
import {BrowserRouter,Route} from'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import reducer from '../../reducers/index.js';
import Header from '../header'
import Footer from '../footer'
import History from '../history'
import Method from '../method'
import Author from '../author'
import Lechim from '../lechim'
import Contacts from '../contacts'
import Vrachi from '../vrachi'
import Raspisaniye from '../raspisaniye'
import Index from '../index/index.jsx'
import Analizy from '../analizy'
import {Provider} from 'react-redux'
import { createStore } from 'redux';


function App(props) {
  return (
    <Provider store={createStore(reducer)}>
    <BrowserRouter>
      <div className="App">
        
        
          <Header/>
          <div className="bodyWrapper">
          <Route exact path='/'  component={Index}/>
          <Route path='/history' component={History}/>
          <Route path='/method' component={Method}/>
          <Route path='/about_author' component={Author}/>
          <Route path='/lechim' component={Lechim}/>
          <Route path='/contacts' component={Contacts}/>
          <Route path='/vrachi' component={Vrachi}/>
          <Route path='/raspisaniye' component={Raspisaniye}/>
          <Route path ='/analizy' component={Analizy}/>
          </div>
          <Footer/>

        
        
        
        
      </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
