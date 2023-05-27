import './App.css';
import Sliders from './components/Sliders';
import ArtificialHorizon from './components/ArtificialHorizon';
import { useState } from 'react';

function App() {
  const [Roll, SetRoll] = useState(0)
  const [Pitch, SetPitch] = useState(-365)


  const handleRollChange = (name: string, value: number) => {
    SetRoll(-value);
    console.log('Roll: ', Roll);
  };
  const handlePitchChange = (name: string, value: number) => {
    SetPitch(5.2*value-365);
    console.log('Pitch: ', Pitch);
  };

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
