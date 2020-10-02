import React from 'react';
import ReactDOM from 'react-dom';

import {
  Appear,
  Box,
  CodePane,
  CodeSpan,
  Deck,
  FlexBox,
  FullScreen,
  Grid,
  Heading,
  Image,
  ListItem,
  Markdown,
  Notes,
  OrderedList,
  Progress,
  Slide,
  Stepper,
  Table,
  TableCell,
  TableRow,
  Text,
  UnorderedList,
  indentNormalizer
} from 'spectacle';

import { ActSlide, Align, BDYK, Center, OverlayBubble, ScreenPlayNote } from './components';

import * as images from './images';
import './styles.css';

// SPECTACLE_CLI_THEME_START
const theme = {
  size: {
    width: 1366,
    height: 768,
    maxCodePaneHeight: 200
  },
  colors: {
    overlay: '#111A1Ff0',
    primary: '#ffffff',
    secondary: '#F5B547',
    tertiary: '#111A1F',
    quaternary: '#1191D6',
    quinary: '#461AD6'
  },
  fonts: {
    header: 'Metropolis, "Open Sans Condensed", Helvetica, Arial, sans-serif',
    text: 'Metropolis, "Open Sans Condensed", Helvetica, Arial, sans-serif',
    monospace: '"Fira Code", "Menlo", monospace'
  },
  fontSizes: {
    h1: '72px',
    h2: '64px',
    h3: '56px',
    text: '44px',
    monospace: '20px'
  },
  lineHeights: {
    heading: 1.5,
  },
  space: [16, 24, 32]
};
// SPECTACLE_CLI_THEME_END

// SPECTACLE_CLI_TEMPLATE_START
const template = () => (
  <Box padding="1em" position="absolute" bottom="0" right="0">
  </Box>
);
// SPECTACLE_CLI_TEMPLATE_END

const styles = {
  noneList: {
    className: 'bare-list',
  },
};

