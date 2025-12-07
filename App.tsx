import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ProjectOverview from './components/ProjectOverview';
import ProblemAnalysis from './components/ProblemAnalysis';
import RadonAnalysis from './components/RadonAnalysis';
import Solution from './components/Solution';
import Materials from './components/Materials';
import Process from './components/Process';
import PoolSolution from './components/PoolSolution';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Navigation />
      <main>
        <Hero />
        <ProjectOverview />
        <ProblemAnalysis />
        <RadonAnalysis />
        <Solution />
        <Materials />
        <Process />
        <PoolSolution />
      </main>
      <Footer />
    </div>
  );
}

export default App;