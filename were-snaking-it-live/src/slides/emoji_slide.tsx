import React from 'react';
import {Heading, SlideLayout} from 'spectacle';

type EmojiSlideProps = {
  emoji: string;

  count?: number;
  size?: string | number;
};

export function EmojiSlide({count, emoji, size}: EmojiSlideProps) {
  let children = new Array(count ?? 1).fill(emoji).join('');

  return (
    <SlideLayout.Center>
      <Heading fontSize={size || '25vh'}>{children}</Heading>
    </SlideLayout.Center>
  );
}
