import React from 'react';
import OneSong from './OneSong';

const Songs = ({songs, onClick }) => {
  return <div className='all-songs'>
  {songs.map((s)=>(

   <OneSong song={s} key={s.id}  onClick={onClick} inFavorite={0}/>
  ))};

  </div>;
};

export default Songs;
