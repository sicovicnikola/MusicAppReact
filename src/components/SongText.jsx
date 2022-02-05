import React from 'react';

function SongText({text}) {
  return <div className='song-text'>

  <textarea placeholder='Text of song...' className='song-text-area' value={text} readOnly> 
 </textarea> 
 
  </div>;
}

export default SongText;
