import React, { useState, lazy, Suspense }from 'react'
import { render } from 'react-dom'
import { Router } from '@reach/router';
// import SearchParams from './SearchParams';
// import Details from './Details';
import ThemeContext from './ThemeContext';
import NavBar from './NavBar';

// The code below defers the loading of the Details component to later
const Details = lazy(() => import('./Details'))
const SearchParams = lazy(() => import('./SearchParams'))

const App = () => {
  const themeHook = useState('peru');
  return (
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
    <div>
      <NavBar />
      <Suspense fallback={<h1>loading route ...</h1>}>
      <Router>
        <SearchParams path="/" />
        <Details path="/details/:id" />
      </Router>
      </Suspense>
    </div>
    </ThemeContext.Provider>
    </React.StrictMode>
  )
};

render(<App />, document.getElementById("root"));
