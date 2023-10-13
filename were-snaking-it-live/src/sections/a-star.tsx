import React from 'react';
import {
  Appear,
  CodePane,
  FlexBox,
  Heading,
  ListItem,
  Slide,
  SlideLayout,
  Text,
  UnorderedList,
} from 'spectacle';
import {EmojiSlide} from '../slides/emoji_slide';
import {GameReplaySlide} from '../slides/game_replay';
import {ENGAGED, IMAGES, TEXT, THEME} from '../theme';
import {Column} from '../components/layout';
import {FitHeading} from '../components/fit-heading';
import {Strikeout} from '../components/strikeout';

export function AStarSection() {
  return (
    <>
      <SlideLayout.FullBleedImage alt="Hamburger" src={IMAGES.burger}>
        <Text>
          Photo by{' '}
          <a href="https://unsplash.com/@jonathanborba?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            Jonathan Borba
          </a>{' '}
          on{' '}
          <a href="https://unsplash.com/photos/8l8Yl2ruUsg?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            Unsplash
          </a>
        </Text>
      </SlideLayout.FullBleedImage>
      <SlideLayout.FullBleedImage alt="Fish" src={IMAGES.fish}>
        <Text>
          Photo by{' '}
          <a href="https://unsplash.com/@foodiesfeed?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            Jakub Kapusnak
          </a>{' '}
          on{' '}
          <a href="https://unsplash.com/photos/vLQzopDRSNI?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            Unsplash
          </a>
        </Text>
      </SlideLayout.FullBleedImage>
      <SlideLayout.Center>
        <CodePane language="json" style={{width: '50vw'}}>
          {`
    {
      "board": {
        "food": [
          [5, 8],
          ...
        ]
      }
    }
    `}
        </CodePane>
        <Heading fontSize="10vh">🍌🏄‍♂️</Heading>
      </SlideLayout.Center>
      <SlideLayout.Center>
        <FlexBox flexDirection="column">
          <Heading>🔍</Heading>
          <Heading>"Path finding"</Heading>
          <Text>"Pathing"</Text>
        </FlexBox>
      </SlideLayout.Center>
      <Slide>
        <Column>
          <FitHeading>A*</FitHeading>
        </Column>
      </Slide>
      <Slide>
        <FlexBox flexDirection="column">
          <Heading>Gloss-A*-y</Heading>
          <UnorderedList>
            <Appear>
              <ListItem>
                <strong>Score</strong>, e.g. distance
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <strong>Heuristic function</strong>, e.g. guess
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <strong>G score</strong>: known best
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                A <strong>"came from"</strong> map for 👆🏻
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <strong>Open set</strong>: priority queue
              </ListItem>
            </Appear>
          </UnorderedList>
        </FlexBox>
      </Slide>
      <SlideLayout.Code language="ts">{TEXT.a_star}</SlideLayout.Code>
      <EmojiSlide emoji={ENGAGED} />
      <SlideLayout.Center>
        <CodePane language="ts">{TEXT.a_star_heuristic}</CodePane>
      </SlideLayout.Center>
      <Slide>
        <Column>
          <UnorderedList>
            <ListItem fontSize="10vh">Sorts best to worst</ListItem>
            <ListItem fontSize="10vh">
              <Strikeout
                style={{color: THEME.colors.quaternary, fontSize: '7vh'}}>
                Pessimistic
              </Strikeout>{' '}
              Realistic
            </ListItem>
            <ListItem fontSize="10vh">Good Vibes Only</ListItem>
          </UnorderedList>
        </Column>
      </Slide>
      <GameReplaySlide fps={18} game_id="a-star" />
      <EmojiSlide emoji={ENGAGED} count={3} />
    </>
  );
}
