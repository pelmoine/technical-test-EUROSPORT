import React, {useState, useEffect} from 'react';
import Profile from './components/profile-components'

 export default function App() {
   const [players, setPlayers] = useState([]);

   async function getPlayers() {
     const response = await fetch(
         `https://eurosportdigital.github.io/eurosport-web-developer-recruitment/headtohead.json`);
     response.json()
     .then(json => setPlayers(json.players))
     .catch(err => console.error("error during parsing to json : ", err));
   }

   useEffect(() => {
       getPlayers();
   },[]);


   return (
       <div style={styles.app}>
         {players.map(( player, index) =>
           <Profile key={index} player={player}/>
         )}
       </div>
   );
 }

const styles = {
  app : {
    backgroundColor: '#fff',
    height: '100vh',
    width: '100vw',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
};
