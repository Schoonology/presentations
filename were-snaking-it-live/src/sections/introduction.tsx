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
              <Appear priority={1}>
                <LocalImage data={IMAGES.unpub} height="15vh" />
              </Appear>
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
              <Appear priority={-1}>
                <Image
                  src={IMAGES.squad}
                  height="25vh"
                  style={{
                    backgroundColor: 'black',
                    marginBottom: '5vh',
                    padding: '3vh',
                  }}
                />
              </Appear>
              <Appear priority={0}>
                <Image
                  src={IMAGES.lop}
                  height="25vh"
                  style={{
                    marginBottom: '5vh',
                  }}
                />
              </Appear>
            </FlexBox>
          </>
        }
      />
      <EmojiSlide emoji="👁️❤️🔔" />
      <SlideLayout.FullBleedImage
        alt={UNSPLASH.baltimore_skyline.alt}
        src={UNSPLASH.baltimore_skyline.src}
      />
      <SlideLayout.Center>
        <FlexBox flexDirection="column">
          <FlexBox flexDirection="row">
            <Image src={IMAGES.battlesnake} height="5vh" />
            <Heading>28th</Heading>
          </FlexBox>
          <Text>
            Not 28th ranked, 28th <em>percentile</em>.
          </Text>
          <Text>
            <small>
              That's not good. That means 72% of players are better.
            </small>
          </Text>
        </FlexBox>
      </SlideLayout.Center>
    </>
  );
}
