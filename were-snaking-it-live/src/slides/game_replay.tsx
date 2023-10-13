import React from 'react';
import {Slide} from 'spectacle';

const ROOT_URL = 'http://localhost:5173';
const OPTIONS = [
  'engine=local',
  'showCoords=true',
  // 'showScoreboard=false',
].join('&');

type GameReplayProps = {
  game_id: string;

  fps?: number;
  title?: string;
};

export function GameReplay({fps, game_id, title}: GameReplayProps) {
  const replay_url = `${ROOT_URL}/?game=${game_id}&${OPTIONS}${
    title ? '&title=' + title : ''
  }${fps ? '&fps=' + fps : ''}`;

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

export function GameReplaySlide({fps, game_id, title}: GameReplayProps) {
  return (
    <Slide>
      <GameReplay fps={fps} game_id={game_id} title={title} />
    </Slide>
  );
}
