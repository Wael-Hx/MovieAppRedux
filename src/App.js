import React from 'react';
import MovieApp from './Router/MovieAppRouter'
import {BrowserRouter} from 'react-router-dom';
import './App.css';




function App() {
  return (
    <BrowserRouter>
        <MovieApp/>
    </BrowserRouter>
  );
}

export default App;
