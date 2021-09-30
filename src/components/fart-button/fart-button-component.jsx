import React from 'react'
import useSound from 'use-sound';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPoop } from '@fortawesome/free-solid-svg-icons'

import './fart-button-styles.scss'
import Fart from '../../Audio/Fart.mp3'



const FartButton = () => {
  const [play] = useSound(Fart);

  return <div>
    <FontAwesomeIcon icon={faPoop}
    onClick={play}
    />
    </div>
};

export default FartButton