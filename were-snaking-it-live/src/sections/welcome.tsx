import React from 'react';
import {
  Appear,
  CodePane,
  FlexBox,
  Heading,
  ListItem,
  OrderedList,
  Slide,
  SlideLayout,
  Text,
} from 'spectacle';
import {Attribution} from '../components/attribution';
import {FitHeading} from '../components/fit-heading';
import {Column, Row} from '../components/layout';
import {LocalImage} from '../components/local-image';
import {OverlayContainer, OverlayText} from '../components/overlay-text';
import {ThemedListItem, ThemedOrderedList} from '../components/themed';
import {Strikeout} from '../components/strikeout';
import {ENGAGED, EXTRA_COLORS, IMAGES, THEME, UNSPLASH} from '../theme';

const DROPCAP_STYLE = {
  color: THEME.colors.secondary,
  fontWeight: 700,
};

export function WelcomeSection() {
  return (
    <>
      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <FitHeading color={THEME.colors.primary}>Welcome</FitHeading>
        </FlexBox>
      </Slide>
      <SlideLayout.List
        items={[
          <Text>
            <span style={DROPCAP_STYLE}>S</span>ingle responsibility
          </Text>,
          <Text>
            <span style={DROPCAP_STYLE}>N</span>o surprises
          </Text>,
          <Text>
            <span style={DROPCAP_STYLE}>A</span>synchronous
          </Text>,
          <Text>
            <span style={DROPCAP_STYLE}>K</span>omposable
          </Text>,
          <Text>
            <span style={DROPCAP_STYLE}>E</span>ntirely written in JavaScript
          </Text>,
        ]}
        title="S.N.A.K.E. Principle"></SlideLayout.List>
      <Slide>
        <Attribution attrib="Credit: CoffeeScript docs">
          <CodePane language="coffee">{`
        renderStarRating = ({ rating, maxStars }) ->
          <aside title={"Rating: #{rating} of #{maxStars} stars"}>
            {for wholeStar in [0...Math.floor(rating)]
              <Star className="wholeStar" key={wholeStar} />}
            {if rating % 1 isnt 0
              <Star className="halfStar" />}
            {for emptyStar in [Math.ceil(rating)...maxStars]
              <Star className="emptyStar" key={emptyStar} />}
          </aside>
        `}</CodePane>
        </Attribution>
        <FlexBox flexDirection="column">
          <Heading></Heading>
          <Strikeout>
            <Heading
              color={THEME.colors.quaternary}
              style={{margin: 0, padding: 0}}>
              CoffeeScript
            </Heading>
          </Strikeout>
          <Heading style={{marginTop: 0, paddingTop: 0}}>snakeJS</Heading>
        </FlexBox>
      </Slide>
      <Slide>
        <OverlayContainer>
          <CodePane language="ts">{`
        import { Keyboard } from 'react-native';
        import { atom } from 'recoil';

        export const re_keyboard_open = atom<boolean>({
        ⇥key: 'keyboard-open',
        ⇥default: false,
        ⇥effects: [
        ⇥⇥({set_self}) => {
        ⇥⇥⇥const subscriptions = [
        ⇥⇥⇥⇥Keyboard.add_listener('keyboard_will_show', () => set_self(true)),
        ⇥⇥⇥⇥Keyboard.add_listener('keyboard_did_show', () => set_self(true)),
        ⇥⇥⇥⇥Keyboard.add_listener('keyboard_did_hide', () => set_self(false)),
        ⇥⇥⇥];
        ⇥⇥⇥
        ⇥⇥⇥return () => subscriptions.map(sub => sub.remove());
        ⇥⇥},
        ⇥],
        });
        `}</CodePane>
          <Appear>
            <OverlayText left="30%" top="30%" angle="-30deg">
              <Heading>Snake case!</Heading>
            </OverlayText>
          </Appear>
          <Appear>
            <OverlayText left="70%" top="40%" angle="15deg">
              <Heading
                style={{color: THEME.colors.quaternary, fontSize: '15vh'}}>
                Tabs!
              </Heading>
            </OverlayText>
          </Appear>
          <Appear>
            <OverlayText left="50%" top="100%" angle="-5deg">
              <Heading style={{color: THEME.colors.quinary, fontSize: '10vh'}}>
                Hungarian notation!
              </Heading>
            </OverlayText>
          </Appear>
        </OverlayContainer>
      </Slide>
      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <FitHeading>No.</FitHeading>
        </FlexBox>
      </Slide>
      <Slide>
        <Row>
          <Column>
            <Heading style={{color: THEME.colors.quaternary, fontSize: '30vh'}}>
              AI
            </Heading>
          </Column>
          <Column>
            <Heading style={{color: EXTRA_COLORS.gold, fontSize: '30vh'}}>
              JS
            </Heading>
          </Column>
        </Row>
        <Appear>
          <OverlayText left="50%" top="50%" angle="-20deg">
            <Heading style={{color: THEME.colors.quinary, fontSize: '40vh'}}>
              "Jokes"
            </Heading>
          </OverlayText>
        </Appear>
      </Slide>
      <SlideLayout.FullBleedImage
        alt={UNSPLASH.game_over.alt ?? ''}
        src={UNSPLASH.game_over.src}
      />
      <SlideLayout.Center>
        <LocalImage data={IMAGES.snakeGame} height="80vh" />
        <OverlayText left="40%" top="50%" angle="30deg">
          <Heading color="white">snek ----&gt;</Heading>
        </OverlayText>
      </SlideLayout.Center>
      <SlideLayout.FullBleedImage alt="Nokia 6110" src={IMAGES.nokia} />
      <SlideLayout.FullBleedImage
        alt="QuickBasic Nibbles"
        src={IMAGES.nibbles}
      />
      <SlideLayout.Center>
        <Heading>Rules of Snake</Heading>
        <OrderedList>
          <Appear>
            <ListItem>🕰️ Time marches on</ListItem>
          </Appear>
          <Appear>
            <ListItem>Snake slithers on 🐍</ListItem>
          </Appear>
          <Appear>
            <ListItem>Arrow ➡️ direction</ListItem>
          </Appear>
          <Appear>
            <ListItem>MacGuffins 🍏🍎🔢</ListItem>
          </Appear>
          <Appear>
            <ListItem>☠️ DEATH</ListItem>
          </Appear>
          <Appear>
            <ListItem>Live as long as possible ✅</ListItem>
          </Appear>
        </OrderedList>
      </SlideLayout.Center>
      <SlideLayout.Center>
        <Heading fontSize="25vh">{ENGAGED}</Heading>
      </SlideLayout.Center>
      <Slide>
        <Column>
          <ThemedOrderedList fit>
            <ThemedListItem>Don&apos;t clap</ThemedListItem>
            <ThemedListItem>Come find me</ThemedListItem>
          </ThemedOrderedList>
        </Column>
      </Slide>
      <SlideLayout.Center>
        <Heading>DIY Snek!</Heading>
        <OrderedList>
          <ListItem>Sockets!</ListItem>
          <ListItem>Canvas!</ListItem>
          <ListItem>Optimism!</ListItem>
        </OrderedList>
      </SlideLayout.Center>
      <SlideLayout.Center>
        <Heading fontSize="50vh">No.</Heading>
      </SlideLayout.Center>
      <Slide>
        <LocalImage data={IMAGES.battlesnakeLogo} />
      </Slide>
    </>
  );
}
