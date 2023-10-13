import React from 'react';
import {FlexBox, Heading, Image, SlideLayout} from 'spectacle';
import {EmojiSlide} from '../slides/emoji_slide';
import {GameReplaySlide} from '../slides/game_replay';
import {ENGAGED, IMAGES, TEXT, THEME} from '../theme';

export function FloodFillSection() {
  return (
    <>
      <EmojiSlide emoji="🧰" />
      <SlideLayout.Code language="ts" title="You can't go wrong, he said...">{`
      server.post("/move", (req, res) => {
        res.send({
          move: "right",
        });
      });
    `}</SlideLayout.Code>
      {/* TODO(schoon): This color isn't working. */}
      <SlideLayout.Section>
        <FlexBox flexDirection="row">
          <Image src={IMAGES.paint_bucket} width="40vh" />
          <Heading>Flood fill</Heading>
        </FlexBox>
      </SlideLayout.Section>
      <SlideLayout.Code
        codePaneProps={{
          highlightRanges: [],
        }}
        language="ts">
        {TEXT.flood_fill_lib}
      </SlideLayout.Code>
      <GameReplaySlide fps={18} game_id="flood-fill" />
      <EmojiSlide emoji={ENGAGED} />
    </>
  );
}
