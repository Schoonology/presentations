import React from "react";
import ReactDOM from "react-dom";
import {
  Appear,
  Box,
  CodePane,
  Deck,
  FlexBox,
  FullScreen,
  Heading,
  Image,
  Notes,
  Progress,
  Slide,
  SlideLayout,
  Stepper,
  Text,
} from "spectacle";
import { Column } from "./components/layout";
import { EmojiSlide } from "./components/emoji-slide";
import { FitHeading } from "./components/fit-heading";
import { Keybindings } from "./components/keybindings";
import { Strikeout } from "./components/strikeout";
import { ENGAGED, THEME } from "./theme";

// SPECTACLE_CLI_THEME_START
const theme = {
  ...THEME,
};
// SPECTACLE_CLI_THEME_END

const transition = {
  from: {},
  enter: {},
  leave: {},
};

// SPECTACLE_CLI_TEMPLATE_START
const template = () => <></>;
// SPECTACLE_CLI_TEMPLATE_END

function Presentation() {
  return (
    <Deck theme={theme} template={template} transition={transition}>
      <Keybindings />

      <EmojiSlide>{ENGAGED}</EmojiSlide>
      <Slide>
        <Column>
          <FitHeading color="primary" fontWeight={900}>
            Shuck JavaScript
          </FitHeading>
          <Heading>or</Heading>
          <FitHeading color="primary" fontWeight={900}>
            How to shuck oysters<br></br>and write better JS
          </FitHeading>
        </Column>
      </Slide>
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
                <Image
                  alt="UNPUB logo"
                  src={
                    require("../../were-snaking-it-live/assets/img/unpub.png")
                      .default
                  }
                  height="15vh"
                />
              </Appear>
              <Heading fontSize="10vh">👋🏻</Heading>
              <Stepper priority={-3} values={[true, false]}>
                {(value) =>
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
                  src={
                    require("../../were-snaking-it-live/assets/img/squad.svg")
                      .default
                  }
                  height="25vh"
                  style={{
                    backgroundColor: "black",
                    marginBottom: "5vh",
                    padding: "3vh",
                  }}
                />
              </Appear>
              <Appear priority={0}>
                <Image
                  src={
                    require("../../were-snaking-it-live/assets/img/lop.png")
                      .default
                  }
                  height="25vh"
                  style={{
                    marginBottom: "5vh",
                  }}
                />
              </Appear>
            </FlexBox>
          </>
        }
      />
      <SlideLayout.FullBleedImage
        alt="Baltimore skyline"
        src={
          require("../../were-snaking-it-live/assets/img/unsplash/baltimore-skyline.jpg")
            .default
        }
      />
      <Slide>
        <Column>
          <Heading fontSize="25vh" fontWeight={900}>
            Oysters
          </Heading>
        </Column>
      </Slide>
      <Slide>
        <Column>
          <Heading fontSize="15vh" fontWeight={900}>
            This is an oyster
          </Heading>
        </Column>
      </Slide>
      <Slide>
        <Column>
          <Heading fontSize="15vh" fontWeight={900}>
            How (Not) to Shuck an Oyster
          </Heading>
        </Column>
      </Slide>
      <Slide>
        <Column>
          <Heading fontSize="15vh" fontWeight={900}>
            What is an oyster?
          </Heading>
        </Column>
        <Notes>
          - Bivalve - They don't want you to eat them - Gap in the back - Hinge
        </Notes>
      </Slide>
      <Slide>
        <Column>
          <Heading fontSize="15vh" fontWeight={900}>
            How to Shuck an Oyster
          </Heading>
        </Column>
      </Slide>
      <Slide>
        <Column>
          <Heading fontSize="15vh" fontWeight={100}>
            ( 🤔 Isn't this a JavaScript conference? )
          </Heading>
        </Column>
      </Slide>
      <Slide>
        <Column>
          <Heading fontSize="12vh" fontWeight={900}>
            JS is hard enough: Coworker edition
          </Heading>
        </Column>
        <Notes>
          A coworker that makes things too hard? Why do you think that is?
        </Notes>
      </Slide>
      <Slide>
        <Column>
          <Heading fontSize="12vh" fontWeight={900}>
            Why?
          </Heading>
          <Text>...do they do that?</Text>
        </Column>
      </Slide>
      <Slide>
        <Column>
          <Heading fontSize="15vh" fontWeight={900}>
            No Superstition
          </Heading>
          <Text>
            Programmers are superstitious.<br></br>JavaScript programmers,
            doubly so.
          </Text>
        </Column>
      </Slide>
      <Slide>
        <Column>
          <Heading fontFamily="monospace" fontSize="15vh" fontWeight={900}>
            E_MENTAL_MODEL
          </Heading>
          <Text>
            Programmers are superstitious
            <br />
            when they <em>know</em>,<br />
            but they do not <em>understand</em>.
          </Text>
        </Column>
      </Slide>
      <Slide>
        <Column>
          <Heading fontSize="15vh" fontWeight={900}>
            JS is hard enough
          </Heading>
          <Text>
            Why do <em>you</em> do that?
          </Text>
        </Column>
      </Slide>
      <EmojiSlide>🦪🍋🧂</EmojiSlide>
      <Slide>
        <Column>
          <Heading fontSize="15vh" fontWeight={900}>
            <code>function</code> was good, actually
          </Heading>
          <CodePane language="ts">{`
            const infoContainerOpacity = useCallback(() => {
              if (!selectedCommunity || isSelectedCommunity) {
                return 1;
              } else {
                return 0.5;
              }
            }, [isSelectedCommunity, selectedCommunity]);
          `}</CodePane>
        </Column>
      </Slide>
      <Slide>
        <Column>
          <Heading fontSize="15vh" fontWeight={900}>
            Docs & Snippets
          </Heading>
          <CodePane language="ts">{`
// If we're running _this_ file, start the server.
import { type Server } from 'node:http';

if (require.main === module) {
  server
    .listen(Number(process.env.PORT ?? 0))
    .on('listening', function (this: Server) {
      const addrinfo = this.address();
      if (typeof addrinfo === 'string') {
        console.log(\`Listening on addrinfo...\`);
      } else if (addrinfo) {
        console.log(\`Listening on port :\${addrinfo.port}...\`);
      }
    });
}          `}</CodePane>
        </Column>
      </Slide>
      <Slide>
        <Column>
          <Heading fontSize="15vh" fontWeight={900}>
            Docs & Snippets
          </Heading>
          <CodePane language="ts">{`
            "RN Component (Function)": {
              "prefix": "comp",
              "body": [
                "import React from 'react';",
                "",
                "type $1Props = {",
                "$2",
                "};",
                "",
                "export function $1({$3}: $1Props) {",
                "  return (",
                "  );",
                "}",
                ""
              ],
              "description": "Scaffolding for a React Native functional component"
            }
          `}</CodePane>
        </Column>
      </Slide>
      <Slide>
        <Column>
          <Heading fontSize="15vh" fontWeight={900}>
            Batons & Data Structures
          </Heading>
          <CodePane language="js">{`
            const [isActive, setIsActive] = useState(false);
            const [currentValue, setCurrentValue] = useState(42);
            const [...] = useState(...);
          `}</CodePane>
        </Column>
      </Slide>
      <Slide>
        <Column>
          <Heading fontSize="15vh" fontWeight={900}>
            Laptops
          </Heading>
          <Text>Breaking your neck is only cool until you're 30.</Text>
        </Column>
      </Slide>
      <Slide>
        <Column>
          <Heading fontSize="15vh" fontWeight={900}>
            GraphQL
          </Heading>
          <Text>Doing twice the work in the wrong place</Text>
        </Column>
      </Slide>
      <Slide>
        <Column>
          <Heading fontSize="15vh" fontWeight={900}>
            Flux / Redux
          </Heading>
          <Text>Worse than MVVM in every conceivable way.</Text>
        </Column>
      </Slide>
      <Slide>
        <Column>
          <Heading fontSize="15vh" fontWeight={900}>
            Webpack
          </Heading>
          <Text>You really just want Make. Trust me.</Text>
        </Column>
      </Slide>
      <Slide>
        <Column>
          <Heading fontSize="15vh" fontWeight={900}>
            I do it, too.
          </Heading>
        </Column>
      </Slide>
    </Deck>
  );
}

ReactDOM.render(<Presentation />, document.getElementById("root"));
