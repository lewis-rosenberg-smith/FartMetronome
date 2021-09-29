import React, { useState } from 'react';
import FartButton from '../fart-button/fart-button-component';

function BpmForm(props) {

  const [bpm, setBpm] = useState(0)
  
  //Sets bpm, and sends alert displaying New BPM
  const handleSubmit = (evt) => {
    evt.preventDefault();
    alert(`You farted at ${bpm} beats per minute`)
  }

  return (
    <>
      <form onSubmit = {handleSubmit}>
        <div class="field">
          <label class="label">Set Tempo</label>
            <div class="control has-icons-left">
              <input 
                class="input" 
                type="text" 
                placeholder="beats per minute" 
                value={bpm} 
                onChange={e => setBpm(e.target.value)}/>
              <span class='icon is-small is-left'/>
                <i class='fas fa-poop'/>
            </div>
        </div>

        <div class="field is-grouped">
          <div class="control">
            <FartButton/>
          </div>
        </div>
      </form>
    </>
  )
}

export default BpmForm