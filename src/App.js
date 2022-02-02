import './App.css';
import NavBar from './components/NavBar';
import Songs from './components/Songs';
import {useState} from "react";
import img1 from './components/images/brena.png';
import img2 from './components/images/seka.png';
import img3 from './components/images/tina.png';
import img4 from './components/images/lukas.png';
import img5 from './components/images/corona.png';
import img6 from './components/images/zlatnodete.png';
import img7 from './components/images/2bona.png';
import Favorite from './components/Favorite';
import {BrowserRouter, Routes, Route, Lonk} from 'react-router-dom'

function App() {

  const[favoriteSongs,setFavoritesSongs] = useState([]);
  const [songs] = useState([
  {
    id: 1,
    title: "Hajde, Hajde",
    singer: "Lepa Brena",
    duration: "2:57",
    link: "https://www.youtube.com/watch?v=IcgwXSfJ7Bg",
    img: img1,
    isFavorite: 0
  },
  {
    id: 2,
    title: "Crno i zlatnu",
    singer: "Seka Aleksić",
    duration: "3:57",
    link: "https://www.youtube.com/watch?v=_SKe5AsjV1k",
    img: img2,
    isFavorite: 0
  },
  {
   
    id: 3,
    title: "Bunda od nerca",
    singer: "Tina Ivanović",
    duration: "4:11",
    link: "https://www.youtube.com/watch?v=kasekfqFSyk",
    img: img3,
    isFavorite: 0
  },
  {
   
    id: 4,
    title: "Aca Lukas",
    singer: "Burbon",
    duration: "3:33",
    link: "https://www.youtube.com/watch?v=QtGv_szq75o",
    img: img4,
    isFavorite: 0
  },
  {
   
    id: 5,
    title: "Corona",
    singer: "VVS",
    duration: "3:05",
    link: "https://www.youtube.com/watch?v=6x8TopKx7r8",
    img: img5,
    isFavorite: 0
  },
  {
   
    id: 6,
    title: "Coby",
    singer: "Zlatno dete",
    duration: "3:25",
    link: "https://www.youtube.com/watch?v=40Py0ZBxKBs",
    img: img6,
    isFavorite: 0
  },
  
  {
   
    id: 7,
    title: "2Bona",
    singer: "Habanero",
    duration: "3:33",
    link: "https://www.youtube.com/watch?v=1k-UzfEGCSk",
    img: img7,
    isFavorite: 0
  }

  ]);

  // function metoda(title){
  //   console.log("metoda" + title)
  // }

  function refresh(){
    let newArray = songs.filter((s) => s.isFavorite === 1);
    setFavoritesSongs(newArray);
  }

  function refreshRemove(){
    let newArray = favoriteSongs.filter((s) => s.isFavorite === 1);
    setFavoritesSongs(newArray);
  }

  function addSong(id){
    songs.forEach((s) => {
      if (s.id === id) {
        s.isFavorite=1;
      }
    });
    refresh();

  }

  function removeSong(id){
    
    favoriteSongs.forEach((s) => {
      if(s.id === id) { 
        var index = favoriteSongs.indexOf(s);
        s.isFavorite=0;
        delete favoriteSongs[index];
        
      }
    });
    refreshRemove();
  }

 const prom = <h1>pozdrav</h1>

  return (
    <BrowserRouter className="App">
     <NavBar />
     <Routes>
       <Route path="/" element={<Songs songs={songs} onClick={addSong} />}/>
       <Route path="/favorites" element={<Favorite songs={favoriteSongs} onClick={removeSong}/>} />
     </Routes>
     
     
    </BrowserRouter>
  );
}

export default App;
