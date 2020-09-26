import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
//import Home from './components/pages/Home';
//import About from './components/pages/About';
import Navbar from './components/layout/Navbar';
import FilmsState from './context/films/FilmsState';
import Film from './components/films/Film';
import PeopleState from './context/people/PeopleState';
import LocationsState from './context/locations/LocationsState';
import './App.css';
import Spinner from './components/layout/Spinner';

const Home = React.lazy(() => import('./components/pages/Home'));
const About = React.lazy(() => import('./components/pages/About'));

const App = () => {
  return (
    <FilmsState>
      <PeopleState>
      <LocationsState>
      <Router>
        <Suspense fallback={
          <div className="center">
            <Spinner />
          </div>
        }>

          <div className="App">
            <Navbar />
            <div className="container">
              <Switch>
                <Route exact path='/'>
                  <Home />
                </Route>
                <Route exact path='/about'>
                  <About />
                </Route>
                <Route 
                      exact path='/films/:id'
                      component={Film}
                />
                <Redirect to="/" />
              </Switch>
            </div>
          </div>
        </Suspense>
      </Router>
      </LocationsState>
      </PeopleState>
    </FilmsState>
  );
}

export default App;
