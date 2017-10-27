import React from "react"
import * as Spectacle from "spectacle"
import preloader from "spectacle/lib/utils/preloader"
for (let key in Spectacle) { global[key] = Spectacle[key] }

const images = {
  airplane: require('../assets/airplane.jpg'),
  ancient_greek: require('../assets/ancient-greek.jpg'),
  bellingham: require('../../../open-json-api/slides/assets/bellingham.jpg'),
  desk: require('../assets/desk.jpg'),
  greek_books: require('../assets/greek-books.jpg'),
  library: require('../assets/library.jpg'),
  logo_td: require('../../../shared/assets/td-logo-white.svg'),
}

preloader(images)
require("../assets/style.css")

import { theme, colors } from "./style.js"

export default class Presentation extends React.Component {
  renderWallBreaker(message, options) {
    return (
      <Slide bgColor={colors.bg('title')} {...options}>
        <Layout>
          <Fill>
            <Image src={images.logo_td} height="13rem" margin='0 !important' display="block" />
          </Fill>
          <Fill>
            <List style={{listStyle: 'none'}} margin="0" textColor={colors.PRIMARY_TEXT}>
              <ListItem>Michael Schoonmaker</ListItem>
              <ListItem><Link textColor={colors.LINK_TEXT} href="https://twitter.com/Schoonology">@Schoonology</Link></ListItem>
              <ListItem><Link textColor={colors.LINK_TEXT} href="mailto:schoon@testdouble.com">schoon@testdouble.com</Link></ListItem>
            </List>
          </Fill>
        </Layout>
        <Heading margin="2.66rem 0 0" textColor={colors.BRAND_TEXT} fit caps>{message}</Heading>
      </Slide>
    )
  }

  calculateContentSize() {
    return {
      contentHeight: '52.5vw',
      contentWidth: '70vw',
    }
  }

  render() {
    return (
      <Deck {...this.calculateContentSize()} transition={[]} transitionDuration={0} progress="none" theme={theme} controls={false}>
        <Slide bgColor={colors.TEST_BG}>
          <div className="bg-cite-container">
            <div className="test-red"></div>
            <div className="test-green"></div>
            <div className="test-blue"></div>
            <div className="test-white"></div>
          </div>
          <Heading textColor={colors.JAVASCRIPT}>Heading</Heading>
          <Heading textColor={colors.BRAND_TEXT} textFont="monospace">Heading</Heading>
          <BlockQuote>
            <Quote textColor={colors.PRIMARY_TEXT}>This is a blockquote.</Quote>
            <Cite textColor={colors.SUBTLE_TEXT}>This is a citation.</Cite>
          </BlockQuote>
          <List style={{listStyle: 'none'}} textColor={colors.JOKE_TEXT}>
            <ListItem>This is a list item.</ListItem>
          </List>
        </Slide>

        <Slide bgColor={colors.PRIMARY_BG} textColor={colors.PRIMARY_TEXT}>
          <Heading fit textColor={colors.JAVASCRIPT}>
            JavaScriptural
          </Heading>
          <Heading fit>
            Exegesis
          </Heading>
        </Slide>

        {this.renderWallBreaker('Hello!', { bgColor: colors.bg('title') })}

        <Slide bgImage={images.bellingham}>
          <div className="bg-cite-container">
            <div className="marker"></div>
          </div>
        </Slide>

        <Slide bgImage={images.desk} bgDarken={0.7}>
          <Heading fit>Consultant</Heading>
          <Heading fit>Leader</Heading>
          <Heading textSize="100vh" textFont="Baskerville" textColor={colors.INVISIBLE_TEXT} style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
          }}>&amp;</Heading>
        </Slide>

        <Slide bgImage={images.desk} bgDarken={0.7}>
          <Heading fit caps>Priorities:</Heading>
          <Heading textAlign="left">1. Understanding</Heading>
          <Heading textAlign="left">2. Maintenance</Heading>
          <Heading textAlign="left">3. Extension</Heading>
        </Slide>

        <Slide bgColor={colors.PRIMARY_BG}>
          <Heading>The <S type="italic">next</S> person&rsquo;s comfort is my priority.</Heading>
        </Slide>

        <Slide bgImage={images.airplane} bgDarken={0.7}>
          <BlockQuote>
            <Quote textColor={colors.PRIMARY_TEXT}>If the next person&rsquo;s comfort is the priority, than you must be consistent, and the only way to be consistent is to have rules.</Quote>
            <Cite textColor={colors.SUBTLE_TEXT}>Fellow <Image height="1em" src={images.logo_td} style={{ verticalAlign: 'text-bottom' }}/> Agent</Cite>
          </BlockQuote>
          <div className="bg-cite-container">
            <Text className="bg-cite-link" textSize="2rem" textColor={colors.SUBTLE_TEXT}>
              📸 Chris Barbalis, <Link src="https://unsplash.com/photos/6gWvk3lrFUA" textColor={colors.LINK_TEXT}>Unsplash</Link>
            </Text>
          </div>
        </Slide>

        <Slide bgImage={images.library} bgDarken={0.7}>
          <Heading fit>Working Agreement</Heading>
          <Heading fit margin="2vh 0" textColor={colors.BRAND_TEXT}><S type="none" textFont="monospace">CONTRIBUTING</S></Heading>
          <Heading fit>&ldquo;Style Guide&rdquo;</Heading>
          <div className="bg-cite-container">
            <Text className="bg-cite-link" textSize="2rem" textColor={colors.SUBTLE_TEXT}>
              📸 Giammarco Boscaro, <Link src="https://unsplash.com/photos/OPzWvgL-upY" textColor={colors.LINK_TEXT}>Unsplash</Link>
            </Text>
          </div>
        </Slide>

