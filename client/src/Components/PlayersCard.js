import React from 'react';
import {Card, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';

const PlayersCard = props => {
  console.log('PlayersCard', props);
  return (
    <div className='player-card'>
      <Card key={props.player.id}>
          <CardBody>
            <CardTitle >{props.player.name}</CardTitle>
            <CardSubtitle>{props.player.country}</CardSubtitle>
            <CardText name='search'> {props.player.searches} Searches</CardText>
          </CardBody>
      </Card>
    </div>
  );
};

export default PlayersCard;