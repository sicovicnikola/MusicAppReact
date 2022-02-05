import './App.css';
import NavBar from './components/NavBar';
import Songs from './components/Songs';
import {useState} from "react";
import img1 from './images/brena.png';
import img2 from './images/seka.png';
import img3 from './images/tina.png';
import img4 from './images/lukas.png';
import img5 from './images/corona.png';
import img6 from './images/zlatnodete.png';
import img7 from './images/2bona.png';
import Favorite from './components/Favorite';
import {BrowserRouter, Routes, Route, Lonk} from 'react-router-dom'

function App() {

  const[favoriteSongs,setFavoritesSongs] = useState([]);
  const[songText, setSongText] = useState("");
  const [songs] = useState([
  {
    id: 1,
    title: "Jugoslovenka",
    singer: "Lepa Brena",
    duration: "4:09",
    link: "https://www.youtube.com/watch?v=gsKn5KX6XnU",
    img: img1,
    isFavorite: 0,
    text: " Odakle si lijepa djevojko \n" +
    
     " Ko ti rodi oko plavetno \n" +
    " Ko ti dade kosu zlacanu \n" +
    " Ko te stvori tako vatrenu \n" +
    " Ko ti dade kosu zlacanu \n" +
    " Ko te stvori tako vatrenu \n" +
    
    " Oci su mi more Jadransko\n" +
    " Kose su mi klasje Panonsko\n" +
    " Sestra mi je dusa Slovenska\n" +
    " Ja sam Jugoslovenka\n" +
    
    " Oci su mi more Jadransko\n" +
    " Kose su mi klasje Panonsko\n" +
    " Sestra mi je dusa Slovenska\n" +
    " Ja sam uJgoslovenka\n"
  },
  {
    id: 2,
    title: "Crnu i zlatnu",
    singer: "Seka Aleksić",
    duration: "3:57",
    link: "https://www.youtube.com/watch?v=_SKe5AsjV1k",
    img: img2,
    isFavorite: 0,
    text: " Ne moraš da budeš lep \n"+
    " Da bi za mene bio pravi\n"+
    " Ne moraš da budeš moj\n"+
    " Svejedno bih te ukrala\n"+
    " Umetnik u ljubavi\n"+
    " Ako si, onda mi se javi\n"+
    " Da po meni slikaš ti\n"+
    " Pejzaže golim rukama\n"+
    " Pomešaj ove noći crnu i zlatnu\n"+
    " Po mojoj koži, slikaj kao po platnu\n"+
    " Diraj me usnama po telu i vratu\n"+
    " Pa onda stavi me u ram\n"+
    " Pomešaj ove noći crnu i zlatnu\n"+
    " Po mojoj koži, slikaj kao po platnu\n"+
    " Diraj me usnama po telu i vratu\n"+
    " Pa onda stavi me u ram\n"+
    " Da znam da tebi pripadam"
  },
  {
   
    id: 3,
    title: "Bunda od nerca",
    singer: "Tina Ivanović",
    duration: "4:11",
    link: "https://www.youtube.com/watch?v=kasekfqFSyk",
    img: img3,
    isFavorite: 0,
    text: " Pokazi mi da si sarmantan\n"+
    " pokazi se da si galantan\n"+
    " potrudi se pa me zavedi\n"+
    " s boginjom me uporedi\n"+
    
    " Pokazi da si musko na delu\n"+
    " da nisi snob u skupom odelu\n"+
    " pokloni mi sitnice razne\n"+
    " pusti reci prazne\n"+
    
    " Ref. 2x\n"+
    " Ako imas petlju, ako imas herca\n"+
    " pokloni mi bundu od nerca\n"+
    " ako imas petlju, ako imas cuku\n"+
    " dijamantski prsten stavi mi na ruku"
  },
  {
   
    id: 4,
    title: "Aca Lukas",
    singer: "Burbon",
    duration: "3:33",
    link: "https://www.youtube.com/watch?v=QtGv_szq75o",
    img: img4,
    isFavorite: 0,
    text: " Odkada si s njim\n"+
    " otisla daleko\n"+
    " svaki otrov mi\n"+
    " klizi ko mleko\n"+
    
    " Ref.\n"+
    " Muzika u mojoj sobi tvoja je\n"+
    " tacka koju gledam nocas tvoja je\n"+
    " sve je ovde tvoje jer i ja sam tvoj\n"+
    " ali ovaj burbon on je samo moj\n"+
    
    " Odkad nisi tu\n"+
    " zivot mi je stao\n"+
    " samo pogledaj\n"+
    " sta sam postao"
  },
  {
   
    id: 5,
    title: "Corona",
    singer: "VVS",
    duration: "3:05",
    link: "https://www.youtube.com/watch?v=6x8TopKx7r8",
    img: img5,
    isFavorite: 0,
    text: " Štekovi puni i uvek se mrvi ta marihuana\n"+
    " U kraju panduri me cimaju okolo svakoga dana\n"+
    " Cash in, cash out, cash in, cash out\n"+
    " VVS\n"+
    " Isprekidan uvek u klubu sam noću k'o linije\n"+
    " Od nule smo stvorili sve, sad je sve isplativije\n"+
    " Sad naši su poslovi čisti k'o koks iz Bolivije\n"+
    " A ona mi kaže da nije upoznala finijeg\n"+
    " Ona bi život bez stresa\n"+
    " Ja bi' i lovu i kola i stan\n"+
    " Život k'o triler mi je kompleksan\n"+
    " Najbolje čuvamo uvek za kraj"
  },
  {
   
    id: 6,
    title: "Coby",
    singer: "Zlatno dete",
    duration: "3:25",
    link: "https://www.youtube.com/watch?v=40Py0ZBxKBs",
    img: img6,
    isFavorite: 0,
    text: " Bilo je to proleće osamdeset pete\n"+
    " Tad je majka dobila tako zlatno dete\n"+
    " Odmalena antihrist, problemi i štete\n"+
    " A ti si, majko, rodila tako zlatno dete\n"+
    
    " Aman-aman, aman-aman\n"+
    " Znaš da nisam takav, majko, ja\n"+
    " Aman-aman, aman-aman\n"+
    " Ovde takva nam je, majko, sudbina (Ajde)\n"+
    
    " Tvrde žurke, afteri, alkohol, tablete\n"+
    " A ti si, majko, rodila tako zlatno dete\n"+
    " Odmalena dugovi, jure me i prete\n"+
    " A ti si, majko, rodila tako zlatno dete"
  },
  
  {
   
    id: 7,
    title: "2Bona",
    singer: "Habanero",
    duration: "3:33",
    link: "https://www.youtube.com/watch?v=1k-UzfEGCSk",
    img: img7,
    isFavorite: 0,
    text: " Сите мислат е лесно\n"+
    " Лоши ствари правам свесно\n"+
    " А мене ми е интересно\n"+
    " У клуб гледам нема место\n"+
    " Ново утро нов ден\n"+
    " Друг хотел\n"+
    " Торби пуни cash\n"+
    " Жени Top 10\n"+
    " Види ме ќе имам се, како што е редот\n"+
    " И кажи зошто сте, зошто сте љути habanero"
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

  function addText(id){
    setSongText("");
    favoriteSongs.forEach((fs)=>{
     if(fs.id === id){
       setSongText(fs.text);
       console.log(fs.id + fs.text);
     }
    });
  }

 const prom = <h1>pozdrav</h1>

  return (
    <BrowserRouter className="App">
     <NavBar />
     <Routes>
       <Route path="/" element={<Songs songs={songs} onClick={addSong} />}/>
       <Route path="/favorites" element={<Favorite songs={favoriteSongs} onClick={removeSong} text={songText} addText={addText}/>} />
     </Routes>
     
     
    </BrowserRouter>
  );
}

export default App;
