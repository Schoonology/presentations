import React from 'react';
import {
  Appear,
  CodePane,
  Heading,
  Image,
  ListItem,
  Slide,
  SlideLayout,
  UnorderedList,
} from 'spectacle';
import {EmojiSlide} from '../slides/emoji_slide';
import {ART, IMAGES, TEXT, THEME} from '../theme';
import {Column, Row} from '../components/layout';
import {Strikeout} from '../components/strikeout';
import {FitHeading} from '../components/fit-heading';
import {OverlayText} from '../components/overlay-text';
import {LocalImage} from '../components/local-image';

export function GrayAreaSection() {
  return (
    <>
      <SlideLayout.Center>
        <Heading color={THEME.colors.primary}>Flood fill</Heading>
        <Heading color={THEME.colors.primary}>A*</Heading>
      </SlideLayout.Center>
      <SlideLayout.FullBleedImage
        alt={IMAGES.autumn.alt ?? ''}
        src={IMAGES.autumn.src}
      />
      <SlideLayout.FullBleedImage
        alt={IMAGES.autumn_gray.alt ?? ''}
        src={IMAGES.autumn_gray.src}
      />
      <SlideLayout.Center>
        <Heading>Flood fill: Don't crash</Heading>
        <Heading>A*: Don't starve</Heading>
      </SlideLayout.Center>
      <SlideLayout.TwoColumn
        left={
          <CodePane style={{fontSize: '2vh'}} language="json">
            {TEXT.request_body}
          </CodePane>
        }
        right={
          <Column justifyContent="center">
            <Image
              alt="A grid of numbers"
              src={ART.height_map}
              style={{width: '30vh'}}
            />

            <Heading>
              <Strikeout>Schoon mapping</Strikeout>
            </Heading>
            <Heading style={{marginTop: 0, paddingTop: 0}}>Height map</Heading>
          </Column>
        }></SlideLayout.TwoColumn>
      <SlideLayout.Center>
        <Image
          src={require('../../assets/img/haribo.webp').default}
          height="80vh"
        />
      </SlideLayout.Center>
      <SlideLayout.FullBleedImage
        alt="Aibo from Sony"
        src={require('../../assets/img/aibo.jpg').default}
      />
      <SlideLayout.FullBleedImage
        alt="Spot from Boston Dynamics"
        src={require('../../assets/img/spot.jpg').default}
      />

      {/*
          SECTION
           */}
      <SlideLayout.Center>
        <Heading>Neural networks</Heading>
      </SlideLayout.Center>
      <SlideLayout.FullBleedImage
        alt="Hot Topic, the old logo"
        src={require('../../assets/img/hot-topic.jpg').default}
      />
      <SlideLayout.FullBleedImage
        alt="A neural network"
        src={ART.neural_network}
      />
      <SlideLayout.Center>
        <UnorderedList>
          <ListItem>Convolutional Neural Networks</ListItem>
          <ListItem>Generative Adversarial Networks</ListItem>
          <ListItem>Generative Pre-trained Transformers</ListItem>
          <ListItem>Three Letter Acronyms</ListItem>
        </UnorderedList>
      </SlideLayout.Center>
      <SlideLayout.Center>
        <Image src={IMAGES.donkey_car} height="70vh" />
      </SlideLayout.Center>
      <SlideLayout.FullBleedImage
        alt="The same neural network"
        src={ART.neural_network}
      />
      <EmojiSlide emoji="🤷🏻‍♂️" />
      <Slide>
        <Column>
          <Heading
            color={THEME.colors.quaternary}
            style={{paddingBottom: 0, marginBottom: 0}}>
            🫰🏻 This 🫰🏻 Is 🫰🏻
          </Heading>
          <FitHeading
            color={THEME.colors.primary}
            style={{paddingTop: 0, marginTop: 0}}>
            AI
          </FitHeading>
        </Column>
        <Appear>
          <OverlayText left="20%" top="20%" angle="0">
            <Image src={IMAGES.duo_ai} height="25vh"></Image>
          </OverlayText>
          <OverlayText left="80%" top="50%" angle="0">
            <Image src={IMAGES.slack_ai} height="25vh"></Image>
          </OverlayText>
          <OverlayText left="30%" top="70%" angle="0">
            <Image src={IMAGES.duo_swole} height="25vh"></Image>
          </OverlayText>
        </Appear>
      </Slide>
      <Slide>
        <Column>
          <Heading
            color={THEME.colors.quaternary}
            style={{paddingBottom: 0, marginBottom: 0}}>
            🫰🏻 This 🫰🏻 Is 🫰🏻
          </Heading>
          <FitHeading
            color={THEME.colors.primary}
            style={{paddingTop: 0, marginTop: 0}}>
            AI
          </FitHeading>
        </Column>
      </Slide>
    </>
  );
}
