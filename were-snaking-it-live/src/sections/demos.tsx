import React from 'react';
import {GameReplaySlide} from '../slides/game_replay';

export function DemoSection() {
  return (
    <>
      <GameReplaySlide fps={18} game_id="duel" title="Duel" />
      <GameReplaySlide fps={18} game_id="standard" title="Standard" />
      <GameReplaySlide fps={18} game_id="constrictor" title="Constrictor" />
      <GameReplaySlide fps={18} game_id="royale" title="Royale" />
      <GameReplaySlide fps={18} game_id="snail" title="Snail" />
    </>
  );
}
