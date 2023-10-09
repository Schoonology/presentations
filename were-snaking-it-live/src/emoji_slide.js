import React from 'react';
import {Heading, SlideLayout} from 'spectacle';

export function EmojiSlide({count, emoji, size}) {
  let children = (new Array(count ?? 1)).fill(emoji).join('');

  return (
    <SlideLayout.Center>
      <Heading fontSize={size || "25vh"}>
        {children}
      </Heading>
    </SlideLayout.Center>
  );
}
