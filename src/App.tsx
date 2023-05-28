import './App.css';
import Sliders from './components/Sliders';
import ArtificialHorizon from './components/ArtificialHorizon';
import { useState } from 'react';

// Main component
function App() {
  // Roll state
  const [Roll, SetRoll] = useState(0)
  //Pitch state
  const [Pitch, SetPitch] = useState(-365)

  // Roll and pitch change event handlers
  const handleRollChange = (name: string, value: number) => {
    SetRoll(-value);
    console.log('Roll: ', Roll);
  };
  const handlePitchChange = (name: string, value: number) => {
    SetPitch(5.2*value-365);
    console.log('Pitch: ', Pitch);
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
        <ArtificialHorizon Roll={ Roll } Pitch={ Pitch } />
      </div>
    </div>
    
  )
}

export default App;
