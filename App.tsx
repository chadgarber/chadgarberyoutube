import React from 'react';
import Hero from './components/Hero';

function App() {
  return (
    <div className="min-h-screen bg-dark-bg text-white selection:bg-neon-purple selection:text-white overflow-hidden relative">
      <Hero />
    </div>
  );
}

export default App;