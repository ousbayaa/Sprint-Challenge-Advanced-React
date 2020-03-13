import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import PlayerData from './Components/PlayerData.js';
import Navbar from './Components/NavBar';

function App() {
  const [players, setPlayers] = useState([{}])

  useEffect(() => {
    axios
    .get('http://localhost:5000/api/players')
    .then(res => {
      console.log("App.js useeffect: ", res.data)
      console.log("Useeffect result data: ", players)
      setPlayers(res.data);
    })
    .catch(error => {
      console.log('Server Error', error)
    })

  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <h1>Women's World Cup</h1>
      <PlayerData players={players} />
      </header>
    </div>
  );
}
export default App;