const Presentation = () => (
  <Deck theme={theme} template={template} transitionEffect="none">
    <Slide backgroundImage={`url(${images.hello})`} />
    <Slide backgroundColor="secondary">
      <Center>
        <Heading color="tertiary">🚨 Warning 🚨</Heading>
        <Heading color="quinary" fontSize="8rem">24-hour slides</Heading>
      </Center>
      <Notes>These are the slides I created in 24 hours. But if you can't handle me at my 24-hour slides, you don't deserve me at my... I'm not cool enough to finish that, so let's move on.</Notes>
    </Slide>
    <Slide>
      <FlexBox alignItems="flex-start">
        <Box>
      <Markdown>{`
        # Past
        - Test Double
        - Faithlife
        - StrongLoop
        - Red Robot Labs
        - 38 Studios
        - LucasArts
      `}</Markdown>
        </Box>
        <Box>
      <Markdown>{`
        # Present
        - ActionSprout
        - Legacy of Play
      `}</Markdown>
        </Box>
      </FlexBox>
    </Slide>
    <Slide backgroundImage={`url(${images.trees})`} backgroundOpacity="0.4">
      <ScreenPlayNote text="title card" />
      <FlexBox height="100%" flexDirection="column">
        <Heading lineHeight="heading" color="primary">
          Game Engine Encounters in the Backcountry
        </Heading>
      </FlexBox>
    </Slide>
    <Slide backgroundImage={`url(${images.trees})`} backgroundOpacity="0.4">
      <FlexBox height="100%" flexDirection="column">
        <Heading lineHeight="heading" color="primary">
          Game engines are like bears.
        </Heading>
        <Text>It's best to avoid run-ins, but it's good to be prepared anyway.</Text>
      </FlexBox>
    </Slide>
    <Slide>
      <Center>
        <Heading>But first, film!</Heading>
        <Text color="quinary">(More danger later.)</Text>
      </Center>
    </Slide>
    <Slide backgroundImage={`url(${images.toyStory})`}>
      <OverlayBubble bottom="0" right="0">
        <UnorderedList className="bare-list">
          <ListItem>
            Virtual actors 👎
      </ListItem>
          <ListItem>
            Virtual camera 😞
      </ListItem>
          <ListItem>
            Virtual set 😑
      </ListItem>
          <ListItem>
            Virtual environment 🙌
      </ListItem>
        </UnorderedList>
      </OverlayBubble>

      <OverlayBubble bottom="0" left="0" padding="0px">
        <Text>Pixar, <em>RenderMan</em></Text>
      </OverlayBubble>
    </Slide>
    <Slide backgroundImage={`url(${images.pirates})`}>
      <OverlayBubble bottom="0" right="0">
        <UnorderedList {...styles.noneList}>
          <ListItem>
            Real actors ✨
      </ListItem>
          <ListItem>
            Real camera ✨
      </ListItem>
          <ListItem>
            Real set ✨
      </ListItem>
          <ListItem>
            Real environment 😱
      </ListItem>
        </UnorderedList>
      </OverlayBubble>
      <OverlayBubble bottom="0" left="0" padding="0px">
        <Text>ILM, <em>Zeno</em></Text>
      </OverlayBubble>
    </Slide>
    <Slide backgroundImage={`url(${images.mandalorian})`}>
      <OverlayBubble bottom="0" left="0">
        <UnorderedList {...styles.noneList}>
          <ListItem>
            Real actors ✨
      </ListItem>
          <ListItem>
            Real camera ✨
      </ListItem>
          <ListItem>
            Real set ✨
      </ListItem>
          <ListItem>
            <em>Virtual environment</em> 🥳
          </ListItem>
        </UnorderedList>
      </OverlayBubble>
      <OverlayBubble bottom="0" right="0" padding="0px">
        <Text><em>Unreal Engine</em></Text>
      </OverlayBubble>
    </Slide>
    <Slide backgroundImage={`url(${images.mandalorian})`} backgroundOpacity="0.4">
      <Center>
        <Text fontSize="20rem">🐻</Text>
      </Center>
      <OverlayBubble bottom="0" right="0" padding="0px">
        <Text fontSize="h2"><em>Unreal Engine</em></Text>
      </OverlayBubble>
    </Slide>
    <Slide>
      <ActSlide act="1" name="History" description="(One version, anyway)">
      </ActSlide>
      <Notes>But I'm getting ahead of myself. I should go over a brief history first, of how we got to the point where game engines are living in our televisions.</Notes>
    </Slide>
    <Slide>
      <Center>
        <Heading>Names omitted intentionally.</Heading>
      </Center>
      <Notes>On a quick DEI note...I know that the entertainment industry is HUGELY white and male. I omitted almost all names, so you're not learning about industry "heroes" or whatever here. This is all about the bears themselves.</Notes>
    </Slide>
    <Slide backgroundImage={`url(${images.garage})`} backgroundOpacity="0.7">
      <Align alignment="bottom">
        <Heading textAlign="left">Like bears,<br/>game engines started small.</Heading>
      </Align>
    </Slide>
    <Slide>
      <FlexBox flexDirection="column" height="100%" justifyContent="flex-end">
        <Heading color="primary">
          The first "game engines" were <em>consumer-focused</em>.
        </Heading>
        <Image src={images.billBudgeScreen} />
        <Text color="secondary"><em>Bill Budge's Pinball Construction Set, 1983</em></Text>
      </FlexBox>
      <Notes>Some early consumer-focused examples include Bill Budge's Pinball Construction Set, but these aren't what we're talking about</Notes>
    </Slide>
    <Slide backgroundImage={`url(${images.c64})`} backgroundOpacity="0.4">
      <Center>
        <Heading color="primary">
          The next were not only proprietary, but <em>internal</em>.
        </Heading>
        <Table>
          <TableRow>
            <TableCell ><Text textAlign="right">LucasArts:</Text></TableCell>
            <TableCell><Text color="secondary"><em>SCUMM</em></Text></TableCell>
          </TableRow>
          <TableRow>
            <TableCell><Text textAlign="right">Sierra:</Text></TableCell>
            <TableCell><Text color="secondary"><em>Adventure Game Interpreter</em></Text></TableCell>
          </TableRow>
        </Table>
      </Center>
      <Notes>About the same time, companies had first-party engines like Sierra's Adventure Game Interpreter and the more famous SCUMM engine at LucasArts.</Notes>
    </Slide>
    <Slide>
      <Center>
        <Heading color="primary">
          Then came the 90s
        </Heading>
        <Table>
          <TableRow>
            <TableCell><Text textAlign="right">id Software:</Text></TableCell>
            <TableCell><Text color="secondary"><em>Quake Engine (1996)</em></Text></TableCell>
          </TableRow>
          <TableRow>
            <TableCell><Text textAlign="right">Epic Games:</Text></TableCell>
            <TableCell><Text color="secondary"><em>Unreal Engine (1998)</em></Text></TableCell>
          </TableRow>
        </Table>
        <BDYK>id Tech is now internal again, as of id Tech 5.</BDYK>
      </Center>
      <Notes>Third-party licences were largely a product of the mid-to-late 1990's, with id Software's Quake engine and Epic Games' Unreal Engine taking center stage.</Notes>
    </Slide>
    <Slide backgroundImage={`url(${images.playstation1})`} backgroundOpacity="0.4">
      <Center>
        <Heading color="primary">
          Indie 2.0, 2005–2010
        </Heading>
        <Table>
          <TableRow>
            <TableCell><Text textAlign="right">Valve Corporation:</Text></TableCell>
            <TableCell><Text color="secondary"><em>Source engine (2004)</em></Text></TableCell>
          </TableRow>
          <TableRow>
            <TableCell><Text textAlign="right">Unity Technologies:</Text></TableCell>
            <TableCell><Text color="secondary"><em>Unity engine (2005)</em></Text></TableCell>
          </TableRow>
        </Table>
        <BDYK>Source is a grandchild of the original Quake engine!</BDYK>
      </Center>
    </Slide>
    <Slide>
      <Center>
        <Heading color="primary">
          Mobile AAA, 2010–2015
        </Heading>
        <Text>Unreal Engine hits iOS in 2010 with <em>Infinity Blade</em> (1st party)</Text>
        <Text>Unity engine hits iOS in 2011 with <em>Shadowgun</em> (3rd party)</Text>
      </Center>
      <Notes>By this point, these are the main players. Still are.</Notes>
    </Slide>
    <Slide backgroundColor="primary" backgroundImage={`url(${images.vr})`} backgroundOpacity="0.4">
      <Center>
        <Heading color="quinary">
          Table scraps, 2015—
        </Heading>
        <UnorderedList>
          <ListItem color="tertiary">VR</ListItem>
          <ListItem color="tertiary">WASM</ListItem>
          <ListItem color="tertiary">???</ListItem>
        </UnorderedList>
      </Center>
    </Slide>
    <Slide>
      <ActSlide act="2" name="Business" description="Cuisine Restes de Table" />
    </Slide>
    <Slide backgroundColor="quaternary">
      <FlexBox height="100%" flexDirection="column">
        <Heading>
          Game engines are like bears.
        </Heading>
        <Text>They're very good at fattening up.</Text>
      </FlexBox>
    </Slide>
    <Slide backgroundColor="quaternary">
      <Center>
        <Heading>Revenue Diversification</Heading>
        <Text>The real reason you know “game engines” exist.</Text>
        <Text color="quinary">(That, and a lot of marketing.)</Text>
      </Center>
    </Slide>
    <Slide backgroundColor="quaternary">
      <Center>
        <Heading>Revenue Diversification</Heading>
        <Table width="50%">
          <TableRow>
            <TableCell>Boxed</TableCell>
            <TableCell color="quinary">➡</TableCell>
            <TableCell>Downloads</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>One-time</TableCell>
            <TableCell color="quinary">➡</TableCell>
            <TableCell>Subcriptions</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Install</TableCell>
            <TableCell color="quinary">➡</TableCell>
            <TableCell>Service</TableCell>
          </TableRow>
        </Table>
      </Center>
    </Slide>
    <Slide backgroundColor="quaternary">
      <Center>
        <Heading>None of these engines started life that way.</Heading>
      </Center>
      <BDYK>Unity started out of a <em>flop</em>—and a clone—called <em>GooBall</em>.</BDYK>
    </Slide>
    <Slide backgroundColor="quaternary">
      <Center>
        <Heading>Saturated markets create tangential markets.</Heading>
        <Text>The real reason <em>this talk</em> exists.</Text>
        <Text color="quinary">(That, and a lot of hubris.)</Text>
      </Center>
      <Notes>If you take one thing away from this talk, let it _not_ be about game engines, but be this: if a market is saturated, it consitently creates _tangential_ markets. In this case, selling game engines to game engine companies is saturated, so the "tangential market" here are companies that need 3d rendering, asset management, and the like, but aren't making a game.</Notes>
    </Slide>
    <Slide backgroundColor="quaternary">
      <Heading fontSize="h2">Saturated markets create tangential markets.</Heading>
      <Text lineHeight="0">Consumer ↔ Professional</Text>
      <Text color="quinary" lineHeight="0">Video cameras</Text>
      <Text />
      <Text lineHeight="0">Accessories & Services</Text>
      <Text color="quinary" lineHeight="0">VHS-to-DVD processing</Text>
    </Slide>
    <Slide backgroundColor="quaternary">
      <Heading>Ronin engine (circa 2008)</Heading>
      <FlexBox>
        <Image src={images.ilm1} width="50%"></Image>
        <Image src={images.ilm2} width="50%"></Image>
      </FlexBox>
      <Text textAlign="right">"Computer pajamas" —Bill Nighy</Text>
      <Notes>
        - Used by ILM for real-time rendering and performance capture
        - Used by LucasArts for Force Unleashed I, II, and Indiana Jones game
        - https://indianajones.fandom.com/wiki/Indiana_Jones_and_the_Staff_of_Kings#Game_development_and_release
      </Notes>
    </Slide>
    <Slide backgroundColor="quaternary">
      <iframe width="100%" height="100%" src="https://www.youtube.com/embed/5gZWna6RnCA?rel=0&amp;controls=0&amp;showinfo=0&amp;autoplay=1" frameborder="0" allow="autoplay"></iframe>
    </Slide>
    <Slide backgroundImage={`url(${images.mandalorianSet})`}>
      <Align alignment="bottomright">
        <Heading>☝️ This isn't a green screen.</Heading>
      </Align>
    </Slide>
    <Slide backgroundImage={`url(${images.mandalorianSet})`} backgroundOpacity="0.4">
      <Center>
        <Text fontSize="20rem">🐻</Text>
      </Center>
      <Align alignment="bottomright">
        <Heading>☝️ This isn't a green screen.</Heading>
      </Align>
    </Slide>
    <Slide backgroundColor="quaternary">
      <Heading>Boring? What about...</Heading>
      <FlexBox alignItems="flex-start">
        <UnorderedList>
          <ListItem {...styles.noneList} fontWeight="bold">
            Simulation
          </ListItem>
          <ListItem>
            Film ✅
          </ListItem>
          <ListItem>
            Academic research
          </ListItem>
          <ListItem>
            Training
          </ListItem>
          <ListItem>
            Engineering
          </ListItem>
        </UnorderedList>
        <UnorderedList>
          <ListItem {...styles.noneList} fontWeight="bold">
            Presence
          </ListItem>
          <ListItem>
            Live TV ✅
          </ListItem>
          <ListItem>
            Architectural visualization
          </ListItem>
          <ListItem>
            Marketing
          </ListItem>
          <ListItem>
            Real estate
          </ListItem>
        </UnorderedList>
      </FlexBox>
    </Slide>
    <Slide backgroundImage={`url(${images.bearBait})`} backgroundOpacity="0.4" backgroundRepeat="repeat-x" backgroundSize="contain">
      <FlexBox alignItems="flex-start" flexDirection="column" height="100%" justifyContent="flex-start">
      <Heading color="secondary" margin="0px">
        Act 3
      </Heading>
      <Heading color="primary" fontSize="10rem" margin="0px">
        Know your enemy
      </Heading>
      </FlexBox>
    </Slide>
    <Slide backgroundImage={`url(${images.trees})`} backgroundOpacity="0.7">
      <Center>
        <Heading color="primary">Like bears, game engines <em>love</em> trees.</Heading>
      </Center>
    </Slide>
    <Slide>
      <Center>
        <Heading margin="0px">
          Scene Trees!
        </Heading>
        <UnorderedList>
          <ListItem fontSize="h2">
            Scene ⤵
          </ListItem>
          <UnorderedList>
            <ListItem fontSize="h2">
              Room ⤵
            </ListItem>
            <UnorderedList>
              <ListItem fontSize="h2">
                Chest ⤵
              </ListItem>
              <UnorderedList>
                <ListItem fontSize="h2">
                  Potion
                </ListItem>
              </UnorderedList>
            </UnorderedList>
          </UnorderedList>
          <ListItem fontSize="h2">
            Scene
          </ListItem>
          <ListItem fontSize="h2">
            ...
          </ListItem>
        </UnorderedList>
      </Center>
    </Slide>
    <Slide>
      <Center>
        <Heading>Entity-Component-System</Heading>
        <Table>
          <TableRow>
            <TableCell>Entity</TableCell>
            <TableCell>An ID, e.g. <code>u32</code></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Component</TableCell>
            <TableCell>Instanced behaviour, e.g. physics volume</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>System</TableCell>
            <TableCell>Global behaviour, e.g. collision detection</TableCell>
          </TableRow>
        </Table>
      </Center>
    </Slide>
    <Slide backgroundImage={`url(${images.arcade})`} backgroundOpacity="0.4">
      <Center>
        <Heading>Entity-Component-System</Heading>
        <FlexBox>
          <UnorderedList>
            <ListItem>Player</ListItem>
            <ListItem>JoystickController(controllerID)</ListItem>
            <ListItem>Input</ListItem>
          </UnorderedList>
          <UnorderedList>
            <ListItem>Platform</ListItem>
            <ListItem>RigidBody(10h x 200w)</ListItem>
            <ListItem>Physics</ListItem>
          </UnorderedList>
        </FlexBox>
      </Center>
    </Slide>
    <Slide>
      <Center>
        <Heading margin="0">Data-driven design</Heading>
        <FlexBox>
          <Image src={images.unity} width="50%"></Image>
          <Image src={images.unreal} width="50%"></Image>
        </FlexBox>
        <Text color="quinary">(Analytics need not apply.)</Text>
      </Center>
    </Slide>
    <Slide backgroundColor="quaternary">
      <Center>
        <Heading margin="0" color="tertiary">80% Declarative <em>(e.g. Data)</em></Heading>
        <Heading margin="0" color="primary">20% Imperative <em>(e.g. Code)</em></Heading>
        <Heading margin="0" color="secondary" fontSize="h3">Bits</Heading>
      </Center>
    </Slide>
    <Slide backgroundColor="quaternary">
      <Center>
        <Heading margin="0" color="primary">20% Declarative <em>(e.g. Data)</em></Heading>
        <Heading margin="0" color="tertiary">80% Imperative <em>(e.g. Code)</em></Heading>
        <Heading margin="0" color="secondary" fontSize="h3">Time</Heading>
      </Center>
    </Slide>
    <Slide>
      <FlexBox flexDirection="column" height="100%" justifyContent="center" alignItems="flex-start">
        <Heading color="primary" margin="0px">
          Coda
        </Heading>
        <Heading color="secondary" fontSize="7rem" margin="0px">
          React, Elm, Express, ...
        </Heading>
      </FlexBox>
      <Notes>The nice part about a varied career—aside from being able to wallpaper your house in worthless stock options paperwork—is knowing when you've seen something before.</Notes>
    </Slide>
    <Slide>
      <Center>
        <Text fontSize="20rem">🐻</Text>
      </Center>
    </Slide>
  </Deck>
);

ReactDOM.render(<Presentation />, document.getElementById('root'));
