import React from 'react';

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
  Text,
  UnorderedList,
  indentNormalizer
} from 'spectacle';

const styles = {
  noneList: {
    className: 'bare-list',
  },
  overlay: {
    backgroundColor: 'overlay',
    backgroundOpacity: '0.7',
    borderRadius: '1rem',
    padding: '2',
    position: 'absolute',
  },
  screenplay: {
    color: 'quaternary',
    fontFamily: 'monospace',
    fontSize: 'h2',
    margin: 0,
    opacity: 0.5,
    textAlign: 'left',
  },
};

export const ScreenPlayNote = ({ text }) => (
  <Box position="absolute" bottom="0px" left="0px">
    <Heading {...styles.screenplay} position="absolute">
      {`[${text.toUpperCase().replace(/\s/g, '_')}]`}
    </Heading>
  </Box>
);

export const OverlayBubble = ({ children, ...props }) => (
  <Box {...styles.overlay} {...props}>
    {children}
  </Box>
);

export const ActSlide = ({ act, name, description }) => (
  <FlexBox alignItems="flex-start" flexDirection="column" height="100%" justifyContent="center">
    <Heading color="primary" margin="0px">
      Act {act}
    </Heading>
    <Heading color="secondary" fontSize="10rem" margin="0px">
      {name}
    </Heading>
    {description &&
      <Heading color="quaternary" fontSize="h2" margin="0px">
        {description}
      </Heading>
    }
  </FlexBox>
);

export const Align = ({children, alignment}) => {
  const props = {}

  if (alignment.includes('bottom')) {
    props.bottom = 0;
  } else if (alignment.includes('top')) {
    props.top = 0;
  }

  if (alignment.includes('right')) {
    props.right = 0;
  } else if (alignment.includes('left')) {
    props.left = 0;
  }

  return (
    <Box position="absolute" {...props}>
      {children}
    </Box>
  );
}

export const Center = ({children}) => (
  <FlexBox flexDirection="column" height="100%" justifyContent="center">
    {children}
  </FlexBox>

)
export const BDYK = ({children}) => (
  <Box backgroundColor="primary" backgroundOpacity="0.7" borderRadius="0.5rem" margin="3rem">
    <Text color="tertiary">{children}</Text>
    <Text color="quinary" textAlign="right" fontSize="2rem">But did you know?</Text>
  </Box>
)
