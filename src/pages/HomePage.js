import React from 'react';
import About from '../components/body/about/About';
import Specialize from '../components/body/specialize/Specialize';

export default function HomePage() {
  return (
    <div className="container">
        <About />
        <Specialize />
    </div>
  )
}
