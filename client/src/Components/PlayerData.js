import React from 'react';
import PlayersCard from './PlayersCard.js';

const PlayerData = props => {
  console.log('PlayerData', props);

  return (
    <div className='container'>
      <div className='entry'>
        {props.players.map(player => {
          return <PlayersCard player={player} />;
        })}
      </div>
    </div>
  );
};

export default PlayerData;