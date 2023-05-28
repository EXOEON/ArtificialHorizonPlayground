import React, { useState } from 'react';

// Interfcing props
interface Props {
  name: string;
  onSliderChange: (name: string, value: number) => void;
}

// Main component
function Sliders(props: Props) {
  // Usesate, exported to parent
  const [sliderValue, setSliderValue] = useState(0);

  // Function outline
  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);
    setSliderValue(value);
    props.onSliderChange(props.name, value); // Call the function passed through props
  };

  // Main return statement
  return (
    <>
      <h2>{props.name}</h2>
      <div className="slidecontainer">
        <input
          type="range"
          min="-90"
          max="90"
          className="slider"
          id={props.name}
          value={sliderValue}
          onChange={handleSliderChange}
        />
      </div>
      <h2>{sliderValue}°</h2>
    </>
  );
}

export default Sliders;

