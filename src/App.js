import React from 'react';
import './App.css';
import SearchIcon from './search.svg'
import { useEffect } from 'react';
const API_URL='http://www.omdapi.com?apikey=80a32b55';

function App() {
  const searchMovies=async(title)=>{
const response=await fetch(`${API_URL}&s=${title}`);
const data=await response.json();
  }
  useEffect(()=>{
searchMovies('JamesBond')
  },[]);
  return (
    <div className="App">
      <h1>dfs</h1>
    </div>
  );
}

export default App;
