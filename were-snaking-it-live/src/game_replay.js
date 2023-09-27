import React from 'react';
import {Slide} from 'spectacle';

const ROOT_URL = 'http://localhost:5173';
const OPTIONS = [
  'engine=local',
  'showCoords=true',
  'showScoreboard=false',
].join('&');

export function GameReplay({game_id, title}) {
  const replay_url = `${ROOT_URL}/?game=${game_id}&${OPTIONS}&${
    title ? 'title=' + title : ''
  }`;

  return (
    <>
      <iframe
        src={replay_url}
        style={{border: 0, margin: '0 auto'}}
        height="90%"
        width="85%"
      />
    </>
  );
}

export function GameReplaySlide({game_id, title}) {
  return (
    <Slide>
      <GameReplay game_id={game_id} title={title} />
    </Slide>
  );
}
