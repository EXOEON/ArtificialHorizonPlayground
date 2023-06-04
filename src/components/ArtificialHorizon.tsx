import React from 'react';

// Setting roll and pitch to Integers
interface Props {
  roll: number;
  pitch: number;
}

// Component
const ArtificialHorizon: React.FC<Props> = (props: Props) => {
  // CSS for the change of pitch and roll (contains curly braces)
  const css = `
    .img {
      transform: rotate(${props.roll}deg);
      position: relative;
      top: ${props.pitch}px;
    }
  `;
  
  // Main return statement
  return (
    <>
      <div className="image-container">
        <img src="src/assets/artihorzi.png" className="img" alt="Artificial Horizon" />
        <img src="src/assets/thing.png" className='crosshair'/>
      </div>
      <style>{css}</style>
    </>
  );
};

export default ArtificialHorizon;


