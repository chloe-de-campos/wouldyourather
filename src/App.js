// src/App.js
import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Game from './components/Game';
import Statistics from './components/Statistics';
import './App.css';
import initialQuestions from './data/initialQuestions.json'; 
import Footer from './components/Footer'

function App() {

  return (
    <HashRouter>
      <div className="App">
        <header>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Game questions={initialQuestions} />} />
            <Route path="/stats" element={<Statistics questions={initialQuestions} />} />
          </Routes>
          <Footer></Footer>
        </main>

      </div>
    </HashRouter>
  );
}

export default App;
