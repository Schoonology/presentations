import React from 'react';
import {
  Appear,
  FlexBox,
  Heading,
  Image,
  ListItem,
  Slide,
  SlideLayout,
  Stepper,
  Text,
  UnorderedList,
} from 'spectacle';
import {LocalImage} from '../components/local-image';
import {Strikeout} from '../components/strikeout';
import {IMAGES, UNSPLASH} from '../theme';
import {FitHeading} from '../components/fit-heading';
import {Column, Row} from '../components/layout';
import {EmojiSlide} from '../slides/emoji_slide';

export function IntroductionSection() {
  return (
    <>
      <Slide>
        <Column>
          <FitHeading>Intro-🦆-tions</FitHeading>
        </Column>
      </Slide>
      <SlideLayout.TwoColumn
        left={
          <>
            <FlexBox flexDirection="column">
              <Heading fontSize="10vh">👋🏻</Heading>
              <Stepper priority={-3} values={[true, false]}>
                {value =>
                  value ? (
                    <Text>Michael Schoonmaker</Text>
                  ) : (
                    <Strikeout>Michael Schoonmaker</Strikeout>
                  )
                }
              </Stepper>
              <Appear priority={-2}>
                <Heading fontSize="10vh">Schoon</Heading>
              </Appear>
            </FlexBox>
          </>
        }
        right={
          <>
            <FlexBox flexDirection="column">
              <Appear priority={0}>
                <Image
                  src={IMAGES.lop}
                  height="25vh"
                  style={{
                    marginBottom: '5vh',
                  }}
                />
              </Appear>
              <Appear priority={1}>
                <LocalImage data={IMAGES.unpub} height="10vh" />
              </Appear>
            </FlexBox>
          </>
        }
      />
      <SlideLayout.FullBleedImage
        alt={UNSPLASH.baltimore_skyline.alt}
        src={UNSPLASH.baltimore_skyline.src}
      />
      <SlideLayout.Center>
        <FlexBox flexDirection="column">
          <FlexBox flexDirection="row">
            <Image src={IMAGES.battlesnake} height="5vh" />
            <Heading>Top 20</Heading>
          </FlexBox>
          <Text opacity={0.7}>Percent.</Text>
          <Text opacity={0.5}>
            <small>That&rsquo;s...arguably acceptable.</small>
          </Text>
        </FlexBox>
      </SlideLayout.Center>
    </>
  );
}
