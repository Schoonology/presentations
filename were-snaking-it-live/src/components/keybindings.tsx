import React, {useContext} from 'react';
import {DeckContext, useMousetrap} from 'spectacle';

export function Keybindings() {
  const deck = useContext(DeckContext);

  // Customized to work with a Logitech R400.
  useMousetrap(
    {
      pageup() {
        deck.stepBackward();
      },
      pagedown() {
        deck.stepForward();
      },
    },
    [],
  );

  return <></>;
}
