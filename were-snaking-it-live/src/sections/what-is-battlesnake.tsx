import React from 'react';
import {
  Appear,
  CodePane,
  CodeSpan,
  FlexBox,
  Heading,
  ListItem,
  Slide,
  SlideLayout,
  Stepper,
  Text,
} from 'spectacle';
import {Column, Row} from '../components/layout';
import {LocalImage} from '../components/local-image';
import {OverlayContainer, OverlayText} from '../components/overlay-text';
import {Strikeout} from '../components/strikeout';
import {ThemedUnorderedList} from '../components/themed';
import {EmojiSlide} from '../slides/emoji_slide';
import {GameReplaySlide} from '../slides/game_replay';
import {ENGAGED, IMAGES, THEME} from '../theme';

export function WhatIsBattlesnakeSection() {
  return (
    <>
      <Slide>
        <Column>
          <LocalImage data={IMAGES.battlesnakeLogo} height="30vh" />
          <Column>
            <Stepper priority={0} values={[true, false]}>
              {value =>
                value ? (
                  <Heading color={THEME.colors.quaternary}>
                    Snakes...with...axes? 🪓
                  </Heading>
                ) : (
                  <Strikeout>
                    <Heading color={THEME.colors.quaternary}>
                      Snakes...with...axes? 🪓
                    </Heading>
                  </Strikeout>
                )
              }
            </Stepper>
            <Appear priority={1}>
              <Heading style={{marginTop: 0, paddingTop: 0}}>
                Live, multiplayer Snake
              </Heading>
            </Appear>
          </Column>
        </Column>
      </Slide>
      <SlideLayout.List
        items={[
          <Text>Snakes MUST eat</Text>,
          <Text>Tick === 500 milliseconds</Text>,
          <Text>Food 15% of ticks</Text>,
        ]}
        title="Food"></SlideLayout.List>
      <SlideLayout.List
        items={[
          <Text>Bigger snake wins</Text>,
          <Text>Deeply unhappy ties</Text>,
        ]}
        title="Collisions"></SlideLayout.List>
      <OverlayContainer>
        <SlideLayout.FullBleedImage
          alt={IMAGES.battlesnakeScreenshot.alt ?? ''}
          src={IMAGES.battlesnakeScreenshot.src}
        />
        <OverlayText left="50%" top="50%" angle="0">
          <Text>
            <CodeSpan>play.battlesnake.com</CodeSpan>
          </Text>
        </OverlayText>
      </OverlayContainer>
      <SlideLayout.FullBleedImage
        alt="play.battlesnake.com screenshot, with 'code is your controller' highlighted"
        src={require('../../assets/img/screenshot-highlight.png').default}
      />
      <SlideLayout.VerticalImage
        alt={IMAGES.jsLogo.alt ?? ''}
        src={IMAGES.jsLogo.src}
      />
      <EmojiSlide emoji="📖"></EmojiSlide>
      <Slide>
        <Column alignItems="stretch">
          <LocalImage
            data={IMAGES.tis100logo}
            style={{marginLeft: '10%', width: '80%'}}
          />
          <Text></Text>
          <LocalImage
            data={IMAGES.screepsLogo}
            style={{marginLeft: '10%', width: '80%'}}
          />
        </Column>
      </Slide>
      <SlideLayout.FullBleedImage
        alt={IMAGES.createSnakeScreenshot.alt ?? ''}
        src={IMAGES.createSnakeScreenshot.src}
      />
      <SlideLayout.FullBleedImage
        alt={IMAGES.tomHollandBartender.alt ?? ''}
        src={IMAGES.tomHollandBartender.src}
      />
      <SlideLayout.Center>
        <Heading fontSize="15vh">🕸️🪝</Heading>
        <Row>
          <Column>
            <ThemedUnorderedList fit>
              <ListItem style={{listStyle: 'none'}}>
                <CodeSpan fontSize="7vh">POST /start</CodeSpan>
              </ListItem>
              <ListItem style={{listStyle: 'none'}}>
                <CodeSpan fontSize="7vh">POST /end</CodeSpan>
              </ListItem>
            </ThemedUnorderedList>
          </Column>
          <Column>
            <ThemedUnorderedList fit>
              <ListItem style={{listStyle: 'none'}}>
                <CodeSpan fontSize="7vh">GET /</CodeSpan>
              </ListItem>
              <ListItem style={{listStyle: 'none'}}>
                <CodeSpan fontSize="7vh">POST /move</CodeSpan>
              </ListItem>
            </ThemedUnorderedList>
          </Column>
        </Row>
        <Text
          style={{
            fontSize: '4vh',
            marginTop: '10vh',
            opacity: 0.6,
            textAlign: 'right',
          }}>
          "That was awful. That was your worst one yet." —My wife
        </Text>
      </SlideLayout.Center>
      <Slide>
        <Heading>
          <CodeSpan>GET /</CodeSpan>
        </Heading>
        <CodePane highlightRanges={[6, 7, 5, 4]} language="json">{`
        // Response
        {
          "apiversion":"1",
          "author":"Schoonology",
          "color":"#204581",
          "head":"shades",
          "tail":"wave",
          "version":"0.3.2"
        }
      `}</CodePane>
      </Slide>
      <Slide>
        <FlexBox flexDirection="row">
          <Heading>
            <CodeSpan>POST /start</CodeSpan>
          </Heading>
          <Heading>
            <CodeSpan>POST /end</CodeSpan>
          </Heading>
        </FlexBox>
        <CodePane language="json">{`
        // Request
        {
          "game": { "id": ..., "ruleset": ..., },
          "turn": 0,
          "board": ...
        }
      `}</CodePane>
        <CodePane language="json">{`
        // Response
        🟢 200 OK 👍🏻🙌🏻💯🔥
      `}</CodePane>
      </Slide>
      <Slide>
        <Heading>
          <CodeSpan>POST /move</CodeSpan>
        </Heading>
        <CodePane language="json">{`
        // Request
        {
          "game": { "id": ..., "ruleset": ..., },
          "turn": 0,
          "board": {
            "height": 11, "width": 11,
            "food": [...], "hazards": [...], "snakes": [...]
          },
        }
      `}</CodePane>
        <CodePane language="json">{`
        // Response
        {
          "move": "left" | "right" | "up" | "down"
        }
      `}</CodePane>
      </Slide>
      <EmojiSlide emoji={ENGAGED} count={2}></EmojiSlide>
      <GameReplaySlide game_id="julia-child"></GameReplaySlide>
    </>
  );
}
