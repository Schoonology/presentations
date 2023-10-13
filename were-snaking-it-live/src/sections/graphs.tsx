import React from 'react';
import {Heading, Image, SlideLayout} from 'spectacle';
import {EmojiSlide} from '../slides/emoji_slide';
import {ART, ENGAGED, IMAGES, THEME} from '../theme';

export function GraphsExplanationSection() {
  return (
    <>
      <EmojiSlide emoji="🧠" />
      <SlideLayout.Center>
        <Image
          alt="A graph for normies"
          src={IMAGES.graph_normie}
          style={{height: '100vh'}}
        />
      </SlideLayout.Center>
      <SlideLayout.Center>
        <Image
          alt="A graph for computer scientists"
          src={IMAGES.graph_cs}
          style={{height: '80vh'}}
        />
      </SlideLayout.Center>
      <SlideLayout.Center>
        <Image
          alt="Another graph for computer scientists"
          src={IMAGES.graph_cs_2}
          style={{height: '80vh'}}
        />
      </SlideLayout.Center>
      <SlideLayout.Center backgroundColor={THEME.colors.primary}>
        <Image
          alt="A tree for computer scientists"
          src={IMAGES.tree_cs}
          style={{height: '80vh'}}
        />
      </SlideLayout.Center>
      <SlideLayout.Center>
        <Image src={ART.chaotic_evil} height="60vh"></Image>
      </SlideLayout.Center>
      <SlideLayout.Center>
        <Heading>⭕️ Node</Heading>
        <Heading>〰️ Edge</Heading>
      </SlideLayout.Center>
      <SlideLayout.Center>
        <Heading fontSize="50vh">No.</Heading>
      </SlideLayout.Center>
      <SlideLayout.Center>
        <Image src={ART.board} height="60vh"></Image>
      </SlideLayout.Center>
      <EmojiSlide emoji={ENGAGED} />
    </>
  );
}
