import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Body from './containers/Body';
import Layout from './containers/Layout';
import './App.css';

function App() {
  return (
    <Routes>
         <Route path="/" element={<Layout />} >
            <Route index  element={<Body />} />
         </Route>
    </Routes>
  );
}

export default App;
