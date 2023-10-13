import React from 'react';
import {createRoot} from 'react-dom/client';
import {Deck, FlexBox, SlideLayout} from 'spectacle';
import {FitHeading} from './components/fit-heading';
import {Keybindings} from './components/keybindings';
import {WhatIsBattlesnakeSection} from './sections/what-is-battlesnake';
import {AStarSection} from './sections/a-star';
import {DemoSection} from './sections/demos';
import {FloodFillSection} from './sections/flood-fill';
import {AlwaysGoRightSection} from './sections/go-right';
import {GraphsExplanationSection} from './sections/graphs';
import {GrayAreaSection} from './sections/gray-area';
import {HeightMapSection} from './sections/height-maps';
import {IntroductionSection} from './sections/introduction';
import {NextStepSection} from './sections/next-steps';
import {OutroSection} from './sections/outro';
import {WelcomeSection} from './sections/welcome';
import {EmojiSlide} from './slides/emoji_slide';
import {ENGAGED, IMAGES, THEME} from './theme';
import {OverviewSection} from './sections/overview';

// SPECTACLE_CLI_THEME_START
const theme = {...THEME};
// SPECTACLE_CLI_THEME_END

// SPECTACLE_CLI_TEMPLATE_START
const template = () => <></>;
// SPECTACLE_CLI_TEMPLATE_END

const transition = {
  from: {},
  enter: {},
  leave: {},
};

function Presentation() {
  return (
    <Deck theme={theme} template={template} transition={transition}>
      <Keybindings />

      <SlideLayout.TwoColumn
        left={
          <FlexBox
            height="100%"
            flexDirection="column"
            width="80%"
            marginLeft="20%">
            <FitHeading fontWeight={100}>We&apos;re</FitHeading>
            <FitHeading color={THEME.colors.primary} fontWeight={700}>
              Snaking It
            </FitHeading>
            <FitHeading fontWeight={100}>Live!</FitHeading>
          </FlexBox>
        }
        right={
          <FlexBox height="100%" flexDirection="column" width="80%">
            <FitHeading color={THEME.colors.quaternary} fontWeight={100}>
              We&apos;re
            </FitHeading>
            <FitHeading color={THEME.colors.primary} fontWeight={700}>
              Snaking It
            </FitHeading>
            <FitHeading color={THEME.colors.quaternary} fontWeight={100}>
              Live!
            </FitHeading>
          </FlexBox>
        }></SlideLayout.TwoColumn>
      <EmojiSlide emoji={ENGAGED} />
      <EmojiSlide emoji={ENGAGED} count={2} />

      <WelcomeSection />
      <IntroductionSection />
      <WhatIsBattlesnakeSection />
      <OverviewSection />
      <AlwaysGoRightSection />
      <GraphsExplanationSection />
      <FloodFillSection />
      <AStarSection />
      <GrayAreaSection />
      <HeightMapSection />
      <NextStepSection />
      <DemoSection />
      <OutroSection />

      {/* END */}
    </Deck>
  );
}

createRoot(document.getElementById('root')).render(<Presentation />);
