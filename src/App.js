import React from 'react'
import { Footer } from './components/footer/Footer';
import { Navbar } from './components/navbar/Navbar';
import { Pokedex } from './components/pokedex/Pokedex';
import { Slider } from './components/Slider/Slider';
import { Welcome } from './components/Welcome/Welcome';


export const App
  = () => {
    return (
      <div>
        <Navbar />
        <Welcome/>
        <Slider/>
        <Pokedex />
        <Footer />

      </div>
    )
  }


export default App;
