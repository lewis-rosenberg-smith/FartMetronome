import React, { useState } from 'react';

import fartTim from '../src/Audio/Fart.mp3'
import './Metronome.scss';

const Metronome = () => {

  const [bpm, setBpm] = useState("69");
  const [playing] = useState(false);
  const [count] = useState(0);
  const [beatsPerMeasure] = useState(4);
  const fart1 = new Audio(fartTim);

  const startStop = () => {
    fart1.play();
  };

  return (
    <div className="metronome">
      <div className="bpm-slider">
        <div>{bpm} BPM</div>
        <input 
        type="range" 
        min= "69" 
        max="420" 
        value={bpm} 
        onChange= {e=> setBpm(e.target.value)}/>
      </div>
      <button onClick={startStop}>{playing ? 'Plop' : 'Fart'}</button>
    </div>
  );
};

export default Metronome;
