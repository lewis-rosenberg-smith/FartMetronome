import React, { useState } from 'react';

function BpmForm(props) {

  const [bpm, setBpm] = useState(69420)

  const handleSubmit = (evt) => {
    evt.preventDefault();
    alert(`Display BPM ${bpm}`)
  }

  return (
    <form onSubmit = {handleSubmit}>
      <label for='bpm'> bpm 
        <input 
          type='text' 
          id='BPM' 
          value={bpm} 
          name='BPM' 
          onChange={e => setBpm(e.target.value)}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default BpmForm