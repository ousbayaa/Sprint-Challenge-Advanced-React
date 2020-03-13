import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import PlayerData from './Components/PlayerData.js';
import NavBar from './Components/NavBar';

// class App extends Component {
//   constructor() {
//   super()
//   this.state= {
//     players: [],
//     }
//   }
//   componentDidMount() {
//     axios
//     .get(''http://localhost:5000/api/players'')
//     .then(res => {
//       this.setState({
//         players: res.data
//       })

//     })
      
//   render(){}

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
        <NavBar />
        <h1>Women's World Cup</h1>
      </header>
      <PlayerData players={players} />
    </div>
  );
}
export default App;