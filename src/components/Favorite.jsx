import React from 'react';
import OneSong from './OneSong';



const Favorite = ({songs, onClick}) => {
    const title = "Your favorite music"
  return <>
  <h3 className='favorite-title'>{title}</h3>
  <div className='all-songs'>
       
      {songs.map((s) => (
          <OneSong  song={s} key={s.id} inFavorite={1} onClick={onClick}/>
      ))}
     
  </div>;
  </>
};

export default Favorite;
