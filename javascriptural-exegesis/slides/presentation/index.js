import React from "react"
import * as Spectacle from "spectacle"
import preloader from "spectacle/lib/utils/preloader"
for (let key in Spectacle) { global[key] = Spectacle[key] }

const images = {
}

preloader(images)
require("../assets/style.css")

import { theme, colors } from "./style.js"

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["slide"]} transitionDuration={100} progress="none" theme={theme} controls={false}>
        <Slide bgColor={colors.bg('title')} textColor={colors.PRIMARY_TEXT}>
          <Heading fit textColor={colors.JAVASCRIPT}>
            JavaScriptural
          </Heading>
          <Heading fit>
            Exegesis
          </Heading>
        </Slide>
        <Slide bgColor={colors.bg('religion')}>
          <BlockQuote>
            <Quote textColor={colors.PRIMARY_TEXT}>A conscientious scruple; scrupulosity. <S type="none" textSize="0.5em" textColor={colors.JOKE_TEXT}>← 19 point word!</S></Quote>
            <Cite textColor={colors.SUBTLE_TEXT}>The Century Dictionary</Cite>
          </BlockQuote>
        </Slide>
        <Slide bgColor={colors.bg('religion')}>
          <BlockQuote>
            <Quote textColor={colors.PRIMARY_TEXT}>A pursuit or interest followed with great devotion.</Quote>
            <Cite textColor={colors.SUBTLE_TEXT}>English Oxford Dictionaries</Cite>
          </BlockQuote>
        </Slide>
        <Slide bgColor={colors.bg('religion')}>
          <BlockQuote>
            <Quote textColor={colors.PRIMARY_TEXT}>Strictness of fidelity in conforming to any practice, as if it were an enjoined rule of conduct.</Quote>
            <Cite textColor={colors.SUBTLE_TEXT}>GNU Collaborative International Dictionary of English</Cite>
          </BlockQuote>
        </Slide>
        <Slide bgColor={colors.bg('religion')}>
          <Heading fit margin="0 0 8vh" textColor={colors.PRIMARY_TEXT}>
            religion (religio-)
          </Heading>
          <Text fit textColor={colors.BRAND_TEXT}>
            "obligation", "bond", <S type="none" textColor={colors.SUBTLE_TEXT}>or</S> "reverence"
          </Text>
        </Slide>
        <Slide bgColor={colors.bg('javascript')}>
          <Heading fit>Thoughtleader</Heading>
          <Heading fit caps margin="3vh 0 0" textColor={colors.BRAND_TEXT}>Best practices</Heading>
          <Heading fit>Job security</Heading>
        </Slide>
        <Slide bgColor={colors.bg('javascript')}>
          <Heading fit>Programming language</Heading>
          <Heading fit caps textColor={colors.BRAND_TEXT}>Build process</Heading>
          <Heading fit>Unit testing</Heading>
          <Heading fit caps textColor={colors.BRAND_TEXT}>Microservices</Heading>
          <Heading fit>Containerizaion/Virtualization</Heading>
        </Slide>
        <Slide bgColor={colors.bg('javascript')}>
          <Heading fit>
            <S type="none" textColor={colors.JAVASCRIPT}>JavaScript</S> is a religion.
          </Heading>
        </Slide>
        <Slide bgColor={colors.bg('dogma')}>
          <Heading fit margin="0 0 8vh" textColor={colors.PRIMARY_TEXT}>
            δόγμα (dogma)
          </Heading>
          <Text fit textColor={colors.BRAND_TEXT}>
            "doctrine" <S type="none" textColor={colors.SUBTLE_TEXT}>or</S> "opinion"
          </Text>
        </Slide>
        <Slide bgColor={colors.bg('dogma')}>
          <Heading fit textColor={colors.BRAND_TEXT}>
            δόγμα (dogma)
          </Heading>
          <BlockQuote>
            <Quote textColor={colors.PRIMARY_TEXT}>A principle or set of principles laid down by an authority as incontrovertibly true.</Quote>
            <Cite textColor={colors.SUBTLE_TEXT}>English Oxford Dictionaries</Cite>
          </BlockQuote>
        </Slide>
        <Slide bgColor={colors.bg('pragma')}>
          <Heading fit margin="0 0 8vh" textColor={colors.PRIMARY_TEXT}>
            πράγμα (pragma)
          </Heading>
          <Text fit textColor={colors.BRAND_TEXT}>
            "deed", "act", <S type="none" textColor={colors.SUBTLE_TEXT}>or</S> "thing"
          </Text>
        </Slide>
        <Slide bgColor={colors.bg('pragma')}>
          <Heading fit textColor={colors.BRAND_TEXT}>
            πράγμα (pragma)
          </Heading>
          <BlockQuote>
            <Quote textColor={colors.PRIMARY_TEXT}>Relating to matters of fact or practical affairs often to the exclusion of intellectual or artistic matters.</Quote>
            <Cite textColor={colors.SUBTLE_TEXT}>Merriam-Webster Dictionary</Cite>
          </BlockQuote>
        </Slide>
        <Slide bgColor={colors.SEPIA_BG} textColor={colors.PRIMARY_TEXT}>
          <div className="vignette"></div>
          <Heading fit margin="8vh 0">Descriptive</Heading>
          <Heading textSize="100vh" textFont="Baskerville" textColor={colors.INVISIBLE_TEXT} style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
          }}>&amp;</Heading>
          <Heading fit margin="8vh 0">Prescriptive</Heading>
        </Slide>
        <Slide bgColor={colors.bg('after-pragma')} notes={`
We're not talking about "what could have been", we're talking about what is. I'm not interested in deriving perfect _dogma_ or deriding existing _dogma_ around how JavaScript is written. My goal is to come to a _pragmatic_ set of rules for teams working in JavaScript to write effective, consistent JavaScript.
I may be tipping my hand a bit, but my number one opponent with a message like this is the tech lead proclaiming from on high a set of arbitrary rules that make everyone's life harder beneath him. (Though it need not be a "him", I certainly see this as a male-dominated behaviour.) The ideal outcome, on the other hand, would be for more teams to use tools like this to quickly come to complete, honest, inclusive consensus around coding styles and patterns.
Just as with religion, there needs to be room for us to disagree on the conclusion, even if I hope to make a compelling argument for the method by which we reach them.
`}>
          <Heading>&ldquo;Methods defined in a <Code textColor={colors.PRIMARY_TEXT} textSize="1em">class</Code> should be bound automatically.&rdquo;</Heading>
        </Slide>
        <Slide bgColor={colors.bg('after-pragma')}>
          <Heading fit caps>Priorities:</Heading>
          <Heading textAlign="left">1. Understanding</Heading>
          <Heading textAlign="left">2. Maintenance</Heading>
          <Heading textAlign="left">3. Extension</Heading>
        </Slide>
        <Slide bgColor={colors.bg('exegesis')}>
          <Heading fit textColor={colors.PRIMARY_TEXT}>
            ἐξήγησις (exegesis)
          </Heading>
          <Text fit margin="6vh 0 4vh" textColor={colors.BRAND_TEXT}>
            "explanation"
          </Text>
          <Heading fit textColor={colors.SUBTLE_TEXT}>
            (ἐξηγεῖσθαι, "to lead out")
          </Heading>
        </Slide>
        <Slide bgColor={colors.bg('exegesis')}>
          <Heading fit textColor={colors.BRAND_TEXT}>
            ἐξήγησις (exegesis)
          </Heading>
          <BlockQuote>
            <Quote textColor={colors.PRIMARY_TEXT}>Critical explanation or interpretation of a text, especially of scripture.</Quote>
            <Cite textColor={colors.SUBTLE_TEXT}>English Oxford Dictionaries</Cite>
          </BlockQuote>
        </Slide>
        <Slide bgColor={colors.bg('eisegesis')}>
          <Heading fit margin="0 0 8vh" textColor={colors.PRIMARY_TEXT}>
            [εἰςήγησις] (eisegesis)
          </Heading>
          <Heading fit textColor={colors.SUBTLE_TEXT}>
            (εἰς, "into")
          </Heading>
        </Slide>
        <Slide bgColor={colors.bg('eisegesis')}>
          <Heading fit textColor={colors.BRAND_TEXT}>
            εἰςήγησις (eisegesis)
          </Heading>
          <BlockQuote>
            <Quote textColor={colors.PRIMARY_TEXT}>A subjective method of interpretation by introducing one's own opinions into the original.</Quote>
            <Cite textColor={colors.SUBTLE_TEXT}>The Century Dictionary</Cite>
          </BlockQuote>
        </Slide>
        <Slide bgColor={colors.bg('method')} textColor={colors.PRIMARY_TEXT}>
          <Heading fit textColor={colors.BRAND_TEXT} margin="0 0 2vh">
            Exegetical methodology
          </Heading>
          <Table>
            <TableBody>
              <TableRow>
                <TableItem>Genre</TableItem>
                <TableItem>Origins</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>History</TableItem>
                <TableItem>Culture</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>Author(s)</TableItem>
                <TableItem>Audience</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>Syntax</TableItem>
                <TableItem>Grammar</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>Philology</TableItem>
                <TableItem>...</TableItem>
              </TableRow>
            </TableBody>
          </Table>
        </Slide>
        <Slide bgColor={colors.bg('method')} textColor={colors.PRIMARY_TEXT}>
          <Heading fit>
            induction
          </Heading>
          <BlockQuote>
            <Quote textColor={colors.PRIMARY_TEXT}>The inference of a general law from particular instances.</Quote>
            <Cite textColor={colors.SUBTLE_TEXT}>English Oxford Dictionaries</Cite>
          </BlockQuote>
        </Slide>
        <Slide bgColor={colors.bg('method')} textColor={colors.PRIMARY_TEXT}>
          <Heading fit textColor={colors.BRAND_TEXT}>
            Inductive Study
          </Heading>
          <Heading fit>
            I. Observation
          </Heading>
          <Heading fit>
            II. Interpretation
          </Heading>
          <Heading fit>
            III. Application
          </Heading>
        </Slide>
        <Slide bgColor={colors.bg('method')} textColor={colors.PRIMARY_TEXT}>
          <Heading fit textColor={colors.BRAND_TEXT}>
            Inductive Study
          </Heading>
          <Heading fit>
            I. Observation
          </Heading>
          <Heading fit>
            II. Interpretation
          </Heading>
          <Heading fit>
            III. Application
          </Heading>
        </Slide>
        <Slide bgColor={colors.bg('template-strings')} textColor={colors.PRIMARY_TEXT}>
          <Heading fit>
            Template strings
          </Heading>
          <List ordered type="I">
            <ListItem>
              Inline newlines
            </ListItem>
            <ListItem>
              This is something that should work in JS.
            </ListItem>
            <ListItem>
              Let's do that.
            </ListItem>
          </List>
        </Slide>
        <Slide bgColor={colors.bg('proxies')} textColor={colors.PRIMARY_TEXT}>
          <Heading fit>
            Proxies
          </Heading>
          <List ordered type="I">
            <ListItem>
              _
            </ListItem>
            <ListItem>
              This is something that should work in JS.
            </ListItem>
            <ListItem>
              Let's do that.
            </ListItem>
          </List>
        </Slide>
        <Slide bgColor={colors.bg('promises')} textColor={colors.PRIMARY_TEXT}>
          <Heading fit caps>
            Promises
          </Heading>
          <Heading fit textColor={colors.JOKE_TEXT}>
            This is now Yet Another Talk About Promises™.
          </Heading>
        </Slide>
        <Slide bgColor={colors.bg('promises')} textColor={colors.PRIMARY_TEXT}>
          <Text textColor={colors.PRIMARY_TEXT}>The return value of `then` (and, by extension, `catch`) can be:</Text>
          <List ordered type="I">
            <ListItem>
              A value
            </ListItem>
            <ListItem>
              A thenable
            </ListItem>
          </List>
        </Slide>
        <Slide bgColor={colors.bg('arrow-functions')} textColor={colors.PRIMARY_TEXT}>
          <Heading fit caps>
            Arrow Functions
          </Heading>
          <Heading fit textColor={colors.JOKE_TEXT}>
            Salt & pepper to taste
          </Heading>
        </Slide>
        <Slide bgColor={colors.bg('reflect')} textColor={colors.PRIMARY_TEXT}>
          <Heading fit caps>
            Reflect
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
