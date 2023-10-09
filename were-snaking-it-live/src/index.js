import fitty from 'fitty';
import React, {useEffect, useRef} from 'react';
import {createRoot} from 'react-dom/client';
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
  MarkdownSlide,
  MarkdownSlideSet,
  Notes,
  OrderedList,
  Progress,
  Slide,
  SlideLayout,
  Text,
  UnorderedList,
} from 'spectacle';
import {EmojiSlide} from './emoji_slide';
import {GameReplaySlide} from './game_replay';

const ENGAGED = '👍🏻';
// const ENGAGED = '👏🏻';

const ART = {
  board: require('../assets/art/board.svg').default,
  chaotic_evil: require('../assets/art/chaotic-evil.svg').default,
  height_map: require('../assets/art/height-map.svg').default,
  height_map_2: require('../assets/art/height-map-2.svg').default,
  neural_network: require('../assets/art/neural-network.svg').default,
};

const IMAGES = {
  autumn: require('../assets/img/autumn.jpg').default,
  autumn_gray: require('../assets/img/autumn-gray.jpeg').default,
  battlesnake: require('../assets/img/battlesnake.svg').default,
  bs_board: require('../assets/img/bs-board.png').default,
  burger: require('../assets/img/burger.jpg').default,
  fish: require('../assets/img/fish.jpg').default,
  graph_cs: require('../assets/img/graph-cs.png').default,
  graph_cs_2: require('../assets/img/graph-cs2.jpg').default,
  graph_normie: require('../assets/img/graph-normie.jpg').default,
  lop: require('../assets/img/lop.png').default,
  nibbles: require('../assets/img/nibbles.png').default,
  nokia: require('../assets/img/nokia-6110.jpeg').default,
  on_air: require('../assets/img/on-air.jpg').default,
  paint_bucket: require('../assets/img/paint-bucket.jpg').default,
  snake: require('../assets/img/snake.jpg').default,
  squad: require('../assets/img/squad.svg').default,
  tree_cs: require('../assets/img/tree-cs.png').default,
  unpub: require('../assets/img/unpub.png').default,
};

const TEXT = {
  a_star: require('../assets/txt/a_star.txt').default,
  a_star_heuristic: require('../assets/txt/a_star_heuristic.txt').default,
  height_map: require('../assets/txt/height_map.txt').default,
}

const formidableLogo =
  'https://avatars2.githubusercontent.com/u/5078602?s=280&v=4';

// SPECTACLE_CLI_THEME_START
const theme = {
  fonts: {
    header: 'Metropolis, sans-serif',
    text: 'Metropolis, sans-serif',
  },
  fontWeights: {
    header: 100,
  },
};
// SPECTACLE_CLI_THEME_END

// SPECTACLE_CLI_TEMPLATE_START
const template = () => (
  <></>
);
// SPECTACLE_CLI_TEMPLATE_END

const SlideFragments = () => (
  <>
    <Slide>
      <Text>This is a slide fragment.</Text>
    </Slide>
    <Slide>
      <Text>This is also a slide fragment.</Text>
      <Appear>
        <Text>This item shows up!</Text>
      </Appear>
      <Appear>
        <Text>This item also shows up!</Text>
      </Appear>
    </Slide>
  </>
);

function FitHeading({children, ...props}) {
  const ref = useRef();

  useEffect(() => {
    fitty(ref.current);
  }, [ref.current]);

  return (
    <Heading ref={ref} {...props}>
      {children}
    </Heading>
  );
}

