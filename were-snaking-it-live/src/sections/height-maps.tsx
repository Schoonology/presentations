import React from 'react';
import {
  CodePane,
  Heading,
  ListItem,
  SlideLayout,
  UnorderedList,
} from 'spectacle';
import {EmojiSlide} from '../slides/emoji_slide';
import {GameReplaySlide} from '../slides/game_replay';
import {ART, ENGAGED, TEXT} from '../theme';

export function HeightMapSection() {
  return (
    <>
      <SlideLayout.Center>
        <Heading>Height maps</Heading>
      </SlideLayout.Center>
      <SlideLayout.FullBleedImage
        alt="A grid of numbers again"
        src={ART.height_map_2}
      />
      <SlideLayout.TwoColumn
        left={
          <CodePane language="json">{`
    {
      "board": {
        "hazards": [
          [3,4],
          [9,7],
          ...
        ]
      },
      "you": {
        "health": 82
      }
    }
    `}</CodePane>
        }
        right={
          <UnorderedList>
            <ListItem style={{listStyle: 'none'}}>🐍 Move, -1 health</ListItem>
            <ListItem style={{listStyle: 'none'}}>
              🍔 Food, health ➡️ 100
            </ListItem>
            <ListItem style={{listStyle: 'none'}}>
              💥 Hazard, -14 health
            </ListItem>
          </UnorderedList>
        }
      />
      <SlideLayout.FullBleedImage
        alt="A grid of numbers again"
        src={ART.height_map_2}
      />
      <SlideLayout.TwoColumn
        left={
          <CodePane language="ts">{`
            const heights: Map<Space, number> =
              magic(request.body.from_battlesnake_api);

            heights.get(space);
    `}</CodePane>
        }
        right={
          <CodePane language="json">{`
    "height": 11,
    "width": 11,
    "food": [
      { "x": 7, "y": 9 },
      { "x": 7, "y": 7 },
      { "x": 10, "y": 0 }
    ],
    "hazards": [
      { "x": 2, "y": 3 }
    ],
    "snakes": [{
      "name": "snakeJS",
      "health": 93,
      "body": [
        { "x": 8, "y": 7 }, { "x": 8, "y": 6 },
        { "x": 9, "y": 6 }, { "x": 9, "y": 5 },
        { "x": 9, "y": 4 }
      ],
      "head": { "x": 8, "y": 7 }
    }, {
      "name": "Snakeology",
      "health": 94,
      "body": [
        { "x": 7, "y": 6 }, { "x": 7, "y": 5 },
        { "x": 6, "y": 5 }, { "x": 5, "y": 5 },
        { "x": 4, "y": 5 }, { "x": 3, "y": 5 },
        { "x": 2, "y": 5 }
      ],
      "head": { "x": 7, "y": 6 }
    }]
    `}</CodePane>
        }
      />
      <SlideLayout.Code language="ts">{TEXT.height_map}</SlideLayout.Code>
      <EmojiSlide emoji={ENGAGED} count={2} />
      <GameReplaySlide fps={18} game_id="maze" />
      <EmojiSlide emoji={ENGAGED} />
    </>
  );
}
