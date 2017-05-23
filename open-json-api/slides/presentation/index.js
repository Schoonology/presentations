import React from "react"
import * as Spectacle from "spectacle"
import preloader from "spectacle/lib/utils/preloader"
import CodeSlide from "spectacle-code-slide"
for (let key in Spectacle) { global[key] = Spectacle[key] }

const images = {
  beach: require('../assets/beach.jpg'),
  bellingham: require('../assets/bellingham.jpg'),
  jsonapi: require('../assets/jsonapi.jpg'),
  openapi: require('../assets/openapi.jpg'),
  logo_td: require('../../../shared/assets/td-logo-white.svg'),
  logo_redrobot: require('../assets/logo_redrobot.png'),
  logo_strongloop: require('../assets/logo_strongloop.png'),
  logo_38studios: require('../assets/logo_38studios.jpg'),
  logo_faithlife: require('../assets/logo_faithlife.png'),
  logo_smack: require('../assets/logo_smack.png'),
}

const examples = {
  story_1: require('../assets/example_story_1.txt'),
  story_2: require('../assets/example_story_2.txt'),
  story_3: require('../assets/example_story_3.txt'),
  story_4: require('../assets/example_story_4.txt'),
  story_5: require('../assets/example_story_5.txt'),
  story_6: require('../assets/example_story_6.txt'),
  story_7: require('../assets/example_story_7.txt'),
  openapi: require('../assets/example_openapi.txt'),
  jsonapi: require('../assets/example_jsonapi.txt'),
}

preloader(images)
preloader(examples)
require("../assets/styles.css");

import { theme, colors } from "./style.js"

