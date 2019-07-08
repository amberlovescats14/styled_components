import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import NoMatch from './components/NoMatch'
import Layout from './components/Layout'
import NavBar from './components/NavBar'
import Jumbotron from './components/Jumbotron'

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
      <NavBar/>
      <Jumbotron/>
      <Layout>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
        <Route component={NoMatch}/>
      </Switch>
      </Layout>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
