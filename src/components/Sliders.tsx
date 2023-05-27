import React, { useState } from 'react';

interface Props {
  name: string;
  onSliderChange: (name: string, value: number) => void;
}

function Sliders(props: Props) {
  const [sliderValue, setSliderValue] = useState(0);

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);
    setSliderValue(value);
    props.onSliderChange(props.name, value); // Call the function passed through props
  };

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

