import React from 'react';
import {
  Appear,
  FlexBox,
  Heading,
  Image,
  Slide,
  SlideLayout,
  Text,
} from 'spectacle';
import {IMAGES} from '../theme';
import {Column} from '../components/layout';
import {ThemedListItem, ThemedOrderedList} from '../components/themed';
import {OverlayText} from '../components/overlay-text';
import {FitHeading} from '../components/fit-heading';

export function OutroSection() {
  return (
    <>
      <Slide>
        <Column>
          <ThemedOrderedList fit>
            <ThemedListItem>Flood filling</ThemedListItem>
            <ThemedListItem>Path finding</ThemedListItem>
            <ThemedListItem>Height maps</ThemedListItem>
          </ThemedOrderedList>
        </Column>
      </Slide>
      <SlideLayout.Center>
        <FlexBox flexDirection="column">
          <Image src={IMAGES.battlesnake} width="100%"></Image>
          <Text>play.battlesnake.com</Text>
          <Heading>@schoonology</Heading>
          <Text>hello @ schoonology.com</Text>
        </FlexBox>
        <Appear>
          <OverlayText left="50%" top="50%" angle="30deg">
            <Column>
              <Text fontSize="15vh" lineHeight="5vh" margin="0" padding="0">
                👏🏻👏🏻👏🏻👏🏻
              </Text>
              <Text fontSize="15vh" lineHeight="5vh" margin="0" padding="0">
                👏🏻👏🏻👏🏻👏🏻
              </Text>
              <Text fontSize="15vh" lineHeight="5vh" margin="0" padding="0">
                👏🏻👏🏻👏🏻👏🏻
              </Text>
              <Text fontSize="15vh" lineHeight="5vh" margin="0" padding="0">
                👏🏻👏🏻👏🏻👏🏻
              </Text>
              <Text fontSize="15vh" lineHeight="5vh" margin="0" padding="0">
                👏🏻👏🏻👏🏻👏🏻
              </Text>
            </Column>
          </OverlayText>
        </Appear>
      </SlideLayout.Center>
    </>
  );
}
