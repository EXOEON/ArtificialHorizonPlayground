import React from 'react';

interface Props {
  Roll: number;
  Pitch: number;
}

const ArtificialHorizon: React.FC<Props> = (props: Props) => {
  const css = `
    .img {
      transform: rotate(${props.Roll}deg);
      position: relative;
      top: ${props.Pitch}px;
    }
  `;

  return (
    <>
      <div className="image-container">
        <img src="src/assets/artihorzi.png" className="img" alt="Artificial Horizon" />
        <img src="src/assets/thing.png" className='center'/>
      </div>
      <style>{css}</style>
    </>
  );
};

export default ArtificialHorizon;


