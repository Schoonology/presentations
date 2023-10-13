import React from 'react';
import {
  Appear,
  Heading,
  ListItem,
  Quote,
  Slide,
  SlideLayout,
  Text,
  UnorderedList,
} from 'spectacle';
import {GameReplaySlide} from '../slides/game_replay';
import {Column} from '../components/layout';
import {FitHeading} from '../components/fit-heading';
import {ThemedListItem, ThemedOrderedList} from '../components/themed';
import {OverlayText} from '../components/overlay-text';
import {EXTRA_COLORS, THEME} from '../theme';

export function OverviewSection() {
  return (
    <>
      <GameReplaySlide fps={18} game_id="julia-child" />
      <Slide>
        <Column>
          <ThemedOrderedList fit>
            <ThemedListItem>Flood filling</ThemedListItem>
            <ThemedListItem>Path finding</ThemedListItem>
            <ThemedListItem>Height maps</ThemedListItem>
          </ThemedOrderedList>
        </Column>
      </Slide>
      <Slide>
        <Column>
          <FitHeading>Disclaimer</FitHeading>
        </Column>
      </Slide>
      <Slide>
        <Column>
          <Heading fontSize="10vh">Play</Heading>
          <UnorderedList>
            <Appear>
              <ListItem fontSize="10vh">Frameworks</ListItem>
            </Appear>
            <Appear>
              <ListItem fontSize="10vh">Languages</ListItem>
            </Appear>
            <Appear>
              <ListItem fontSize="10vh">AI techniques</ListItem>
            </Appear>
          </UnorderedList>
        </Column>
        <Appear>
          <OverlayText left="50%" top="50%" angle="5deg">
            <Quote
              backgroundColor={EXTRA_COLORS.purple}
              padding="10vh"
              style={{width: '100vw'}}>
              <Heading fontSize="1em">From the Battlesnake Discord:</Heading>
              <Text>&ldquo;Thanks for the clarification. 👍&rdquo;</Text>
              <Text>&ldquo;I feel a real sense of community&rdquo;</Text>
              <Text>
                &ldquo;Thanks a lot for your time btw, appreciate that&rdquo;
              </Text>
            </Quote>
          </OverlayText>
        </Appear>
      </Slide>
      <Slide>
        <Heading>Local &amp; Open source</Heading>
        <UnorderedList>
          <ListItem>Rules: Go</ListItem>
          <ListItem>Board: SvelteKit</ListItem>
        </UnorderedList>
        <Text>GitHub: BattlesnakeOfficial</Text>
      </Slide>
    </>
  );
}
