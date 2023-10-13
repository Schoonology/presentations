import React from 'react';
import {Appear, Heading, ListItem, SlideLayout, UnorderedList} from 'spectacle';
import {EmojiSlide} from '../slides/emoji_slide';
import {ENGAGED} from '../theme';

export function NextStepSection() {
  return (
    <>
      <SlideLayout.Center>
        <Heading>What now?</Heading>
        <UnorderedList>
          <Appear>
            <ListItem>Decision-making</ListItem>
          </Appear>
          <Appear>
            <ListItem>Frameworks</ListItem>
          </Appear>
          <Appear>
            <ListItem>Languages</ListItem>
          </Appear>
          <Appear>
            <ListItem>Hosting</ListItem>
          </Appear>
        </UnorderedList>
      </SlideLayout.Center>
      <SlideLayout.Center>
        <Heading>Advanced</Heading>
        <UnorderedList>
          <Appear>
            <ListItem>Minimax</ListItem>
          </Appear>
          <Appear>
            <ListItem>Genetic algorithms</ListItem>
          </Appear>
          <Appear>
            <ListItem>Generative AI</ListItem>
          </Appear>
        </UnorderedList>
      </SlideLayout.Center>
      <EmojiSlide emoji={ENGAGED} />
    </>
  );
}
