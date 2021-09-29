import React from 'react'
import useSound from 'use-sound';

import './fart-button-styles.scss'
import Fart from '../../Audio/Fart.mp3'

const FartButton = () => {
  const [play] = useSound(Fart);
  return <div>
    <button 
    class='button is-danger is-active is-centered'
    onClick={play}>FART!
    </button>
    </div>
};

export default FartButton