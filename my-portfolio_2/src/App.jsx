import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Summary from './components/Summary';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <main className="main-content">
        <Summary />
        <Skills />
        <Education />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;