const Presentation = () => (
  <Deck theme={theme} template={template}>
    <SlideLayout.TwoColumn
      left={
        <FlexBox height="100%" flexDirection="column">
          <FitHeading fontWeight={900}>We&apos;re</FitHeading>
          <FitHeading fontWeight={900}>Snaking It</FitHeading>
          <FitHeading fontWeight={900}>Live!</FitHeading>
        </FlexBox>
      }
      right={
        <FlexBox height="100%" flexDirection="column">
          <FitHeading fontWeight={900}>We&apos;re</FitHeading>
          <FitHeading fontWeight={900}>Snaking It</FitHeading>
          <FitHeading fontWeight={900}>Live!</FitHeading>
        </FlexBox>
      }></SlideLayout.TwoColumn>
    <EmojiSlide emoji={ENGAGED} />
    <EmojiSlide emoji={ENGAGED} count={2} />
    <SlideLayout.Center>
      <Heading fontSize="15vh">Welcome</Heading>
    </SlideLayout.Center>
    <SlideLayout.List
      items={[
        <Text>Single responsibility</Text>,
        <Text>No surprises</Text>,
        <Text>Asynchronous</Text>,
        <Text>Komposable</Text>,
        <Text>Entirely written in JavaScript</Text>,
      ]}
      title="S.N.A.K.E. Principle"></SlideLayout.List>
    <Slide>
      <CodePane language="coffee">{`
        renderStarRating = ({ rating, maxStars }) ->
          <aside title={"Rating: #{rating} of #{maxStars} stars"}>
            {for wholeStar in [0...Math.floor(rating)]
              <Star className="wholeStar" key={wholeStar} />}
            {if rating % 1 isnt 0
              <Star className="halfStar" />}
            {for emptyStar in [Math.ceil(rating)...maxStars]
              <Star className="emptyStar" key={emptyStar} />}
          </aside>
        `}</CodePane>
      <Heading>
        <s>CoffeeScript</s>
      </Heading>
      <Heading>snakeJS</Heading>
      <Text>Credit: CoffeeScript docs</Text>
    </Slide>
    <Slide>
      <CodePane language="ts">{`
        import { Keyboard } from 'react-native';
        import { atom } from 'recoil';

        export const re_keyboard_open = atom<boolean>({
        ⇥key: 'keyboard-open',
        ⇥default: false,
        ⇥effects: [
        ⇥⇥({set_self}) => {
        ⇥⇥⇥const subscriptions = [
        ⇥⇥⇥⇥Keyboard.add_listener('keyboard_will_show', () => set_self(true)),
        ⇥⇥⇥⇥Keyboard.add_listener('keyboard_did_show', () => set_self(true)),
        ⇥⇥⇥⇥Keyboard.add_listener('keyboard_did_hide', () => set_self(false)),
        ⇥⇥⇥];
        ⇥⇥⇥
        ⇥⇥⇥return () => subscriptions.map(sub => sub.remove());
        ⇥⇥},
        ⇥],
        });
        `}</CodePane>
      <Heading style={{overflow: 'clip', whiteSpace: 'nowrap'}}>
        Snake case! Tabs! Hungarian notation!
      </Heading>
    </Slide>
    <SlideLayout.Center>
      <Heading fontSize="50vh">No.</Heading>
    </SlideLayout.Center>
    <SlideLayout.Center>
      <OrderedList>
        <ListItem>Artificial Intelligence</ListItem>
        <Appear>
          <ListItem>JavaScript</ListItem>
        </Appear>
        <Appear>
          <Heading>
            <ListItem>"Jokes"</ListItem>
          </Heading>
        </Appear>
      </OrderedList>
    </SlideLayout.Center>
    <SlideLayout.Center>
      <Heading>Video Games</Heading>
    </SlideLayout.Center>
    <SlideLayout.Center>
      <Image src={IMAGES.snake} />
      <Heading
        color="white"
        style={{
          position: 'absolute',
          bottom: '33%',
          right: '33%',
          transform: 'translate(50%,50%)',
        }}>
        snek
      </Heading>
    </SlideLayout.Center>
    <SlideLayout.FullBleedImage src={IMAGES.nokia} />
    <SlideLayout.FullBleedImage src={IMAGES.nibbles} />
    <SlideLayout.Center>
      <OrderedList>
        <ListItem>Time marches on</ListItem>
        <Appear>
          <ListItem>Snake slithers on</ListItem>
        </Appear>
        <Appear>
          <ListItem>Arrow ➡️ direction</ListItem>
        </Appear>
        <Appear>
          <ListItem>MacGuffins</ListItem>
        </Appear>
        <Appear>
          <ListItem>☠️ DEATH</ListItem>
        </Appear>
        <Appear>
          <ListItem>Live as long as possible</ListItem>
        </Appear>
      </OrderedList>
    </SlideLayout.Center>
    <SlideLayout.Center>
      <Heading fontSize="25vh">{ENGAGED}</Heading>
    </SlideLayout.Center>
    <EmojiSlide emoji="👷‍♀️🚧👷🏻‍♂️"></EmojiSlide>
    <SlideLayout.Center>
      <Heading>DIY Snek!</Heading>
      <OrderedList>
        <ListItem>Sockets!</ListItem>
        <ListItem>Canvas!</ListItem>
        <ListItem>Optimism!</ListItem>
      </OrderedList>
    </SlideLayout.Center>
    <SlideLayout.Center>
      <Heading fontSize="50vh">No.</Heading>
    </SlideLayout.Center>
    <SlideLayout.HorizontalImage src={IMAGES.battlesnake} />
    <SlideLayout.Center>
      <Heading>Wait.</Heading>
      <UnorderedList>
        <ListItem>Who am I?</ListItem>
        <ListItem>Where do I exchange my time and talents for money?</ListItem>
        <ListItem>Can you work there, too?</ListItem>
        <ListItem>Should you *care*?</ListItem>
      </UnorderedList>
    </SlideLayout.Center>
    <SlideLayout.TwoColumn
      left={
        <>
          <FlexBox flexDirection="column">
            <Appear priority={1}>
              <Image src={IMAGES.unpub} height="15vh" />
            </Appear>
            <Heading>👋🏻</Heading>
            <Text>
              <s>Michael Schoonmaker</s>
            </Text>
            <Heading>Schoon</Heading>
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
          <small>That's not good. That means 72% of players are better.</small>
        </Text>
      </FlexBox>
    </SlideLayout.Center>
    <SlideLayout.HorizontalImage
      src={IMAGES.battlesnake}
      title="Snakes...with...axes? 🪓"
      titleProps={{
        textAlign: 'center',
      }}
    />
    <SlideLayout.Center>
      <Heading>🕸️🪝</Heading>
      <UnorderedList>
        <ListItem style={{listStyle: 'none'}}>
          <CodeSpan>GET /</CodeSpan>
        </ListItem>
        <ListItem style={{listStyle: 'none'}}>
          <CodeSpan>POST /start</CodeSpan>
        </ListItem>
        <ListItem style={{listStyle: 'none'}}>
          <CodeSpan>POST /move</CodeSpan>
        </ListItem>
        <ListItem style={{listStyle: 'none'}}>
          <CodeSpan>POST /end</CodeSpan>
        </ListItem>
      </UnorderedList>
    </SlideLayout.Center>
    <Slide>
      <Heading>
        <CodeSpan>GET /</CodeSpan>
      </Heading>
      <CodePane highlightRanges={[6, 7, 5, 4]} language="json">{`
        // Response
        {
          "apiversion":"1",
          "author":"Schoonology",
          "color":"#204581",
          "head":"shades",
          "tail":"wave",
          "version":"0.3.2"
        }
      `}</CodePane>
    </Slide>
    <Slide>
      <FlexBox flexDirection="row">
        <Heading>
          <CodeSpan>POST /start</CodeSpan>
        </Heading>
        <Heading>
          <CodeSpan>POST /end</CodeSpan>
        </Heading>
      </FlexBox>
      <CodePane language="json">{`
        // Request
        {
          "game": { "id": ..., "ruleset": ..., },
          "turn": 0,
          "board": ...
        }
      `}</CodePane>
      <CodePane language="json">{`
        // Response
        🟢 200 OK 👍🏻🙌🏻💯🔥
      `}</CodePane>
    </Slide>
    <Slide>
      <Heading>
        <CodeSpan>POST /move</CodeSpan>
      </Heading>
      <CodePane language="json">{`
        // Request
        {
          "game": { "id": ..., "ruleset": ..., },
          "turn": 0,
          "board": {
            "height": 11, "width": 11,
            "food": [...], "hazards": [...], "snakes": [...]
          },
        }
      `}</CodePane>
      <CodePane language="json">{`
        // Response
        {
          "move": "left" | "right" | "up" | "down"
        }
      `}</CodePane>
    </Slide>
    <MarkdownSlide>{`
      - 🍗 Each Snake MUST eat something every 100 ticks.
      - 🕰️ Each Snake SHOULD respond within 500ms.
      - 🐍 If two Snakes collide head-to-head, the smaller Snake SHALL die.
      - ☠️ Otherwise, both SHALL die.

        \`\`\`
        The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT",
        "RECOMMENDED", "MAY", and "OPTIONAL" in this document are to be interpreted as described in RFC 2119.
        \`\`\`
    `}</MarkdownSlide>
    <SlideLayout.Center>
      <Heading fontSize="25vh">
        {ENGAGED}
        {ENGAGED}
      </Heading>
    </SlideLayout.Center>
    <GameReplaySlide fps={18} game_id="julia-child" />
    <SlideLayout.Center>
      <UnorderedList>
        <ListItem>Flood filling</ListItem>
        <ListItem>Path finding</ListItem>
        <ListItem>Height maps</ListItem>
      </UnorderedList>
    </SlideLayout.Center>
    <SlideLayout.Center>
      <Heading>Disclaimer</Heading>
    </SlideLayout.Center>
    <Slide>
      <Heading>Play</Heading>
      <UnorderedList>
        <Appear>
          <ListItem>Frameworks</ListItem>
        </Appear>
        <Appear>
          <ListItem>Languages</ListItem>
        </Appear>
        <Appear>
          <ListItem>AI techniques</ListItem>
        </Appear>
      </UnorderedList>
      <Appear>
        <Text>
          Want to want something? Make it <em>play</em>.
        </Text>
      </Appear>
    </Slide>
    <Slide>
      <Heading>Open source</Heading>
      <UnorderedList>
        <ListItem>Rules: Go</ListItem>
        <ListItem>Board: SvelteKit</ListItem>
      </UnorderedList>
      <Text>GitHub: BattlesnakeOfficial</Text>
    </Slide>
    <SlideLayout.Code language="ts">{`
import express from "express";

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.send({
    color: "#ffffff",
    head: "default",
    tail: "default",
  });
});

server.post("/start", (req, res) => {
  res.send({});
});

server.post("/move", (req, res) => {
  res.send({
    move: "right",
  });
});

server.post("/end", (req, res) => {
  res.send({});
});

server.get("/", (req, res) => {});

server.listen(8000).on("listening", () => {
  console.log("READY!");
});
    `}</SlideLayout.Code>
    <GameReplaySlide fps={6} game_id="go-right" />
    <EmojiSlide emoji={ENGAGED} count={3} />

    <EmojiSlide emoji="🧠" />
    <SlideLayout.FullBleedImage src={IMAGES.graph_normie} />
    <SlideLayout.FullBleedImage src={IMAGES.graph_cs} />
    <SlideLayout.FullBleedImage src={IMAGES.graph_cs_2} />
    <SlideLayout.HorizontalImage src={IMAGES.tree_cs} />
    <SlideLayout.Center>
      <Image src={ART.chaotic_evil} height="60vh"></Image>
    </SlideLayout.Center>
    <SlideLayout.Center>
      <Heading>⭕️ Node</Heading>
      <Heading>〰️ Edge</Heading>
    </SlideLayout.Center>
    <SlideLayout.Center>
      <Heading fontSize="50vh">No.</Heading>
    </SlideLayout.Center>
    <SlideLayout.Center>
      <Image src={ART.board} height="60vh"></Image>
    </SlideLayout.Center>
    <EmojiSlide emoji={ENGAGED} count={3} />

    {/*
    SECTION
      */}
    <EmojiSlide emoji="🧰" />
    <SlideLayout.Code language="ts" title="You can't go wrong, he said...">{`
      server.post("/move", (req, res) => {
        res.send({
          move: "right",
        });
      });
    `}</SlideLayout.Code>
    {/* TODO(schoon): This color isn't working. */}
    <SlideLayout.Section backgroundColor="#909090">
      <FlexBox flexDirection="row">
        <Image src={IMAGES.paint_bucket} width="40vh" />
        <Heading>Flood fill</Heading>
      </FlexBox>
    </SlideLayout.Section>
    <SlideLayout.Code
      backgroundColor="#909090"
      codePaneProps={{
        highlightRanges: [1, [4, 9], [11, 19], [13, 19], [25, 40]],
      }}
      language="ts">{`
      function floodFill(board: Board, x: number, y: number, seen = new Set()): number {
        const hash = x + (y << 8);

        if (seen.has(hash)) {
          return 0;
        } else if (!safe(board, x, y)) {
          return 0;
        } else {
          const score = 1;

          seen.add(hash);

          return (
            score +
            floodFill(board, x - 1, y - 1, seen) +
            floodFill(board, x - 1, y + 1, seen) +
            floodFill(board, x + 1, y - 1, seen) +
            floodFill(board, x + 1, y + 1, seen)
          );
        }
      }

      server.post("/move", (req: MoveRequest, res: MoveResponse) => {
        const options = {
          left: floodFill(
            req.body.board,
            req.body.you.head.x - 1,
            req.body.you.head.y
          ),
          right: floodFill(
            req.body.board,
            req.body.you.head.x + 1,
            req.body.you.head.y
          ),
          up: floodFill(req.body.board, req.body.you.head.x, req.body.you.head.y + 1),
          down: floodFill(
            req.body.board,
            req.body.you.head.x,
            req.body.you.head.y - 1
          ),
        };

        res.send({
          move: best(options),
        });
      });
    `}</SlideLayout.Code>
    <SlideLayout.Center backgroundColor="#909090">
      <Image src={IMAGES.bs_board} />
    </SlideLayout.Center>
    <GameReplaySlide fps={18} game_id="flood-fill" />

    {/*
    SECTION
    */}
    <SlideLayout.FullBleedImage src={IMAGES.burger}>
      <Text>
        Photo by{' '}
        <a href="https://unsplash.com/@jonathanborba?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
          Jonathan Borba
        </a>{' '}
        on{' '}
        <a href="https://unsplash.com/photos/8l8Yl2ruUsg?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
          Unsplash
        </a>
      </Text>
    </SlideLayout.FullBleedImage>
    <SlideLayout.FullBleedImage src={IMAGES.fish}>
      <Text>
        Photo by{' '}
        <a href="https://unsplash.com/@foodiesfeed?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
          Jakub Kapusnak
        </a>{' '}
        on{' '}
        <a href="https://unsplash.com/photos/vLQzopDRSNI?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
          Unsplash
        </a>
      </Text>
    </SlideLayout.FullBleedImage>
    <SlideLayout.Code language="json">{`
    {
      "board": {
        "food": [
          [5, 8],
          ...
        ]
      }
    }
    `}</SlideLayout.Code>
    <SlideLayout.Center>
      <FlexBox flexDirection="column">
        <Heading>🔍</Heading>
        <Heading>"Path finding"</Heading>
        <Text>"Pathing"</Text>
      </FlexBox>
    </SlideLayout.Center>
    <SlideLayout.Section>
      <Heading>A*</Heading>
    </SlideLayout.Section>
    <Slide>
      <FlexBox flexDirection="column">
        <Heading>Gloss-A*-y</Heading>
        <UnorderedList>
          <Appear>
            <ListItem>
              <strong>Score</strong>, e.g. distance
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              <strong>Heuristic function</strong>, e.g. guess
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              <strong>G score</strong>: known best
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              <strong>Open set</strong>: priority queue
            </ListItem>
          </Appear>
        </UnorderedList>
      </FlexBox>
    </Slide>
    <SlideLayout.Code language="ts">{TEXT.a_star}</SlideLayout.Code>
    <EmojiSlide emoji={ENGAGED} count={3} />
    <SlideLayout.Code language="ts">{TEXT.a_star_heuristic}</SlideLayout.Code>

    <GameReplaySlide fps={18} game_id="a-star" />
    {/*
    SECTION
    */}
    <SlideLayout.FullBleedImage src={IMAGES.autumn}>
      <Text>
        Photo by{' '}
        <a href="https://unsplash.com/@d3waj?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
          Wajid Hussain
        </a>{' '}
        on{' '}
        <a href="https://unsplash.com/photos/ifjEbN18R44?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
          Unsplash
        </a>
      </Text>
    </SlideLayout.FullBleedImage>
    <SlideLayout.FullBleedImage
      src={IMAGES.autumn_gray}
      transition={{
        from: {
          transform: '',
        },
        enter: {
          transform: '',
        },
        leave: {
          transform: '',
        },
      }}>
      <Text>
        Photo by{' '}
        <a href="https://unsplash.com/@d3waj?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
          Wajid Hussain
        </a>{' '}
        on{' '}
        <a href="https://unsplash.com/photos/ifjEbN18R44?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
          Unsplash
        </a>
      </Text>
    </SlideLayout.FullBleedImage>
    <SlideLayout.Center>
      <Heading>Flood fill: Don't crash</Heading>
      <Heading>A*: Don't starve</Heading>
    </SlideLayout.Center>
    <SlideLayout.FullBleedImage src={ART.height_map} />
    <SlideLayout.Center>
      <Image src={require('../assets/img/haribo.webp').default} height="80vh" />
    </SlideLayout.Center>
    <SlideLayout.FullBleedImage
      src={require('../assets/img/aibo.jpg').default}
    />
    <SlideLayout.FullBleedImage
      src={require('../assets/img/spot.jpg').default}
    />

    {/*
    SECTION
     */}
    <SlideLayout.Center>
      <Heading>Neural networks</Heading>
    </SlideLayout.Center>
    <SlideLayout.FullBleedImage
      src={require('../assets/img/hot-topic.jpg').default}
    />
    <SlideLayout.FullBleedImage src={ART.neural_network} />
    <SlideLayout.Center>
      <UnorderedList>
        <ListItem>Convolutional Neural Networks</ListItem>
        <ListItem>Generative Adversarial Networks</ListItem>
        <ListItem>Generative Pre-trained Transformers</ListItem>
        <ListItem>Three Letter Acronyms</ListItem>
      </UnorderedList>
    </SlideLayout.Center>
    <SlideLayout.FullBleedImage src={ART.neural_network} />
    <EmojiSlide emoji="🤷🏻‍♂️" />

    {/*
    SECTION
     */}
    <SlideLayout.Center>
      <Heading>Height maps</Heading>
    </SlideLayout.Center>
    <SlideLayout.FullBleedImage src={ART.height_map_2} />
    <SlideLayout.Code language="json" title="Health & Hazards">{`
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
    `}</SlideLayout.Code>
    <EmojiSlide emoji={ENGAGED} count={1} />
    <SlideLayout.Code language="ts">{TEXT.height_map}</SlideLayout.Code>
    <EmojiSlide emoji={ENGAGED} count={1} />
    <GameReplaySlide fps={18} game_id="maze" />

    {/*
    SECTION
     */}
    <SlideLayout.Center>
      <Heading>What now?</Heading>
      <UnorderedList>
        <Appear>
          <ListItem>Decision-making</ListItem>
        </Appear>
        <Appear>
          <ListItem>Frameworks</ListItem>
        </Appear>
        <Appear>
          <ListItem>Languages</ListItem>
        </Appear>
        <Appear>
          <ListItem>Hosting</ListItem>
        </Appear>
      </UnorderedList>
    </SlideLayout.Center>
    <SlideLayout.Center>
      <Heading>Advanced</Heading>
      <UnorderedList>
        <Appear>
          <ListItem>Minimax</ListItem>
        </Appear>
        <Appear>
          <ListItem>Genetic algorithms</ListItem>
        </Appear>
        <Appear>
          <ListItem>Generative AI</ListItem>
        </Appear>
      </UnorderedList>
    </SlideLayout.Center>
    <EmojiSlide emoji={ENGAGED} />

    <GameReplaySlide fps={18} game_id="duel" />
    <GameReplaySlide fps={18} game_id="duel-2" />
    {/*
    SECTION
     */}
    <SlideLayout.Center>
      <FlexBox flexDirection="column">
        <Image src={IMAGES.battlesnake} width="100%"></Image>
        <Text>play.battlesnake.com</Text>
        <Heading>@schoon</Heading>
        <Text>hello @ schoonology.com</Text>
      </FlexBox>
    </SlideLayout.Center>
    <SlideLayout.HorizontalImage
      src={IMAGES.battlesnake}
      title="play.battlesnake.com"
      titleProps={{
        textAlign: 'center',
      }}
    />

    {/* END */}
  </Deck>
);

createRoot(document.getElementById('root')).render(<Presentation />);
