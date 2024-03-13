import React from 'react';
import {
  Appear,
  CodePane,
  CodeSpan,
  FlexBox,
  Heading,
  ListItem,
  MarkdownSlide,
  Slide,
  SlideLayout,
  Stepper,
  Text,
} from 'spectacle';
import {Column, Row} from '../components/layout';
import {LocalImage} from '../components/local-image';
import {Strikeout} from '../components/strikeout';
import {OverlayContainer, OverlayText} from '../components/overlay-text';
import {ENGAGED, IMAGES} from '../theme';
import {ThemedUnorderedList} from '../components/themed';

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
                  <Heading>Snakes...with...axes? 🪓</Heading>
                ) : (
                  <Strikeout>
                    <Heading>Snakes...with...axes? 🪓</Heading>
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
          <Text>
            Each Snake MUST eat something every 100 ticks, or it dies of
            starvation.
          </Text>,
          <Text>
            Each tick is 500 milliseconds, so your snake has a little under a
            minute to live without food.
          </Text>,
          <Text>
            For a standard match, food spawns once every 3 seconds or so on
            average.
          </Text>,
        ]}
        title="Food"></SlideLayout.List>
      <SlideLayout.List
        items={[
          <Text>If a Snake hits the usual stuff: walls, itself, it dies.</Text>,
          <Text>
            If two Snakes collide head-to-head, the smaller Snake dies.
          </Text>,
          <Text>Otherwise—in the case of a tie—both die.</Text>,
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
      <SlideLayout.FullBleedImage
        alt={IMAGES.tomHollandBartender.alt ?? ''}
        src={IMAGES.tomHollandBartender.src}
      />
      <SlideLayout.VerticalImage
        alt={IMAGES.jsLogo.alt ?? ''}
        src={IMAGES.jsLogo.src}
      />
      <EmojiSlide></EmojiSlide>
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
          "color":"#ffcc00",
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
      <MarkdownSlide>{`
      - 🍗 Each Snake MUST eat something every 100 ticks.
      - 🕰️ Each Snake SHOULD respond within 500ms.
      - 🐍 If two Snakes collide head-to-head, the smaller Snake SHALL die.
      - ☠️ Otherwise, both SHALL die.

        \`\`\`
        The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT",
        "RECOMMENDED", "MAY", and "OPTIONAL" in this document are to be interpreted as described in RFC 2119.
        \`\`\`
    `}</MarkdownSlide>{' '}
      <SlideLayout.Center>
        <Heading fontSize="25vh">
          {ENGAGED}
          {ENGAGED}
        </Heading>
      </SlideLayout.Center>
    </>
  );
}