        <Slide bgImage={images.greek_books} bgDarken={0.3}>
          <Heading textSize="50vh" style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
          }}>???</Heading>
          <div className="bg-cite-container">
            <Heading textSize="10vh" textColor={colors.JOKE_TEXT} style={{
              position: 'fixed',
              left: '50%',
              top: '10%',
              transform: 'translate(-50%, -50%)',
            }}>←🤔</Heading>
            <Text className="bg-cite-link" textSize="2rem" textColor={colors.SUBTLE_TEXT}>
              📸 Aris Sfakianakis, <Link src="https://unsplash.com/photos/AtLajzgFyAQ" textColor={colors.LINK_TEXT}>Unsplash</Link>
            </Text>
          </div>
        </Slide>

        <Slide bgImage={images.greek_books} bgDarken={0.7}>
          <Heading>To the Greek!</Heading>
          <List textColor={colors.PRIMARY_TEXT}>
            <ListItem textSize="6rem">δόγμα <S type="none" textColor={colors.JOKE_TEXT}>(dogma)</S></ListItem>
            <ListItem textSize="6rem">πράγμα <S type="none" textColor={colors.JOKE_TEXT}>(pragma)</S></ListItem>
            <ListItem textSize="6rem">ἐξήγησις <S type="none" textColor={colors.JOKE_TEXT}>(exegesis)</S></ListItem>
            <ListItem textSize="6rem">εἰςήγησις <S type="none" textColor={colors.JOKE_TEXT}>(eisegesis)</S></ListItem>
          </List>
          <div className="bg-cite-container">
            <Text className="bg-cite-link" textSize="2rem" textColor={colors.SUBTLE_TEXT}>
              📸 Aris Sfakianakis, <Link src="https://unsplash.com/photos/AtLajzgFyAQ" textColor={colors.LINK_TEXT}>Unsplash</Link>
            </Text>
          </div>
        </Slide>

        <Slide bgColor={colors.PRIMARY_BG}>
          <Heading fit margin="0 0 8vh" textColor={colors.PRIMARY_TEXT}>
            δόγμα (dogma)
          </Heading>
          <Text fit textColor={colors.BRAND_TEXT}>
            &ldquo;doctrine&rdquo; <S type="none" textColor={colors.SUBTLE_TEXT}>or</S> &ldquo;opinion&rdquo;
          </Text>
        </Slide>

        <Slide bgColor={colors.PRIMARY_BG}>
          <Heading fit textColor={colors.BRAND_TEXT}>
            δόγμα (dogma)
          </Heading>
          <BlockQuote>
            <Quote textColor={colors.PRIMARY_TEXT}>A principle or set of principles laid down by an authority as incontrovertibly true.</Quote>
            <Cite textColor={colors.SUBTLE_TEXT}>English Oxford Dictionaries</Cite>
          </BlockQuote>
        </Slide>

        <Slide bgColor={colors.TERTIARY_BG} notes="Who's had someone speak incontrovertibly about one of those things? As an aside, I bet they looked like me.">
            <Heading fit>Functional programming</Heading>
            <Heading fit caps margin="1rem 0" textColor={colors.BRAND_TEXT}>Frontend app delivery</Heading>
            <Heading fit>Semicolons</Heading>
            <Heading fit caps margin="1rem 0" textColor={colors.BRAND_TEXT}>Test-driven development</Heading>
            <Heading fit>Pair programming</Heading>
        </Slide>

        <Slide bgColor={colors.SECONDARY_BG}>
          <Heading fit margin="0 0 8vh" textColor={colors.PRIMARY_TEXT}>
            πράγμα (pragma)
          </Heading>
          <Text fit textColor={colors.BRAND_TEXT}>
            &ldquo;deed&rdquo;, &ldquo;act&rdquo;, <S type="none" textColor={colors.SUBTLE_TEXT}>or</S> &ldquo;thing&rdquo;
          </Text>
        </Slide>

        <Slide bgColor={colors.SECONDARY_BG}>
          <Heading fit textColor={colors.BRAND_TEXT}>
            πράγμα (pragma)
          </Heading>
          <BlockQuote>
            <Quote textColor={colors.PRIMARY_TEXT}>Relating to matters of fact or practical affairs <S type="italic" textColor={colors.SUBTLE_TEXT}>often to the exclusion of intellectual or artistic matters</S>.</Quote>
            <Cite textColor={colors.SUBTLE_TEXT}>Merriam-Webster Dictionary</Cite>
          </BlockQuote>
        </Slide>

        <Slide bgColor={colors.TERTIARY_BG}>
          <Heading textColor={colors.PRIMARY_TEXT}>
            Making rules is not about how smart you are.
          </Heading>
        </Slide>

        <Slide bgColor={colors.PRIMARY_BG} textColor={colors.PRIMARY_TEXT}>
          <Heading fit textColor={colors.INVISIBLE_JAVASCRIPT}>
            JavaScriptural
          </Heading>
          <Heading fit>
            Exegesis
          </Heading>
        </Slide>

        <Slide bgColor={colors.SECONDARY_BG}>
          <Heading fit textColor={colors.PRIMARY_TEXT}>
            ἐξήγησις (exegesis)
          </Heading>
          <Text fit margin="6vh 0 4vh" textColor={colors.BRAND_TEXT}>
            &ldquo;explanation&rdquo;
          </Text>
          <Heading fit textColor={colors.SUBTLE_TEXT}>
            (ἐξηγεῖσθαι, &ldquo;to lead out&rdquo;)
          </Heading>
        </Slide>

        <Slide bgColor={colors.SECONDARY_BG}>
          <Heading fit textColor={colors.BRAND_TEXT}>
            ἐξήγησις (exegesis)
          </Heading>
          <BlockQuote>
            <Quote textColor={colors.PRIMARY_TEXT}>Critical explanation or interpretation of a text, especially of scripture.</Quote>
            <Cite textColor={colors.SUBTLE_TEXT}>English Oxford Dictionaries</Cite>
          </BlockQuote>
        </Slide>

        <Slide bgColor={colors.TERTIARY_BG}>
          <Heading fit caps margin="0 0 2vh" textColor={colors.JAVASCRIPT}>Golden Rule</Heading>
          <Heading size={2} textColor={colors.PRIMARY_TEXT}>Do <S type="none" textColor={colors.JOKE_TEXT}>(un)</S>to others what you would want them to do <S type="none" textColor={colors.JOKE_TEXT}>(un)</S>to you.</Heading>
        </Slide>

        <Slide bgColor={colors.PRIMARY_BG}>
          <Heading fit margin="0 0 8vh" textColor={colors.PRIMARY_TEXT}>
            [εἰςήγησις] (eisegesis)
          </Heading>
          <Heading fit textColor={colors.SUBTLE_TEXT}>
            (εἰς, &ldquo;into&rdquo;)
          </Heading>
        </Slide>

        <Slide bgColor={colors.PRIMARY_BG}>
          <Heading fit textColor={colors.BRAND_TEXT}>
            εἰςήγησις (eisegesis)
          </Heading>
          <BlockQuote>
            <Quote textColor={colors.PRIMARY_TEXT}>A subjective method of interpretation by introducing one&rsquo;s own opinions into the original.</Quote>
            <Cite textColor={colors.SUBTLE_TEXT}>The Century Dictionary</Cite>
          </BlockQuote>
        </Slide>

        <Slide bgColor={colors.TERTIARY_BG} textColor={colors.PRIMARY_TEXT}>
          <Table>
            <TableBody>
              <TableRow textColor={colors.JOKE_TEXT}>
                <TableItem textSize="4rem">IEEE</TableItem>
                <TableItem textSize="4rem">Medium</TableItem>
              </TableRow>
              <TableRow textColor={colors.SUBTLE_TEXT}>
                <TableItem textSize="4rem">Slack</TableItem>
                <TableItem textSize="4rem">GitHub</TableItem>
              </TableRow>
            </TableBody>
          </Table>
          <Heading fit margin="2vh 0">👑 <S type="none" textColor={colors.SUBTLE_TEXT}>(Con)</S>Text is king. 👑</Heading>
          <Table>
            <TableBody>
              <TableRow textColor={colors.SUBTLE_TEXT}>
                <TableItem textSize="4rem">Email</TableItem>
                <TableItem textSize="4rem">Wikis</TableItem>
              </TableRow>
              <TableRow textColor={colors.JOKE_TEXT}>
                <TableItem textSize="4rem">Twitter</TableItem>
                <TableItem textSize="4rem">Blogs</TableItem>
              </TableRow>
            </TableBody>
          </Table>
        </Slide>

        <Slide bgColor={colors.PRIMARY_BG} textColor={colors.PRIMARY_TEXT}>
          <Heading fit textColor={colors.JAVASCRIPT}>
            JavaScript<S type="none" textColor={colors.INVISIBLE_JAVASCRIPT}>ural</S>
          </Heading>
          <Heading fit textColor={colors.INVISIBLE_TEXT}>
            Exegesis
          </Heading>
        </Slide>

        <Slide bgColor={colors.SECONDARY_BG}>
          <Heading>Prophets</Heading>
          <Heading textSize="5vh" margin="3vh 0 0">handing down</Heading>
          <Heading>Commandments</Heading>
          <Heading textSize="5vh" margin="3vh 0 0">leading us to</Heading>
          <Heading>Salvation</Heading>
          <Heading textSize="100vh" textFont="Baskerville" textColor={colors.INVISIBLE_TEXT} style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
          }}>☩</Heading>
        </Slide>

        <Slide bgColor={colors.SECONDARY_BG}>
          <Heading>Thoughtleaders</Heading>
          <Heading textSize="5vh" margin="3vh 0 0">handing down</Heading>
          <Heading>Best practices</Heading>
          <Heading textSize="5vh" margin="3vh 0 0">leading us to</Heading>
          <Heading>Job security</Heading>
          <Heading textSize="100vh" textFont="Baskerville" textColor={colors.INVISIBLE_TEXT} style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
          }}>∴</Heading>
        </Slide>

        <Slide bgColor={colors.TERTIARY_BG} notes="Full stop.">
          <Table>
            <TableBody>
              <TableRow textColor={colors.JOKE_TEXT}>
                <TableItem textSize="4rem">ESNext</TableItem>
                <TableItem textSize="4rem">Flow</TableItem>
              </TableRow>
              <TableRow textColor={colors.SUBTLE_TEXT}>
                <TableItem textSize="4rem">CoffeeScript</TableItem>
                <TableItem textSize="4rem">Standard</TableItem>
              </TableRow>
            </TableBody>
          </Table>
          <Heading fit margin="2vh 0">
            <S type="none" textColor={colors.JAVASCRIPT}>JavaScript</S> is a religion. 🙏
          </Heading>
          <Table>
            <TableBody>
              <TableRow textColor={colors.SUBTLE_TEXT}>
                <TableItem textSize="4rem">JSX</TableItem>
                <TableItem textSize="4rem">TypeScript</TableItem>
              </TableRow>
              <TableRow textColor={colors.JOKE_TEXT}>
                <TableItem textSize="4rem">LiveScript</TableItem>
                <TableItem textSize="4rem">Airbnb</TableItem>
              </TableRow>
            </TableBody>
          </Table>
        </Slide>

        <Slide bgImage={images.ancient_greek} bgDarken={0.7} textColor={colors.PRIMARY_TEXT}>
          <Heading>ECMAScript® Language Specification</Heading>
          <div className="bg-cite-container">
            <Text className="bg-cite-link" textSize="2rem" textColor={colors.SUBTLE_TEXT}>
              📸 Darren Puttock, <Link src="https://www.flickr.com/photos/darrenputtock" textColor={colors.LINK_TEXT}>Flickr</Link>
            </Text>
          </div>
        </Slide>

        <Slide bgImage={images.ancient_greek} bgDarken={0.7} textColor={colors.PRIMARY_TEXT}>
          <Table>
            <TableBody>
              <TableRow>
                <TableItem textSize="4rem">Genre</TableItem>
                <TableItem textSize="4rem">Origins</TableItem>
              </TableRow>
              <TableRow textColor={colors.BRAND_TEXT}>
                <TableItem textSize="4rem">History</TableItem>
                <TableItem textSize="4rem">Culture</TableItem>
              </TableRow>
              <TableRow>
                <TableItem textSize="4rem">Author(s)</TableItem>
                <TableItem textSize="4rem">Audience</TableItem>
              </TableRow>
              <TableRow textColor={colors.BRAND_TEXT}>
                <TableItem textSize="4rem">Syntax</TableItem>
                <TableItem textSize="4rem">Grammar</TableItem>
              </TableRow>
              <TableRow>
                <TableItem textSize="4rem">Symbology</TableItem>
                <TableItem textSize="4rem">Philology</TableItem>
              </TableRow>
              <TableRow textColor={colors.BRAND_TEXT}>
                <TableItem textSize="4rem">Epistemology</TableItem>
                <TableItem textSize="4rem">Eschatology</TableItem>
              </TableRow>
            </TableBody>
          </Table>
          <div className="bg-cite-container">
            <Text className="bg-cite-link" textSize="2rem" textColor={colors.SUBTLE_TEXT}>
              📸 Darren Puttock, <Link src="https://www.flickr.com/photos/darrenputtock" textColor={colors.LINK_TEXT}>Flickr</Link>
            </Text>
          </div>
        </Slide>

        <Slide bgImage={images.ancient_greek} bgDarken={0.7} textColor={colors.PRIMARY_TEXT}>
          <Heading>¯\_(ツ)_/¯</Heading>
          <div className="bg-cite-container">
            <Text className="bg-cite-link" textSize="2rem" textColor={colors.SUBTLE_TEXT}>
              📸 Darren Puttock, <Link src="https://www.flickr.com/photos/darrenputtock" textColor={colors.LINK_TEXT}>Flickr</Link>
            </Text>
          </div>
        </Slide>

        <Slide bgColor={colors.SECONDARY_BG} textColor={colors.PRIMARY_TEXT}>
          <Heading fit>
            Inductive
          </Heading>
          <Heading fit caps>
            Study
          </Heading>
          <Heading fit textColor={colors.JOKE_TEXT}>Exegesis for the rest of us!</Heading>
        </Slide>

        <Slide bgColor={colors.SECONDARY_BG} textColor={colors.PRIMARY_TEXT}>
          <Heading textAlign="left">
            I. Observation
          </Heading>
          <Heading textAlign="left">
            II. Interpretation
          </Heading>
          <Heading textAlign="left">
            III. Application
          </Heading>
        </Slide>
        <Slide bgColor={colors.SECONDARY_BG} textColor={colors.PRIMARY_TEXT}>
          <Heading fit>
            I. Observation
          </Heading>
          <hr/>
          <Heading textAlign="left" textColor={colors.SUBTLE_TEXT}>What does the text <S type="italic">say</S>?</Heading>
        </Slide>
        <Slide bgColor={colors.SECONDARY_BG} textColor={colors.PRIMARY_TEXT}>
          <Heading fit>
            II. Interpretation
          </Heading>
          <hr/>
          <Heading textAlign="left" textColor={colors.SUBTLE_TEXT}>What does the text <S type="italic">mean</S>?</Heading>
        </Slide>
        <Slide bgColor={colors.SECONDARY_BG} textColor={colors.PRIMARY_TEXT}>
          <Heading fit>
            III. Application
          </Heading>
          <hr/>
          <Heading textAlign="left" textColor={colors.SUBTLE_TEXT}>What does the text mean <S type="italic">for me</S>?</Heading>
        </Slide>
        <Slide bgColor={colors.PRIMARY_BG} textColor={colors.PRIMARY_TEXT}>
          <Heading fit>
            Template
          </Heading>
          <Heading fit>
            Strings
          </Heading>
        </Slide>
        <Slide bgColor={colors.PRIMARY_BG} textColor={colors.PRIMARY_TEXT}>
          <CodePane lang="javascript" textSize="4vh" source={`let cost = 7.95
console.log('Total cost: $' + cost)
// Total cost: $7.95
console.log(\`Total cost: $$\{cost\}\`)
// Total cost: $7.95`} />
        </Slide>
        <Slide bgColor={colors.PRIMARY_BG} textColor={colors.PRIMARY_TEXT}>
          <CodePane lang="javascript" textSize="4vh" source={`console.log('my-cli OPTION ANOTHER\\n\\
Options:\\n\\
...')
console.log('my-cli OPTION ANOTHER\\n' +
'Options:\\n' +
'...')
console.log(\`my-cli OPTION ANOTHER
Options:
...\`)`} />
        </Slide>
        <Slide bgColor={colors.PRIMARY_BG} textColor={colors.PRIMARY_TEXT}>
          <Heading fit>
            I. Observation
          </Heading>
        </Slide>
        <Slide bgColor={colors.PRIMARY_BG} textColor={colors.PRIMARY_TEXT}>
          <div className="center">
            <List style={{listStyle: 'none'}}>
              <ListItem textSize="5vh"><S type="italic">SingleStringCharacter</S> ::</ListItem>
              <ListItem margin="0 0 0 10vw" style={{ whiteSpace: 'nowrap' }} textSize="5vh"><S type="italic">SourceCharacter</S> but not one of</ListItem>
              <ListItem margin="0 0 0 20vw" style={{ whiteSpace: 'nowrap' }} textSize="5vh"><S type="bold" textFont="monospace">'</S> or <S type="bold" textFont="monospace">\</S> or <S type="italic">LineTerminator</S></ListItem>
              <ListItem margin="0 0 0 10vw" textSize="5vh"><S type="bold" textFont="monospace">\</S> <S type="italic">EscapeSequence</S></ListItem>
              <ListItem margin="0 0 0 10vw" textSize="5vh"><S type="italic">LineContinuation</S></ListItem>
            </List>
            <List style={{listStyle: 'none'}}>
              <ListItem textSize="5vh"><S type="italic">TemplateCharacter</S> ::</ListItem>
              <ListItem margin="0 0 0 10vw" textSize="5vh"><S type="bold" textFont="monospace">$</S> [lookahead ≠ <S type="bold" textFont="monospace">{'{'}</S>]</ListItem>
              <ListItem margin="0 0 0 10vw" textSize="5vh"><S type="bold" textFont="monospace">\</S> <S type="italic">EscapeSequence</S></ListItem>
              <ListItem margin="0 0 0 10vw" textSize="5vh"><S type="italic">LineContinuation</S></ListItem>
              <ListItem margin="0 0 0 10vw" textColor={colors.JAVASCRIPT} textSize="5vh"><S type="italic">LineTerminatorSequence</S></ListItem>
              <ListItem margin="0 0 0 10vw" style={{ whiteSpace: 'nowrap' }} textSize="5vh"><S type="italic">SourceCharacter</S> but not one of</ListItem>
              <ListItem margin="0 0 0 20vw" style={{ whiteSpace: 'nowrap' }} textSize="5vh"><S type="bold" textFont="monospace">{'`'}</S> or <S type="bold" textFont="monospace">\</S> or <S type="bold" textFont="monospace">$</S> or <S type="italic">LineTerminator</S></ListItem>
            </List>
          </div>
        </Slide>
        <Slide bgColor={colors.PRIMARY_BG} textColor={colors.PRIMARY_TEXT}>
          <Heading fit>
            II. Interpretation
          </Heading>
        </Slide>
        <Slide bgColor={colors.PRIMARY_BG} textColor={colors.PRIMARY_TEXT}>
          <Heading fit>
            III. Application
          </Heading>
        </Slide>
        <Slide bgColor={colors.PRIMARY_BG} textColor={colors.PRIMARY_TEXT}>
          <BlockQuote>
            <Quote textColor={colors.PRIMARY_TEXT}>When writing a multiline string, use template literals (<code>``</code>).</Quote>
            <Cite>Your team&lsquo;s Working Agreement, maybe</Cite>
          </BlockQuote>
        </Slide>
        <Slide bgColor={colors.TERTIARY_BG} textColor={colors.PRIMARY_TEXT}>
          <Heading fit>
            Proxies
          </Heading>
          <Heading fit textColor={colors.JOKE_TEXT}>
            Somebody Else&rsquo;s Object
          </Heading>
        </Slide>
        <Slide bgColor={colors.TERTIARY_BG} textColor={colors.PRIMARY_TEXT}>
          <CodePane textSize="3vh" lang="javascript" source={`var real = { answer: 42 }
var fake = Object.keys(real)
  .reduce(function (obj, key) {
    Object.defineProperty(obj, key, {
      get: function () {
        console.log('Fetching ' + key + '...')
        return real[key]
      }
    })
    return obj
  }, {})
fake.answer
// Fetching answer...
fake.missing
// [Nothing.]`}/>
        </Slide>
        <Slide bgColor={colors.TERTIARY_BG} textColor={colors.PRIMARY_TEXT}>
          <CodePane textSize="3vh" lang="javascript" source={`let real = { answer: 42 }
let fake = new Proxy(real, {
  get: function (obj, key) {
    console.log('Fetching ' + key + '...')
    return obj[key]
  }
})
fake.answer
// Fetching answer...
fake.missing
// Fetching missing...
`}/>
        </Slide>
        <Slide bgColor={colors.TERTIARY_BG} textColor={colors.PRIMARY_TEXT}>
          <Heading fit>
            I. Observation
          </Heading>
        </Slide>
        <Slide bgColor={colors.TERTIARY_BG} textColor={colors.PRIMARY_TEXT}>
          <BlockQuote>
            <Quote textColor={colors.PRIMARY_TEXT}>Methods of a handler object may be used to augment the implementation for one or more of the proxy object&rsquo;s internal methods.</Quote>
            <Cite><Link href="https://tc39.github.io/ecma262/#sec-proxy-object-internal-methods-and-internal-slots" textColor={colors.LINK_TEXT}>ECMAScript Language Specification, §9.5 &ldquo;Proxy Object Internal Methods and Internal Slots&rdquo;</Link></Cite>
          </BlockQuote>
        </Slide>
        <Slide bgColor={colors.TERTIARY_BG} textColor={colors.PRIMARY_TEXT}>
          <Heading fit>
            II. Interpretation
          </Heading>
        </Slide>
        <Slide bgColor={colors.TERTIARY_BG} textColor={colors.PRIMARY_TEXT}>
          <Heading fit>
            III. Application
          </Heading>
        </Slide>
        <Slide bgColor={colors.TERTIARY_BG} textColor={colors.PRIMARY_TEXT}>
          <Heading fit>testdouble.js</Heading>
          <Heading fit margin="4vh 0 0"><Code textColor={colors.SUBTLE_TEXT}>src/object.js:47</Code></Heading>
        </Slide>
        <Slide bgColor={colors.PRIMARY_BG} textColor={colors.PRIMARY_TEXT}>
          <Heading fit>
            Promises
          </Heading>
          <Heading fit textColor={colors.JOKE_TEXT}>
            This is now Yet Another Talk About Promises™.
          </Heading>
        </Slide>
        <Slide bgColor={colors.PRIMARY_BG} textColor={colors.PRIMARY_TEXT}>
          <Heading fit>
            I. Observation
          </Heading>
        </Slide>
        <Slide bgColor={colors.PRIMARY_BG} textColor={colors.PRIMARY_TEXT}>
          <List ordered className="center" style={{width:'80vw'}}>
            <ListItem>Assert: <var>F</var> has a [[Promise]] internal slot whose value is an Object.</ListItem>
            <ListItem>Let <var>promise</var> be <var>F</var>.[[Promise]].</ListItem>
            <ListItem>Let <var>alreadyResolved</var> be <var>F</var>.[[AlreadyResolved]].</ListItem>
            <ListItem>If <var>alreadyResolved</var>.[[Value]] is <strong>true</strong>, return <strong>undefined</strong>.</ListItem>
            <ListItem>Set <var>alreadyResolved</var>.[[Value]] to <strong>true</strong>.</ListItem>
            <ListItem>
              If SameValue(<var>resolution</var>, <var>promise</var>) is <strong>true</strong>, then
              <List margin="0 0 0 10vw" ordered type="a">
                <ListItem>Let <var>selfResolutionError</var> be a newly created <strong>TypeError</strong> object.</ListItem>
                <ListItem>Return RejectPromise(<var>promise</var>, <var>selfResolutionError</var>).</ListItem>
              </List>
            </ListItem>
            <ListItem>
              If Type(<var>resolution</var>) is not Object, then
              <List margin="0 0 0 10vw" ordered type="a">
                <ListItem>Return FulfillPromise(<var>promise</var>, <var>resolution</var>).</ListItem>
              </List>
            </ListItem>
            <ListItem>Let <var>then</var> be Get(<var>resolution</var>, <code>"then"</code>).</ListItem>
            <ListItem>
              If <var>then</var> is an abrupt completion, then
              <List margin="0 0 0 10vw" ordered type="a">
                <ListItem>Return RejectPromise(<var>promise</var>, <var>then</var>.[[Value]]).</ListItem>
              </List>
            </ListItem>
            <ListItem>Let <var>thenAction</var> be <var>then</var>.[[Value]].</ListItem>
            <ListItem>
              If IsCallable(<var>thenAction</var>) is <strong>false</strong>, then
              <List margin="0 0 0 10vw" ordered type="a">
                <ListItem>Return FulfillPromise(<var>promise</var>, <var>resolution</var>).</ListItem>
              </List>
            </ListItem>
            <ListItem>Perform EnqueueJob(<code>"PromiseJobs"</code>, PromiseResolveThenableJob, « <var>promise</var>, <var>resolution</var>, <var>thenAction</var> »).</ListItem>
            <ListItem>Return <strong>undefined</strong>.</ListItem>
          </List>
        </Slide>
        <Slide bgColor={colors.PRIMARY_BG} textColor={colors.PRIMARY_TEXT}>
          <CodePane lang="javascript" textSize="4vh" source={`let result = doThingAsync()
  // -> p1
  .then(function (resultOfP1) {})
  // -> p2
  .then(null, function (errorFromP2) {})
  // -> p3
  .catch(function (errorFromP3) {})
  // -> p4`}/>
        </Slide>
        <Slide bgColor={colors.PRIMARY_BG} textColor={colors.PRIMARY_TEXT}>
          <CodePane lang="javascript" textSize="4vh" source={`doThingAsync()
  // -> p1
  .then(function (result) {
    // -> p3
    return Promise.resolve(42)
  })
  // -> p2
  .then(console.log)`}/>
        </Slide>
        <Slide bgColor={colors.PRIMARY_BG} textColor={colors.PRIMARY_TEXT} notes="this then is not that then">
          <CodePane lang="javascript" textSize="4vh" source={`doThingAsync()
  .then(function (result) {
    return {
      then(fn) { return fn(42) }
    }
  })
  .then(console.log)`}/>
        </Slide>
        <Slide bgColor={colors.PRIMARY_BG} textColor={colors.PRIMARY_TEXT}>
          <CodePane lang="javascript" textSize="4vh" source={`doThingAsync()
  .then(function (result) {
    return 42
  })
  .then(console.log)`}/>
        </Slide>
        <Slide bgColor={colors.PRIMARY_BG} textColor={colors.PRIMARY_TEXT}>
          <Heading fit>
            II. Interpretation
          </Heading>
        </Slide>
        <Slide bgColor={colors.PRIMARY_BG} textColor={colors.PRIMARY_TEXT}>
          <Heading fit>
            III. Application
          </Heading>
        </Slide>
        <Slide bgColor={colors.SECONDARY_BG} textColor={colors.PRIMARY_TEXT}>
          <Heading fit caps>
            Arrow Functions
          </Heading>
          <Heading fit textColor={colors.JOKE_TEXT}>
            Salt & pepper &ldquo;to taste&rdquo;
          </Heading>
        </Slide>
        <Slide bgColor={colors.SECONDARY_BG} textColor={colors.PRIMARY_TEXT}>
          <Heading fit>Parameters <S type="none" textFont="monospace">=></S> Code</Heading>
        </Slide>
        <Slide bgColor={colors.SECONDARY_BG} textColor={colors.PRIMARY_TEXT}>
          <List className="center" style={{listStyle: 'none'}}>
            <ListItem><S type="italic">ArrowFunction</S><S type="none" textColor={colors.JAVASCRIPT} textFont="monospace" style={{verticalAlign: 'sub'}}>[In, Yield, Await]</S>:</ListItem>
            <ListItem margin="0 0 0 10vw"><S type="italic">ArrowParameters</S><S type="none" textColor={colors.JAVASCRIPT} textFont="monospace" style={{verticalAlign: 'sub'}}>[?Yield, ?Await]</S>[no <S type="italic">LineTerminator</S> here] => <S type="italic">ConciseBody</S><S type="none" textColor={colors.JAVASCRIPT} textFont="monospace" style={{verticalAlign: 'sub'}}>[?In]</S></ListItem>
            <ListItem><S type="italic">ArrowParameters</S><S type="none" textColor={colors.JAVASCRIPT} textFont="monospace" style={{verticalAlign: 'sub'}}>[Yield, Await]</S>:</ListItem>
            <ListItem margin="0 0 0 10vw"><S type="italic">BindingIdentifier</S><S type="none" textColor={colors.JAVASCRIPT} textFont="monospace" style={{verticalAlign: 'sub'}}>[?Yield, ?Await]</S></ListItem>
            <ListItem margin="0 0 0 10vw"><S type="italic">CoverParenthesizedExpressionAndArrowParameterList</S><S type="none" textColor={colors.JAVASCRIPT} textFont="monospace" style={{verticalAlign: 'sub'}}>[?Yield, ?Await]</S></ListItem>
            <ListItem><S type="italic">ConciseBody</S><S type="none" textColor={colors.JAVASCRIPT} textFont="monospace" style={{verticalAlign: 'sub'}}>[In]</S>:</ListItem>
            <ListItem margin="0 0 0 10vw">[lookahead ≠ <S type="bold" textFont="monospace">{'{'}</S>] <S type="italic">AssignmentExpression</S><S type="none" textColor={colors.JAVASCRIPT} textFont="monospace" style={{verticalAlign: 'sub'}}>[?In, ~Yield, ~Await]</S></ListItem>
            <ListItem margin="0 0 0 10vw"><S type="bold" textFont="monospace">{'{'}</S> <S type="italic">FunctionBody</S><S type="none" textColor={colors.JAVASCRIPT} textFont="monospace" style={{verticalAlign: 'sub'}}>[~Yield, ~Await]</S> <S type="bold" textFont="monospace">{'}'}</S></ListItem>
          </List>
        </Slide>
        <Slide bgColor={colors.SECONDARY_BG} textColor={colors.PRIMARY_TEXT}>
          <CodePane lang="javascript" textSize="3vh" source={`let array = [1, 2, 3, 4, 5]

array.map((number) => { return number % 2 })
// [ 1, 0, 1, 0, 1 ]

array.map((number, index) => number + index)
// [ 1, 3, 5, 7, 9 ]

array.map(number => number / 0)
// [ Infinity, Infinity, Infinity, Infinity, Infinity ]
`}/>
        </Slide>
        <Slide bgColor={colors.SECONDARY_BG} textColor={colors.PRIMARY_TEXT}>
          <CodePane lang="javascript" textSize="3vh" source={`const doSomething = (options) => {
  const awesomeMode = !!options.awesome
  ...
}

function doSomething(options) {
  const awesomeMode = !!options.awesome
  ...
}`}/>
        </Slide>
        <Slide bgColor={colors.SECONDARY_BG} textColor={colors.PRIMARY_TEXT}>
          <Heading fit>
            I. Observation
          </Heading>
        </Slide>
        <Slide bgColor={colors.SECONDARY_BG}>
          <BlockQuote>
            <Quote textColor={colors.PRIMARY_TEXT} textSize="4rem">An <S type="italic">ArrowFunction</S> does not define local bindings for <S type="none" textFont="monospace">arguments</S>, <S type="none" textFont="monospace">super</S>, <S type="none" textFont="monospace">this</S>, or <S type="none" textFont="monospace">new.target</S>.</Quote>
            <Quote textColor={colors.SUBTLE_TEXT} textSize="2rem"><br/>Any reference to <S type="none" textFont="monospace">arguments</S>, <S type="none" textFont="monospace">super</S>, <S type="none" textFont="monospace">this</S>, or <S type="none" textFont="monospace">new.target</S> within an <S type="italic">ArrowFunction</S> must resolve to a binding in a lexically enclosing environment. Typically this will be the Function Environment of an immediately enclosing function.</Quote>
            <Cite><Link href="https://tc39.github.io/ecma262/#sec-arrow-function-definitions-runtime-semantics-evaluation" textColor={colors.LINK_TEXT}>ECMAScript Language Specification, §14.2.16 &ldquo;Runtime Semantics: Evaluation&rdquo;</Link></Cite>
          </BlockQuote>
        </Slide>
        <Slide bgColor={colors.SECONDARY_BG} textColor={colors.PRIMARY_TEXT}>
          <CodePane lang="javascript" textSize="3vh" source={`const fibonacci = (n) => {
  if (n === 0 || n === 1) {
    return n
  } else {
    return arguments.callee(n - 1)
         + arguments.callee(n - 2)
  }
}
fibonacci(10)
// Isolated (e.g. REPL):
// ReferenceError: arguments is not defined
// In another function:
// RangeError: Maximum call stack size exceeded
`}/>
        </Slide>
        <Slide bgColor={colors.SECONDARY_BG} textColor={colors.PRIMARY_TEXT}>
          <CodePane lang="javascript" textSize="3vh" source={`let obj = {
  viaFunction: function () {
    return this.property
  },
  viaArrow: () => this.property,
  property: 'test'
}
obj.viaFunction()
// test
obj.viaArrow()
// undefined
`}/>
        </Slide>
        <Slide bgColor={colors.SECONDARY_BG} textColor={colors.PRIMARY_TEXT}>
          <CodePane lang="javascript" textSize="3.5vh" source={`const ArrowClass = () => {}

var arrow = new ArrowClass()
// TypeError: ArrowClass is not a constructor
`}/>
        </Slide>
        <Slide bgColor={colors.SECONDARY_BG} textColor={colors.PRIMARY_TEXT}>
          <CodePane lang="javascript" textSize="3vh" source={`const ArrowClass = () => {}

ArrowClass.prototype.greet = (name) => {
  console.log(\`Hi, $\{name}!\`)
}
// TypeError: Cannot set property 'greet' of undefined
`}/>
        </Slide>
        <Slide bgColor={colors.SECONDARY_BG} textColor={colors.PRIMARY_TEXT}>
          <CodePane lang="javascript" textSize="4vh" source={`const generator = *() => {}
// SyntaxError: Unexpected token *
`}/>
        </Slide>
        <Slide bgColor={colors.SECONDARY_BG} textColor={colors.PRIMARY_TEXT}>
          <CodePane lang="javascript" textSize="3.5vh" source={`const buildOptions = () => { option: true }
buildOptions()
// undefined

const buildOptions = () => ({ option: true })
buildOptions()
// { option: true }`}/>
        </Slide>
        <Slide bgColor={colors.SECONDARY_BG} textColor={colors.PRIMARY_TEXT}>
          <CodePane lang="javascript" textSize="3.5vh" source={`function asyncThing(callback) {
  let fn = callback || err => { throw err; }
  // SyntaxError: Unexpected token ||
  fn(null)
}

function asyncThing(callback) {
  let fn = callback || (err => { throw err; })
  fn(null)
}
`}/>
        </Slide>
        <Slide bgColor={colors.SECONDARY_BG} textColor={colors.PRIMARY_TEXT}>
          <CodePane lang="javascript" textSize="3.5vh" source={`(() => console.log('IIFE 4 LYFE')());
// [Nothing happens.]
(() => { console.log('IIFE 4 LYFE') }());
// SyntaxError: missing ) after argument list
(() => { console.log('IIFE 4 LYFE') })();
// IIFE 4 LYFE
`}/>
        </Slide>
        <Slide bgColor={colors.SECONDARY_BG} textColor={colors.PRIMARY_TEXT}>
          <Heading fit>
            II. Interpretation
          </Heading>
        </Slide>
        <Slide bgColor={colors.SECONDARY_BG} textColor={colors.PRIMARY_TEXT}>
          <Heading fit>
            III. Application
          </Heading>
        </Slide>
        <Slide bgColor={colors.SECONDARY_BG} textColor={colors.PRIMARY_TEXT} notes="React: ever the poster child for the latest ES features.">
          <CodePane lang="javascript" textSize="3.5vh" source={`render() {
  return (
    <ul>
      {this.props.myData.map((item) => {
        return this.renderChildItem(item)
      })}
    </ul>
  )
}
`}/>
        </Slide>
        <Slide bgColor={colors.SECONDARY_BG} textColor={colors.PRIMARY_TEXT}>
          <CodePane lang="javascript" textSize="3.5vh" source={`fetch('something')
  .then(response => response.json())
  .then(body => body.data[0].attributes.title)
  .then(function print(title) {
    ...
  })
`}/>
        </Slide>
        <Slide bgColor={colors.TERTIARY_BG}>
          <Heading fit>
            <Code bgColor="transparent" margin="0" padding="0" textColor={colors.PRIMARY_TEXT}>Reflect</Code>
          </Heading>
          <Heading fit textColor={colors.JOKE_TEXT}>
            Thinking inside the box
          </Heading>
        </Slide>
        <Slide bgColor={colors.TERTIARY_BG} textColor={colors.PRIMARY_TEXT}>
          <Heading fit>
            I. Observation
          </Heading>
        </Slide>
        <Slide bgColor={colors.TERTIARY_BG} textColor={colors.PRIMARY_TEXT}>
          <Table className="center" style={{ borderSpacing: '4vh 1vh' }}>
            <TableBody>
              <TableRow textAlign="left">
                <TableItem textSize="2rem"><S type="none" textFont="monospace">Reflect.apply</S></TableItem>
                <TableItem textSize="2rem"><S type="none" textFont="monospace">Function.prototype.apply</S></TableItem>
              </TableRow>
              <TableRow textAlign="left">
                <TableItem textSize="2rem"><S type="none" textFont="monospace">Reflect.construct</S></TableItem>
                <TableItem textSize="2rem"><S type="none" textFont="monospace">new</S></TableItem>
              </TableRow>
              <TableRow textAlign="left">
                <TableItem textSize="2rem"><S type="none" textFont="monospace">Reflect.defineProperty</S></TableItem>
                <TableItem textSize="2rem"><S type="none" textFont="monospace">Object.defineProperty</S></TableItem>
              </TableRow>
              <TableRow textAlign="left">
                <TableItem textSize="2rem"><S type="none" textFont="monospace">Reflect.deleteProperty</S></TableItem>
                <TableItem textSize="2rem"><S type="none" textFont="monospace">delete obj[key]</S></TableItem>
              </TableRow>
              <TableRow textAlign="left">
                <TableItem textSize="2rem"><S type="none" textFont="monospace">Reflect.get</S></TableItem>
                <TableItem textSize="2rem"><S type="none" textFont="monospace">obj[key]</S></TableItem>
              </TableRow>
              <TableRow textAlign="left">
                <TableItem textSize="2rem"><S type="none" textFont="monospace">Reflect.getOwnPropertyDescriptor</S></TableItem>
                <TableItem textSize="2rem"><S type="none" textFont="monospace">Object.getOwnPropertyDescriptor</S></TableItem>
              </TableRow>
              <TableRow textAlign="left" textColor={colors.JAVASCRIPT}>
                <TableItem textSize="2rem"><S type="none"textFont="monospace">Reflect.getPrototypeOf</S></TableItem>
                <TableItem textSize="2rem"><S type="none" textFont="monospace">Object.getPrototypeOf</S></TableItem>
              </TableRow>
              <TableRow textAlign="left">
                <TableItem textSize="2rem"><S type="none" textFont="monospace">Reflect.has</S></TableItem>
                <TableItem textSize="2rem"><S type="none" textFont="monospace">key in obj</S></TableItem>
              </TableRow>
              <TableRow textAlign="left">
                <TableItem textSize="2rem"><S type="none" textFont="monospace">Reflect.isExtensible</S></TableItem>
                <TableItem textSize="2rem"><S type="none" textFont="monospace">Object.isExtensible</S></TableItem>
              </TableRow>
              <TableRow textAlign="left" textColor={colors.JAVASCRIPT}>
                <TableItem textSize="2rem"><S type="none"textFont="monospace">Reflect.ownKeys</S></TableItem>
                <TableItem textSize="2rem"><S type="none" textFont="monospace">Object.getOwnProperty*</S></TableItem>
              </TableRow>
              <TableRow textAlign="left">
                <TableItem textSize="2rem"><S type="none" textFont="monospace">Reflect.preventExtensions</S></TableItem>
                <TableItem textSize="2rem"><S type="none" textFont="monospace">Object.preventExtensions</S></TableItem>
              </TableRow>
              <TableRow textAlign="left">
                <TableItem textSize="2rem"><S type="none" textFont="monospace">Reflect.set</S></TableItem>
                <TableItem textSize="2rem"><S type="none" textFont="monospace">obj[key] = value</S></TableItem>
              </TableRow>
              <TableRow textAlign="left">
                <TableItem textSize="2rem"><S type="none" textFont="monospace">Reflect.setPrototypeOf</S></TableItem>
                <TableItem textSize="2rem"><S type="none" textFont="monospace">Object.setPrototypeOf</S></TableItem>
              </TableRow>
            </TableBody>
          </Table>
        </Slide>
        <Slide bgColor={colors.TERTIARY_BG} textColor={colors.PRIMARY_TEXT}>
          <Heading fit>✔︎ Proxy</Heading>
          <Heading fit>✘ Reflect</Heading>
          <List className="center" style={{ listStyle: 'none' }} textColor={colors.INVISIBLE_TEXT}>
            <ListItem>✔︎ Functions w/o <S type="none" textFont="monospace">this</S></ListItem>
            <ListItem>✔︎ Proxy</ListItem>
            <ListItem>✔︎ Block scoping</ListItem>
            <ListItem>✔︎ Default parameters</ListItem>
            <ListItem>✔︎ Rest / Spread</ListItem>
            <ListItem>✔︎ Shorthands</ListItem>
            <ListItem>✔︎ Destructuring</ListItem>
            <ListItem>✔︎ Symbols</ListItem>
            <ListItem>✱ Generators</ListItem>
            <ListItem>✱ Modules</ListItem>
            <ListItem><S type="strikethrough">✘ Promises</S></ListItem>
            <ListItem><S type="strikethrough">✘ Reflect</S></ListItem>
          </List>
        </Slide>
        <Slide bgColor={colors.TERTIARY_BG} textColor={colors.PRIMARY_TEXT}>
          <Heading fit>
            II. Interpretation
          </Heading>
          <Heading fit margin="8vh 0 0" textColor={colors.JOKE_TEXT}>
            (This time, with Cultural Context!)
          </Heading>
        </Slide>

        <Slide bgColor={colors.TERTIARY_BG} textColor={colors.PRIMARY_TEXT}>
          <CodePane lang="javascript" textSize="3.5vh" source={`db = {}

with (db) {
  set = function (key, value) {
    eval(key + ' = ' + value)
  }

  get = function (key) {
    return eval(key)
  }
}
`}/>
        </Slide>

        <Slide bgColor={colors.TERTIARY_BG} textColor={colors.PRIMARY_TEXT}>
          <Heading fit>
            III. Application
          </Heading>
        </Slide>
        <Slide bgColor={colors.TERTIARY_BG} textColor={colors.PRIMARY_TEXT}>
          <CodePane lang="javascript" textSize="3.5vh" source={`const db = Object.create(null)

function set(key, value) {
  Reflect.defineProperty(db, key, { value })
}

function get(key) {
  return Reflect.get(db, key)
}

function keys() {
  return Reflect.ownKeys(db)
}
`}/>
        </Slide>

        <Slide bgColor={colors.SECONDARY_BG}>
          <BlockQuote>
            <Quote textColor={colors.PRIMARY_TEXT}>If the next person&rsquo;s comfort is the priority, than you must be consistent, and the only way to be consistent is to have rules.</Quote>
            <Cite textColor={colors.SUBTLE_TEXT}>Fellow <Image height="1em" src={images.logo_td} style={{ verticalAlign: 'text-bottom' }}/> Agent</Cite>
          </BlockQuote>
        </Slide>

        <Slide bgColor={colors.SECONDARY_BG}>
          <Heading>Is that your priority?</Heading>
        </Slide>

        <Slide bgColor={colors.SECONDARY_BG}>
          <BlockQuote>
            <Quote style={{ lineHeight: '4.5rem' }} textColor={colors.PRIMARY_TEXT} textSize="4rem">I want that to be true, but that isn't always true. If I&rsquo;m honest, it&rsquo;s because <S type="italic">I&rsquo;m a selfish and emotional person</S>. Coding is a deeply personal form of expression for me.</Quote>
            <Cite textColor={colors.SUBTLE_TEXT}>Fellow <Image height="1em" src={images.logo_td} style={{ verticalAlign: 'text-bottom' }}/> Agent (emphasis mine)</Cite>
          </BlockQuote>
        </Slide>

        <Slide bgColor={colors.TERTIARY_BG}>
          <Heading lineHeight="1.2" textSize="10vh" textAlign="left">Modules vs. <Code textColor={colors.PRIMARY_TEXT} textSize="10vh">require</Code></Heading>
          <Heading lineHeight="1.2" textSize="10vh" textAlign="left"><Code textColor={colors.PRIMARY_TEXT} textSize="10vh">let</Code>/<Code textColor={colors.PRIMARY_TEXT} textSize="10vh">const</Code> vs. <Code textColor={colors.PRIMARY_TEXT} textSize="10vh">var</Code></Heading>
          <Heading lineHeight="1.2" textSize="10vh" textAlign="left"><Code textColor={colors.PRIMARY_TEXT} textSize="10vh">async</Code>/<Code textColor={colors.PRIMARY_TEXT} textSize="10vh">await</Code></Heading>
          <Heading lineHeight="1.2" textSize="10vh" textAlign="left"><Code textColor={colors.PRIMARY_TEXT} textSize="10vh">class</Code> syntax</Heading>
          <Heading lineHeight="1.2" textSize="10vh" textAlign="left">...</Heading>
          <Heading lineHeight="1.2" textSize="10vh" textAlign="left">Semicolons?</Heading>
        </Slide>

        <Slide bgImage={images.library} bgDarken={0.7}>
          <Heading fit>Working Agreement</Heading>
          <Heading fit margin="2vh 0" textColor={colors.BRAND_TEXT}><S type="none" textFont="monospace">CONTRIBUTING</S></Heading>
          <Heading fit>&ldquo;Style Guide&rdquo;</Heading>
          <div className="bg-cite-container">
            <Text className="bg-cite-link" textSize="2rem" textColor={colors.SUBTLE_TEXT}>
              📸 Giammarco Boscaro, <Link src="https://unsplash.com/photos/OPzWvgL-upY" textColor={colors.LINK_TEXT}>Unsplash</Link>
            </Text>
          </div>
        </Slide>

        <Slide bgImage={images.library} bgDarken={0.7}>
          <Heading textAlign="left">Rules,</Heading>
          <Heading textAlign="left">Written by all,</Heading>
          <Heading textAlign="left">Driven by pragma,</Heading>
          <Heading textAlign="left">Rooted in context.</Heading>
        </Slide>

        {this.renderWallBreaker('Thanks!', { bgColor: colors.PRIMARY_BG })}

        <Slide bgColor={colors.SECONDARY_BG}>
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
