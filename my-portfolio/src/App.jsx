import React from 'react';
import Header from './components/Header';
import Summary from './components/Summary';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="container">
      <Header />
      <Summary />
      <Skills />
      <Education />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;