import React from 'react'
import useSound from 'use-sound';

import Fart from '../Audio/Fart.mp3'

const FartButton = () => {
  const [play] = useSound(Fart);
  return <button onClick={play}>Fart!</button>;
};

export default FartButton