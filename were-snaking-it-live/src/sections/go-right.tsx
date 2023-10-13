import React from 'react';
import {
  Appear,
  Heading,
  ListItem,
  Slide,
  SlideLayout,
  Text,
  UnorderedList,
} from 'spectacle';
import {GameReplaySlide} from '../slides/game_replay';
import {EmojiSlide} from '../slides/emoji_slide';
import {ENGAGED, IMAGES, THEME} from '../theme';
import {FitHeading} from '../components/fit-heading';
import {Column} from '../components/layout';

export function AlwaysGoRightSection() {
  return (
    <>
      <Slide>
        <Column>
          <FitHeading color={THEME.colors.quaternary}>
            The{' '}
            <span style={{color: THEME.colors.primary}}>
              &ldquo;Live&rdquo;
            </span>{' '}
            Part
          </FitHeading>
        </Column>
      </Slide>
      <SlideLayout.FullBleedImage
        alt="An active 'on air' light"
        src={IMAGES.on_air}
      />
      <GameReplaySlide fps={6} game_id="go-right" />{' '}
      <EmojiSlide emoji={ENGAGED} />
    </>
  );
}
