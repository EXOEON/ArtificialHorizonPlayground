import './App.css';
import Sliders from './components/Sliders';
import ArtificialHorizon from './components/ArtificialHorizon';
import { useState } from 'react';

// Main component
function App() {
  // Roll state
  const [roll, setRoll] = useState(0)
  //Pitch state
  const [pitch, setPitch] = useState(-365)

  // Roll and pitch change event handlers
  const handleRollChange = (name: string, value: number) => {
    setRoll(-value);
    console.log('Roll: ', roll);
  };
  const handlePitchChange = (name: string, value: number) => {
    setPitch(5.2*value-365);
    console.log('Pitch: ', pitch);
  };

  // Main return statement
  return (
    <div className='wrapper'>
        <h1>Artificial Horizon Playground</h1>
        <br />
        <div className='left'>
          <Sliders name="Roll" onSliderChange={ handleRollChange }/>
          <br />
          <Sliders name="Pitch" onSliderChange={ handlePitchChange }/>
      </div>
      <div className='right'>
        <ArtificialHorizon roll={ roll } pitch={ pitch } />
      </div>
    </div>
    
  )
}

export default App;