function trimLeft(spaces) {
  return function trimLeftSpaces(line) {
    return line.slice(spaces)
  }
}

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={[]} transitionDuration={0} progress="none" theme={theme} controls={false}>
        <Slide bgColor={colors.SECONDARY_BG} textColor={colors.PRIMARY_TEXT}>
          <Heading fit>2:15—Open JSON API in <S type="none" textColor={colors.JAVASCRIPT}>Node.js</S></Heading>
          <Heading fit margin="4vh 0">ALSO: I have 10+ stickers on my laptop!</Heading>
          <Heading fit textColor={colors.SUBTLE_TEXT}>(That's #9 on your bingo card.)</Heading>
        </Slide>
        <Slide bgColor={colors.PRIMARY_BG}>
          <Heading textColor={colors.BRAND_TEXT} fit caps>Hello!</Heading>
          <Layout>
            <Fill>
              <Image src={images.logo_td} width="50%" margin='0 !important' display="block" />
            </Fill>
            <Fill>
              <List style={{listStyle: 'none'}} textColor={colors.PRIMARY_TEXT}>
                <ListItem>Michael Schoonmaker</ListItem>
                <ListItem><Link textColor={colors.LINK_TEXT} href="https://twitter.com/Schoonology">@Schoonology</Link></ListItem>
                <ListItem><Link textColor={colors.LINK_TEXT} href="mailto:schoon@testdouble.com">schoon@testdouble.com</Link></ListItem>
              </List>
            </Fill>
          </Layout>
          <Heading textColor={colors.JOKE_TEXT} fit>(If you would like a <Image src={images.logo_td} style={{
            height: '1em',
            verticalAlign: 'middle',
            opacity: 0.4,
          }}></Image> sticker, ask!)</Heading>
        </Slide>
        <Slide bgColor={colors.SECONDARY_BG} textColor={colors.PRIMARY_TEXT} notes="Are you at the right talk?">
          <Heading fit>Open JSON API</Heading>
          <Heading fit margin="1vh 0 0">↪ in <S type="none" textColor={colors.JAVASCRIPT}>Node.js</S></Heading>
        </Slide>
        <Slide bgImage={images.bellingham}></Slide>
        <Slide bgColor={colors.TERTIARY_BG} textColor={colors.PRIMARY_TEXT}>
          <Heading fit caps>Who am I?</Heading>
          <Heading textColor={colors.BRAND_TEXT} fit>Software Development Consultant</Heading>
          <Heading fit margin="4vh 0">🕵🏽🕵🏻‍♀️ &ldquo;Agent&rdquo; 🕵🏾‍♀️🕵🏼</Heading>
          <Heading fit textColor={colors.SUBTLE_TEXT}>(We wind up writing a lot of JavaScript.)</Heading>
        </Slide>
        <Slide bgColor={colors.TERTIARY_BG}>
          <Layout>
            <Fill>
              <div style={{
                background: 'white',
                height: '20vh',
                margin: '2vh',
                width: '20vh',
                border: '2vh solid white',
                borderRadius: '2vh',
              }}><Image src={images.logo_38studios} height="100%"/></div>
            </Fill>
            <Fill>
              <div style={{
                background: 'white',
                height: '20vh',
                margin: '2vh',
                width: '20vh',
                border: '2vh solid white',
                borderRadius: '2vh',
                position: 'relative',
              }}><Image src={images.logo_redrobot} width="100%" style={{
                left: '50%',
                position: 'absolute',
                top: '50%',
                transform: 'translate(-50%, -50%)',
              }}/></div>
            </Fill>
            <Fill>
              <div style={{
                background: 'white',
                height: '20vh',
                margin: '2vh',
                width: '20vh',
                border: '2vh solid white',
                borderRadius: '2vh',
              }}><Image src={images.logo_strongloop} height="100%"/></div>
            </Fill>
            <Fill>
              <div style={{
                background: 'white',
                height: '20vh',
                margin: '2vh',
                width: '20vh',
                border: '2vh solid white',
                borderRadius: '2vh',
              }}><Image src={images.logo_faithlife} height="95%"/></div>
            </Fill>
          </Layout>
          <Heading fit>MMORPGs</Heading>
          <Heading fit>Social Networks</Heading>
          <Heading fit>Developer Ergonomics</Heading>
        </Slide>
        <Slide bgColor={colors.SECONDARY_BG} notes="This talk is really about caring.">
          <Heading textColor={colors.PRIMARY_TEXT} fit caps>Who are you?</Heading>
          <Heading textColor={colors.BRAND_TEXT} fit>1+ people building or selling an API</Heading>
        </Slide>


        <Slide bgColor={colors.PRIMARY_BG}>
          <Heading fit margin="-1em 0 0"><Image src={images.logo_smack} style={{
            height: '1em',
            verticalAlign: 'bottom',
          }}></Image> snack</Heading>
        </Slide>
        <Slide bgColor={colors.PRIMARY_BG} notes="First version">
          <Heading fit margin="0 0 2vh 0">
            <Code textColor={colors.PRIMARY_TEXT}>GET /v1/users/:userId</Code>
          </Heading>
          <CodePane textSize='3vh' lang='json' source={examples.story_1}></CodePane>
        </Slide>
        <Slide bgColor={colors.PRIMARY_BG} notes="Teams team is done.">
          <Heading fit margin="0 0 2vh 0">
            <Code textColor={colors.PRIMARY_TEXT}>GET /v1/users/:userId</Code>
          </Heading>
          <CodePane textSize='3vh' lang='json' source={examples.story_2}></CodePane>
        </Slide>
        <Slide bgColor={colors.PRIMARY_BG} notes="Product: Multiple teams">
          <Heading fit margin="0 0 2vh 0">
            <Code textColor={colors.PRIMARY_TEXT}>GET /v2/users/:userId</Code>
          </Heading>
          <CodePane textSize='2.5vh' lang='json' source={examples.story_3}></CodePane>
        </Slide>
        <Slide bgColor={colors.PRIMARY_BG} notes="Product: Roles on each team">
          <Heading fit margin="0 0 2vh 0">
            <Code textColor={colors.PRIMARY_TEXT}>GET /v3/users/:userId</Code>
          </Heading>
          <CodePane textSize='2vh' lang='json' source={examples.story_4}></CodePane>
        </Slide>
        <Slide bgColor={colors.PRIMARY_BG} notes="Ops: Clock drift, need times">
          <Heading fit margin="0 0 2vh 0">
            <Code textColor={colors.PRIMARY_TEXT}>GET /v4/users/:userId</Code>
          </Heading>
          <CodePane textSize='2vh' lang='json' source={examples.story_5}></CodePane>
        </Slide>
        <Slide bgColor={colors.PRIMARY_BG} notes="CTO: Need hyperlinks.">
          <Heading fit margin="0 0 2vh 0">
            <Code textColor={colors.PRIMARY_TEXT}>GET /v4/users/:userId</Code>
          </Heading>
          <CodePane textSize='1.5vh' lang='json' source={examples.story_6}></CodePane>
        </Slide>
        <Slide bgColor={colors.PRIMARY_BG} notes="Client: Fewer requests">
          <Heading fit margin="0 0 2vh 0">
            <Code textColor={colors.PRIMARY_TEXT}>GET /v4/users/:userId</Code>
          </Heading>
          <CodePane textSize='3vh' lang='json' source={examples.story_7}></CodePane>
        </Slide>
        <Slide bgColor={colors.PRIMARY_BG}>
          <div style={{ transform: 'scale(0.2,0.2)'}}>
            <Heading fit caps>Mess</Heading>
          </div>
        </Slide>


        <Slide bgImage={images.beach} bgDarken={0.2} textColor={colors.PRIMARY_TEXT}>
          <Heading fit>REST</Heading>
        </Slide>
        <Slide bgColor={colors.SECONDARY_BG} textColor={colors.PRIMARY_TEXT}>
          <Heading fit textColor={colors.BRAND_TEXT}>What do we expect from</Heading>
          <Heading fit>REST?</Heading>
        </Slide>
        <Slide bgColor={colors.SECONDARY_BG} textColor={colors.PRIMARY_TEXT}>
          <Heading fit>I. Resources</Heading>
          <List margin="2vh 0" style={{ listStyle: 'none' }}>
            <ListItem margin="1vh 0">
              <Code bgColor={colors.TERTIARY_BG} textSize="6vh" textColor={colors.PRIMARY_TEXT}>POST /widgets</Code>
            </ListItem>
            <ListItem margin="1vh 0">
              <Code bgColor={colors.TERTIARY_BG} textSize="6vh" textColor={colors.PRIMARY_TEXT}>GET /widgets/:widgetId</Code>
            </ListItem>
            <ListItem margin="1vh 0">
              <Code bgColor={colors.TERTIARY_BG} textSize="6vh" textColor={colors.PRIMARY_TEXT}>PUT /widgets/:widgetId</Code>
            </ListItem>
            <ListItem margin="1vh 0">
              <Code bgColor={colors.TERTIARY_BG} textSize="6vh" textColor={colors.PRIMARY_TEXT}>DELETE /widgets/:widgetId</Code>
            </ListItem>
          </List>
        </Slide>
        <Slide bgColor={colors.SECONDARY_BG} textColor={colors.PRIMARY_TEXT}>
          <Heading fit>II. Relationships</Heading>
          <List margin="2vh 0" style={{ listStyle: 'none' }}>
            <ListItem margin="1vh 0">
              <Code bgColor={colors.TERTIARY_BG} textSize="6vh" textColor={colors.PRIMARY_TEXT}>POST /companies/../widgets</Code>
            </ListItem>
            <ListItem margin="1vh 0">
              <Code bgColor={colors.TERTIARY_BG} textSize="6vh" textColor={colors.PRIMARY_TEXT}>GET /widgets/../stores</Code>
            </ListItem>
          </List>
        </Slide>
        <Slide bgColor={colors.SECONDARY_BG} textColor={colors.PRIMARY_TEXT}>
          <Heading fit>3. HATEOAS</Heading>
          <Heading fit textColor={colors.JOKE_TEXT}>(The forgotten letter of the RHEST acronym)</Heading>
          <CodePane textSize='3vh' lang='json' margin="3vh 0 0" source={`GET /companies/:companyId
{
  "id": "acme",
  "name": "ACME Widget Company",
  "widgets": {
    "url": ".../companies/acme/widgets"
  }
}`}></CodePane>
        </Slide>
        <Slide bgColor={colors.SECONDARY_BG} textColor={colors.PRIMARY_TEXT}>
          <Heading fit>IV. Side-loading &amp; Pre-loading</Heading>
          <CodePane textSize='3vh' lang='json' margin="3vh 0 0" source={`{
  "company": {
    "id": "acme",
    "name": "ACME Widget Company",
    "widgets": ...
  },
  "widgets": [{
    "name": "Hornswoggler"
  }, {
    "name": "Bamboozler"
  }]
}`}></CodePane>
        </Slide>
        <Slide bgColor={colors.SECONDARY_BG} textColor={colors.PRIMARY_TEXT}>
          <Heading fit>V. Extensible</Heading>
          <CodePane textSize='3vh' lang='json' margin="3vh 0 0" source={`{
  "company": {
    "id": "acme",
    "name": "ACME Widget Company"
  },
  "metadata": {
    "this-is-here-for-greg": "happy now, greg?"
  }
}`}></CodePane>
        </Slide>
        <Slide bgColor={colors.SECONDARY_BG} textColor={colors.PRIMARY_TEXT}>
          <Heading fit>VI. Bikeshedding</Heading>
        </Slide>
        <Slide bgColor={colors.SECONDARY_BG} textColor={colors.PRIMARY_TEXT}>
          <Heading fit>VI. Bikeshedding</Heading>
          <Heading textSize="40vh" textFont="Baskerville" textColor={colors.TERTIARY_BG} style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
          }}>NOPE</Heading>
        </Slide>
        <Slide bgColor={colors.SECONDARY_BG} textColor={colors.PRIMARY_TEXT}>
          <Heading fit>VI. Documentation</Heading>
          <List>
            <ListItem textSize='7vh'>Interactive</ListItem>
            <ListItem textSize='7vh'>Comprehensive</ListItem>
            <ListItem textSize='7vh'>Up-to-date</ListItem>
          </List>
        </Slide>
        <Slide bgColor={colors.SECONDARY_BG} textColor={colors.PRIMARY_TEXT}>
          <Heading fit>VII. Verification</Heading>
          <Heading fit textColor={colors.SUBTLE_TEXT}>VIII. Authentication</Heading>
          <Heading fit textColor={colors.JOKE_TEXT}>IX. Productization</Heading>
          <Heading fit textColor={colors.INVISIBLE_TEXT}>X. Unicorns and Rainbows</Heading>
        </Slide>


        <Slide bgColor={colors.PRIMARY_BG} textColor={colors.PRIMARY_TEXT} notes="Linguistics">
          <Heading fit margin="8vh 0">Descriptive</Heading>
          <Heading textSize="100vh" textFont="Baskerville" textColor={colors.INVISIBLE_TEXT} style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
          }}>&amp;</Heading>
          <Heading fit margin="8vh 0">Prescriptive</Heading>
        </Slide>
        <Slide bgColor={colors.PRIMARY_BG} textColor={colors.PRIMARY_TEXT}>
          <Heading fit>Descriptive Documentation</Heading>
          <Heading fit textColor={colors.SUBTLE_TEXT}>(Code → Docs)</Heading>
        </Slide>
        <Slide bgColor={colors.PRIMARY_BG} textColor={colors.PRIMARY_TEXT}>
          <Heading fit>Descriptive Documentation</Heading>
          <List ordered>
            <ListItem>Routes <S type="none" textColor={colors.BRAND_TEXT}>(with reflection!)</S></ListItem>
            <ListItem>Request types <S type="none" textColor={colors.BRAND_TEXT}>(also reflection!)</S></ListItem>
            <ListItem>Response types <S type="none" textColor={colors.BRAND_TEXT}>(yep, reflection!)</S></ListItem>
            <ListItem>Validation <S type="none" textColor={colors.BRAND_TEXT}>(… snowflakes?!?)</S></ListItem>
          </List>
        </Slide>
        <Slide bgColor={colors.PRIMARY_BG} textColor={colors.PRIMARY_TEXT}>
          <Heading fit>Descriptive Documentation</Heading>
          <List ordered>
            <ListItem><S type="strikethrough">Routes</S> <S type="none" textColor={colors.JAVASCRIPT}>(JavaScript!)</S></ListItem>
            <ListItem><S type="strikethrough">Request types</S> <S type="none" textColor={colors.JAVASCRIPT}>(JavaScript!)</S></ListItem>
            <ListItem><S type="strikethrough">Response types</S> <S type="none" textColor={colors.JAVASCRIPT}>(JavaScript!)</S></ListItem>
            <ListItem>Validation <S type="none" textColor={colors.BRAND_TEXT}>(… snowflakes?!?)</S></ListItem>
          </List>
        </Slide>
        <Slide bgColor={colors.PRIMARY_BG} textColor={colors.PRIMARY_TEXT} className="slide--snow">
          <Heading fit>Descriptive Documentation</Heading>
          <List ordered>
            <ListItem><S type="strikethrough">Routes</S> <S type="none" textColor={colors.JAVASCRIPT}>(JavaScript!)</S></ListItem>
            <ListItem><S type="strikethrough">Request types</S> <S type="none" textColor={colors.JAVASCRIPT}>(JavaScript!)</S></ListItem>
            <ListItem><S type="strikethrough">Response types</S> <S type="none" textColor={colors.JAVASCRIPT}>(JavaScript!)</S></ListItem>
            <ListItem>Validation <S type="none" textColor={colors.BRAND_TEXT}>(… snowflakes! 👍)</S></ListItem>
          </List>
        </Slide>
        <Slide bgColor={colors.SECONDARY_BG} textColor={colors.PRIMARY_TEXT}>
          <Heading fit>Prescriptive Documentation</Heading>
          <Heading fit textColor={colors.SUBTLE_TEXT}>(Docs → Code)</Heading>
        </Slide>
        <Slide bgColor={colors.SECONDARY_BG} textColor={colors.PRIMARY_TEXT}>
          <Heading fit>Prescriptive Documentation</Heading>
          <List style={{listStyle: 'none'}}>
            <ListItem textSize='4vh'>
              <S type="none" textColor={colors.BRAND_TEXT}>ƒ(</S>Docs<S type="none" textColor={colors.BRAND_TEXT}>) →</S> Routing
            </ListItem>
            <ListItem textSize='4vh'>
              <S type="none" textColor={colors.BRAND_TEXT}>ƒ(</S>Docs<S type="none" textColor={colors.BRAND_TEXT}>) →</S> Request type validation <S type="none" textColor={colors.SUBTLE_TEXT}>(400)</S>
            </ListItem>
            <ListItem textSize='4vh'>
              <S type="none" textColor={colors.BRAND_TEXT}>ƒ(</S>Docs<S type="none" textColor={colors.BRAND_TEXT}>) →</S> Response type validation <S type="none" textColor={colors.SUBTLE_TEXT}>(500)</S>
            </ListItem>
          </List>
        </Slide>


        <Slide bgColor={colors.SECONDARY_BG} textColor={colors.PRIMARY_TEXT}>
          <Heading fit><Image src={images.jsonapi} bgColor="white" style={{
            border: '0.1vh solid white',
            borderRadius: '0.1vh',
            display: 'inline-block',
            height: '2vh',
            margin: '0.1vh 0',
            verticalAlign: 'middle',
            width: '2vh',
          }}></Image> JSON API</Heading>
          <Heading textSize="100vh" textFont="Baskerville" textColor={colors.INVISIBLE_TEXT} style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
          }}>&amp;</Heading>
          <Heading fit><Image src={images.openapi} bgColor="white" style={{
            border: '0.1vh solid white',
            borderRadius: '0.1vh',
            display: 'inline-block',
            height: '2vh',
            margin: '0.1vh 0',
            verticalAlign: 'middle',
            width: '2vh',
          }}></Image> Open API</Heading>
        </Slide>


        <Slide bgColor={colors.SECONDARY_BG} textColor={colors.PRIMARY_TEXT}>
          <Heading fit><Image src={images.jsonapi} bgColor="white" style={{
            border: '0.1vh solid white',
            borderRadius: '0.1vh',
            display: 'inline-block',
            height: '2vh',
            margin: '0.1vh 0',
            verticalAlign: 'middle',
            width: '2vh',
          }}></Image> JSON API</Heading>
          <List style={{ listStyle: 'none' }}>
            <ListItem textSize='7vh'>Performance</ListItem>
            <ListItem textSize='7vh'>Discoverability</ListItem>
            <ListItem textSize='7vh'>Anti-bikeshedding</ListItem>
          </List>
        </Slide>
        <Slide bgColor={colors.SECONDARY_BG}>
          <Heading fit>JSON API Example</Heading>
          <CodePane textSize='3vh' lang='json' source={examples.jsonapi}></CodePane>
        </Slide>
        <Slide bgColor={colors.SECONDARY_BG}>
          <Heading fit>Resource <S type="none" textColor={colors.SUBTLE_TEXT}>/ Identifier</S></Heading>
          <CodePane textSize='3vh' lang='json' source={
            examples.jsonapi.split('\n').slice(4, 8).concat([
              '      ...',
              '    },',
              '    "relationships": {',
              '      ...',
              '    }',
              '  }',
            ]).map(trimLeft(2)).join('\n')
          }></CodePane>
        </Slide>
        <Slide bgColor={colors.SECONDARY_BG}>
          <Heading fit>Attributes</Heading>
          <CodePane textSize='3vh' lang='json' source={
            examples.jsonapi.split('\n').slice(7, 11).map(trimLeft(4)).join('\n')
          }></CodePane>
        </Slide>
        <Slide bgColor={colors.SECONDARY_BG}>
          <Heading fit>Relationships</Heading>
          <CodePane textSize='3vh' lang='json' source={
            examples.jsonapi.split('\n').slice(11, 22).map(trimLeft(4)).join('\n')
          }></CodePane>
        </Slide>
        <Slide bgColor={colors.SECONDARY_BG}>
          <Heading fit>Hypermedia</Heading>
          <CodePane textSize='3.5vh' lang='json' source={
            examples.jsonapi.split('\n').slice(22, 25).map(trimLeft(4)).join('\n')
          }></CodePane>
        </Slide>
        <Slide bgColor={colors.SECONDARY_BG}>
          <Heading fit>Metadata</Heading>
          <CodePane textSize='3vh' lang='json' source={
            examples.jsonapi.split('\n').slice(1, 4).map(trimLeft(2)).join('\n')
          }></CodePane>
        </Slide>
        <Slide bgColor={colors.SECONDARY_BG}>
          <Heading fit>Side-loading</Heading>
          <CodePane textSize='2.5vh' lang='json' source={
            examples.jsonapi.split('\n').slice(26, 38).concat([
              '    ...',
              '  }]'
            ]).map(trimLeft(2)).join('\n')
          }></CodePane>
        </Slide>
        <Slide bgColor={colors.SECONDARY_BG}>
          <Heading fit>46 lines</Heading>
          <CodePane textSize='3vh' lang='json' source={
            examples.jsonapi
          }></CodePane>
        </Slide>


        <Slide bgColor={colors.SECONDARY_BG} textColor={colors.PRIMARY_TEXT} notes="Used to be called Swagger.">
          <Heading fit><Image src={images.openapi} bgColor="white" style={{
            border: '0.1vh solid white',
            borderRadius: '0.1vh',
            display: 'inline-block',
            height: '2vh',
            margin: '0.1vh 0',
            verticalAlign: 'middle',
            width: '2vh',
          }}></Image> Open API</Heading>
          <List style={{ listStyle: 'none' }}>
            <ListItem textSize='7vh'>Human-readable</ListItem>
            <ListItem textSize='7vh'>Computer-readable</ListItem>
            <ListItem textSize='7vh'>Language-agnostic</ListItem>
          </List>
        </Slide>
        <Slide bgColor={colors.SECONDARY_BG}>
          <Heading fit>Open API Example</Heading>
          <CodePane textSize='3vh' lang='json' source={examples.openapi}></CodePane>
        </Slide>
        <Slide bgColor={colors.SECONDARY_BG}>
          <Heading fit>API metadata</Heading>
          <CodePane textSize='3vh' lang='json' source={
            examples.openapi.split('\n').slice(1, 6).map(trimLeft(2)).join('\n')
          }></CodePane>
        </Slide>
        <Slide bgColor={colors.SECONDARY_BG}>
          <Heading fit>Routes</Heading>
          <CodePane textSize='3vh' lang='json' source={
            examples.openapi.split('\n').slice(6, 9).concat([
              '        ...',
              '      }',
              '    }',
              '  }'
            ]).map(trimLeft(2)).join('\n')
          }></CodePane>
        </Slide>
        <Slide bgColor={colors.SECONDARY_BG}>
          <Heading fit>Request format</Heading>
          <CodePane textSize='3vh' lang='json' source={
            examples.openapi.split('\n').slice(9, 19).map(trimLeft(8)).join('\n')
          }></CodePane>
        </Slide>
        <Slide bgColor={colors.SECONDARY_BG}>
          <Heading fit>Response format</Heading>
          <CodePane textSize='2.5vh' lang='json' source={
            examples.openapi.split('\n').slice(19, 33).map(trimLeft(8)).join('\n')
          }></CodePane>
        </Slide>
        <Slide bgColor={colors.SECONDARY_BG}>
          <Heading fit>Type definitions</Heading>
          <CodePane textSize='2vh' lang='json' source={
            examples.openapi.split('\n').slice(36, 48).concat([
              '          ...',
              '        }',
              '      }',
              '    }',
              '  }'
            ]).map(trimLeft(2)).join('\n')
          }></CodePane>
        </Slide>
        <Slide bgColor={colors.SECONDARY_BG}>
          <Heading fit>Validation</Heading>
          <CodePane textSize='3vh' lang='json' source={
            [
              '"required": true',
              '"schema": {',
              '  "$ref": "#/definitions/User"',
              '}',
              '"type": "string"',
              '"format": "email"',
            ].join('\n')
          }></CodePane>
        </Slide>
        <Slide bgColor={colors.SECONDARY_BG}>
          <Heading fit>65 lines</Heading>
          <CodePane textSize='3vh' lang='json' source={
            examples.openapi
          }></CodePane>
        </Slide>


        <Slide bgColor={colors.SECONDARY_BG} textColor={colors.PRIMARY_TEXT}>
          <Heading fit caps>Open API <S type="none" textColor={colors.BRAND_TEXT}>+</S> JSON API <S type="none" textColor={colors.BRAND_TEXT}>=</S></Heading>
          <Heading fit>Open JSON API</Heading>
          <List style={{ listStyle: 'none' }}>
            <ListItem textSize='7vh'><S type="none" textColor={colors.BRAND_TEXT}>✔︎</S> API Documentation</ListItem>
            <ListItem textSize='7vh'><S type="none" textColor={colors.BRAND_TEXT}>✔︎</S> Design Convention</ListItem>
          </List>
        </Slide>
        <Slide bgColor={colors.SECONDARY_BG} textColor={colors.PRIMARY_TEXT}>
          <Heading fit>Open JSON API</Heading>
          <Heading fit textColor={colors.BRAND_TEXT}>Challenges</Heading>
          <List style={{ listStyle: 'none' }}>
            <ListItem textSize='7vh'>Verbose specifications <S type="none" textColor={colors.JOKE_TEXT}>(111 lines!)</S></ListItem>
            <ListItem textSize='7vh'>Steep learning curve(s)</ListItem>
            <ListItem textSize='7vh'>Upfront bikeshedding 😭</ListItem>
          </List>
        </Slide>


        <Slide bgColor={colors.SECONDARY_BG} textColor={colors.PRIMARY_TEXT}>
          <Heading fit>What is <S type="none" textColor={colors.BRAND_TEXT}>ƒ()</S>?</Heading>
          <Heading fit textColor={colors.SUBTLE_TEXT} margin="4vh 0 0">(for Node.js, at least…?)</Heading>
        </Slide>
        <Slide bgColor={colors.SECONDARY_BG}>
          <Heading fit margin="4vh 0"><Code textColor={colors.PRIMARY_TEXT} bgColor={colors.TRANSPARENT}>swagger-tools</Code></Heading>
          <Heading textSize="100vh" textFont="Baskerville" textColor={colors.INVISIBLE_TEXT} style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
          }}>&amp;</Heading>
          <Heading fit margin="4vh 0"><Code textColor={colors.PRIMARY_TEXT} bgColor={colors.TRANSPARENT}>open-json-api</Code></Heading>
        </Slide>


        <Slide bgColor={colors.TERTIARY_BG} textColor={colors.PRIMARY_TEXT}>
          <Heading fit caps>Demo</Heading>
        </Slide>


        <Slide bgColor={colors.SECONDARY_BG} textColor={colors.PRIMARY_TEXT}>
          <Heading fit margin="8vh 0">&ldquo;Best&rdquo; alternative</Heading>
          <Heading textSize="100vh" textFont="Baskerville" textColor={colors.INVISIBLE_TEXT} style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
          }}>&amp;</Heading>
          <Heading fit margin="8vh 0">Blissful naïveté</Heading>
        </Slide>
        <Slide bgColor={colors.PRIMARY_BG} textColor={colors.PRIMARY_TEXT}>
          <Heading fit caps>Advanced reading</Heading>
          <List style={{listStyle: 'none'}}>
            <ListItem><Link textColor={colors.LINK_TEXT} href="https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md">Open API Specification</Link></ListItem>
            <ListItem><Link textColor={colors.LINK_TEXT} href="http://jsonapi.org/format/">JSON API Specification</Link></ListItem>
            <ListItem><Link textColor={colors.LINK_TEXT} href="https://github.com/apigee-127/swagger-tools">Swagger Tools</Link></ListItem>
            <ListItem><Link textColor={colors.LINK_TEXT} href="https://github.com/Schoonology/open-json-api">Open JSON API</Link></ListItem>
            <ListItem><Link textColor={colors.LINK_TEXT} href="https://github.com/Schoonology/track-heart-tracker">Example Repo</Link></ListItem>
            <ListItem>These slides! GitHub: <Link textColor={colors.LINK_TEXT} href="https://github.com/Schoonology/presentations/open-json-api">@Schoonology/presentations/open-json-api</Link></ListItem>
          </List>
        </Slide>
        <Slide bgColor={colors.PRIMARY_BG} textColor={colors.PRIMARY_TEXT}>
          <Heading textColor={colors.BRAND_TEXT} fit caps>Thanks!</Heading>
          <Layout>
            <Fill>
              <Image src={images.logo_td} width="50%" margin='0 !important' display="block" />
            </Fill>
            <Fill>
              <List style={{listStyle: 'none'}}>
                <ListItem>Michael Schoonmaker</ListItem>
                <ListItem><Link textColor={colors.LINK_TEXT} href="https://twitter.com/Schoonology">@Schoonology</Link></ListItem>
                <ListItem><Link textColor={colors.LINK_TEXT} href="mailto:schoon@testdouble.com">schoon@testdouble.com</Link></ListItem>
              </List>
            </Fill>
          </Layout>
          <Heading textColor={colors.JOKE_TEXT} fit>(If you would like a <Image src={images.logo_td} style={{
            height: '1em',
            verticalAlign: 'middle',
            opacity: 0.4,
          }}></Image> sticker, ask!)</Heading>
        </Slide>
        <Slide bgColor={colors.TERTIARY_BG}>
          <Heading fit textFont="Baskerville">Q<S type="none" textColor={colors.TRANSPARENT}>--</S>A</Heading>
          <Heading textSize="100vh" textFont="Baskerville" textColor={colors.INVISIBLE_TEXT} style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
          }}>&amp;</Heading>
        </Slide>
      </Deck>
    );
  }
}
