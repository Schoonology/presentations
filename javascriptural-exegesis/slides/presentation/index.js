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
  scripture: require('../assets/scripture.jpg')
}

preloader(images)
require("normalize.css")
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
            <List margin="0">
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

  render() {
    return (
      <Deck transition={[]} transitionDuration={0} progress="none" theme={theme} controls={false}>
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
            <Quote>This is a blockquote.</Quote>
            <Cite textColor={colors.SUBTLE_TEXT}>This is a citation.</Cite>
          </BlockQuote>
          <List textColor={colors.JOKE_TEXT}>
            <ListItem>This is a list item.</ListItem>
          </List>
        </Slide>

        <Slide bgColor={colors.PRIMARY_BG}>
          <Heading fit textColor={colors.JAVASCRIPT}>
            JavaScriptural
          </Heading>
          <Heading fit>
            Exegesis
          </Heading>
        </Slide>

        {this.renderWallBreaker('Hello!', { bgColor: colors.bg('title') })}

        <Slide bgColor={colors.PRIMARY_BG}>
          <Heading fit textColor={colors.JAVASCRIPT}>
            JavaScriptural
          </Heading>
          <Heading fit>
            Exegesis
          </Heading>
        </Slide>

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
          <Heading>As a leader, your best tool is setting priorities.</Heading>
        </Slide>

        <Slide bgImage={images.desk} bgDarken={0.7}>
          <Heading fit caps>Priorities:</Heading>
          <Heading textAlign="left">1. Understanding</Heading>
          <Heading textAlign="left">2. Maintenance</Heading>
          <Heading textAlign="left">3. Extension</Heading>
        </Slide>

        <Slide bgImage={images.desk} bgDarken={0.7}>
          <Heading>The <S type="italic">next</S> person&rsquo;s comfort is my top priority.</Heading>
        </Slide>

        <Slide bgImage={images.airplane} bgDarken={0.7}>
          <BlockQuote>
            <Quote>If the next person&rsquo;s comfort is the priority, than you must be consistent, and the only way to be consistent is to have rules.</Quote>
            <Cite textColor={colors.SUBTLE_TEXT}>Fellow <Image display="inline" height="1em" src={images.logo_td} style={{ verticalAlign: 'text-bottom' }}/> Agent</Cite>
          </BlockQuote>
          <div className="bg-cite-container">
            <Text className="bg-cite-link" textSize="2rem" textColor={colors.SUBTLE_TEXT}>
              📸 Chris Barbalis, <Link src="https://unsplash.com/photos/6gWvk3lrFUA" textColor={colors.LINK_TEXT}>Unsplash</Link>
            </Text>
          </div>
        </Slide>

        <Slide bgImage={images.library} bgDarken={0.7}>
          <Heading fit>Working Agreement</Heading>
          <Heading fit margin="2vh 0" textColor={colors.BRAND_TEXT}>**Lint settings</Heading>
          <Heading fit><S type="none" textFont="monospace">CONTRIBUTING.md</S></Heading>
          <div className="bg-cite-container">
            <Text className="bg-cite-link" textSize="2rem" textColor={colors.SUBTLE_TEXT}>
              📸 Giammarco Boscaro, <Link src="https://unsplash.com/photos/OPzWvgL-upY" textColor={colors.LINK_TEXT}>Unsplash</Link>
            </Text>
          </div>
        </Slide>

        <Slide bgImage={images.library} bgDarken={0.7}>
          <Heading textColor={colors.BRAND_TEXT} fit caps>Big Question</Heading>
          <Heading>What rules should we use?</Heading>
          <div className="bg-cite-container">
            <Text className="bg-cite-link" textSize="2rem" textColor={colors.SUBTLE_TEXT}>
              📸 Giammarco Boscaro, <Link src="https://unsplash.com/photos/OPzWvgL-upY" textColor={colors.LINK_TEXT}>Unsplash</Link>
            </Text>
          </div>
        </Slide>

        <Slide bgImage={images.library} bgDarken={0.7}>
          <List>
            <ListItem textSize="6rem">δόγμα <S type="none" textColor={colors.JOKE_TEXT}>(dogma)</S></ListItem>
            <ListItem textSize="6rem">πράγμα <S type="none" textColor={colors.JOKE_TEXT}>(pragma)</S></ListItem>
            <ListItem textSize="6rem">ἐξήγησις <S type="none" textColor={colors.JOKE_TEXT}>(exegesis)</S></ListItem>
            <ListItem textSize="6rem">εἰςήγησις <S type="none" textColor={colors.JOKE_TEXT}>(eisegesis)</S></ListItem>
          </List>
          <div className="bg-cite-container">
            <Text className="bg-cite-link" textSize="2rem" textColor={colors.SUBTLE_TEXT}>
              📸 Giammarco Boscaro, <Link src="https://unsplash.com/photos/OPzWvgL-upY" textColor={colors.LINK_TEXT}>Unsplash</Link>
            </Text>
          </div>
        </Slide>

        <Slide bgColor={colors.PRIMARY_BG}>
          <Heading fit margin="0 0 8vh">
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
            <Quote margin="1rem 0 2rem">A principle or set of principles laid down by an authority as incontrovertibly true.</Quote>
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
          <Heading fit margin="0 0 8vh">
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
            <Quote margin="1rem 0 2rem">Relating to matters of fact or practical affairs <S type="italic" textColor={colors.SUBTLE_TEXT}>often to the exclusion of intellectual or artistic matters</S>.</Quote>
            <Cite textColor={colors.SUBTLE_TEXT}>Merriam-Webster Dictionary</Cite>
          </BlockQuote>
        </Slide>

        <Slide bgColor={colors.TERTIARY_BG}>
          <Heading>
            Making rules is not about how smart you are.
          </Heading>
        </Slide>

        <Slide bgColor={colors.PRIMARY_BG}>
          <Heading fit textColor={colors.INVISIBLE_JAVASCRIPT}>
            JavaScriptural
          </Heading>
          <Heading fit>
            Exegesis
          </Heading>
        </Slide>

        <Slide bgColor={colors.SECONDARY_BG}>
          <Heading fit>
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
            <Quote margin="1rem 0 2rem">Critical explanation or interpretation of a text, especially of scripture.</Quote>
            <Cite textColor={colors.SUBTLE_TEXT}>English Oxford Dictionaries</Cite>
          </BlockQuote>
        </Slide>

        <Slide bgColor={colors.TERTIARY_BG}>
          <Heading fit caps margin="0 0 2vh" textColor={colors.JAVASCRIPT}>Golden Rule</Heading>
          <Heading size={2}>Do <S type="none" textColor={colors.JOKE_TEXT}>(un)</S>to others what you would want them to do <S type="none" textColor={colors.JOKE_TEXT}>(un)</S>to you.</Heading>
        </Slide>

        <Slide bgColor={colors.PRIMARY_BG}>
          <Heading fit margin="0 0 8vh">
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
            <Quote margin="1rem 0 2rem">A subjective method of interpretation by introducing one&rsquo;s own opinions into the original.</Quote>
            <Cite textColor={colors.SUBTLE_TEXT}>The Century Dictionary</Cite>
          </BlockQuote>
        </Slide>

        <Slide bgColor={colors.TERTIARY_BG}>
          <Text className="faux-table-cell" textColor={colors.JOKE_TEXT} textSize="4rem">IEEE</Text>
          <Text className="faux-table-cell" textColor={colors.JOKE_TEXT} textSize="4rem">Medium</Text>
          <Text className="faux-table-cell" textColor={colors.SUBTLE_TEXT} textSize="4rem">Slack</Text>
          <Text className="faux-table-cell" textColor={colors.SUBTLE_TEXT} textSize="4rem">GitHub</Text>
          <Heading fit className="faux-table-jumbotron" margin="2rem 0">
            👑 <S type="none" textColor={colors.SUBTLE_TEXT}>(Con)</S>Text is king. 👑
          </Heading>
          <Text className="faux-table-cell" textColor={colors.SUBTLE_TEXT} textSize="4rem">Email</Text>
          <Text className="faux-table-cell" textColor={colors.SUBTLE_TEXT} textSize="4rem">Wikis</Text>
          <Text className="faux-table-cell" textColor={colors.JOKE_TEXT} textSize="4rem">Twitter</Text>
          <Text className="faux-table-cell" textColor={colors.JOKE_TEXT} textSize="4rem">Blogs</Text>
        </Slide>

        <Slide bgColor={colors.PRIMARY_BG}>
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
          <Text className="faux-table-cell" textColor={colors.JOKE_TEXT} textSize="4rem">Vanilla</Text>
          <Text className="faux-table-cell" textColor={colors.JOKE_TEXT} textSize="4rem">CoffeeScript</Text>
          <Text className="faux-table-cell" textColor={colors.SUBTLE_TEXT} textSize="4rem">Flow</Text>
          <Text className="faux-table-cell" textColor={colors.SUBTLE_TEXT} textSize="4rem">Standard</Text>
          <Heading fit className="faux-table-jumbotron" margin="2rem 0">
            <S type="none" textColor={colors.JAVASCRIPT}>JavaScript</S> is a religion. 🙏
          </Heading>
          <Text className="faux-table-cell" textColor={colors.SUBTLE_TEXT} textSize="4rem">TypeScript</Text>
          <Text className="faux-table-cell" textColor={colors.SUBTLE_TEXT} textSize="4rem">JSX</Text>
          <Text className="faux-table-cell" textColor={colors.JOKE_TEXT} textSize="4rem">RxJS</Text>
          <Text className="faux-table-cell" textColor={colors.JOKE_TEXT} textSize="4rem">Airbnb</Text>
        </Slide>

        <Slide bgImage={images.scripture} bgDarken={0.7}>
          <Heading>ECMAScript® Language Specification</Heading>
          <div className="bg-cite-container">
            <Text className="bg-cite-link" textSize="2rem" textColor={colors.SUBTLE_TEXT}>
              📸 Aaron Burden, <Link src="https://unsplash.com/photos/-uj3Y7r1BeM" textColor={colors.LINK_TEXT}>Unsplash</Link>
            </Text>
          </div>
        </Slide>

        <Slide bgImage={images.scripture} bgDarken={0.7}>
          <Text className="faux-table-cell"  textSize="4rem">Genre</Text>
          <Text className="faux-table-cell"  textSize="4rem">Origins</Text>
          <Text className="faux-table-cell" textColor={colors.BRAND_TEXT} textSize="4rem">History</Text>
          <Text className="faux-table-cell" textColor={colors.BRAND_TEXT} textSize="4rem">Culture</Text>
          <Text className="faux-table-cell"  textSize="4rem">Author</Text>
          <Text className="faux-table-cell"  textSize="4rem">Audience</Text>
          <Text className="faux-table-cell" textColor={colors.BRAND_TEXT} textSize="4rem">Syntax</Text>
          <Text className="faux-table-cell" textColor={colors.BRAND_TEXT} textSize="4rem">Grammar</Text>
          <Text className="faux-table-cell"  textSize="4rem">Symbology</Text>
          <Text className="faux-table-cell"  textSize="4rem">Philology</Text>
          <Text className="faux-table-cell" textColor={colors.BRAND_TEXT} textSize="4rem">Epistemology</Text>
          <Text className="faux-table-cell" textColor={colors.BRAND_TEXT} textSize="4rem">Eschatology</Text>
          <div className="bg-cite-container">
            <Text className="bg-cite-link" textSize="2rem" textColor={colors.SUBTLE_TEXT}>
              📸 Aaron Burden, <Link src="https://unsplash.com/photos/-uj3Y7r1BeM" textColor={colors.LINK_TEXT}>Unsplash</Link>
            </Text>
          </div>
        </Slide>

        <Slide bgImage={images.scripture} bgDarken={0.7}>
          <Heading>¯\_(ツ)_/¯</Heading>
          <div className="bg-cite-container">
            <Text className="bg-cite-link" textSize="2rem" textColor={colors.SUBTLE_TEXT}>
              📸 Aaron Burden, <Link src="https://unsplash.com/photos/-uj3Y7r1BeM" textColor={colors.LINK_TEXT}>Unsplash</Link>
            </Text>
          </div>
        </Slide>

        <Slide bgColor={colors.SECONDARY_BG}>
          <Heading fit>
            Inductive
          </Heading>
          <Heading fit caps>
            Study
          </Heading>
          <Heading fit textColor={colors.JOKE_TEXT}>Exegesis for the rest of us!</Heading>
        </Slide>

        <Slide bgColor={colors.SECONDARY_BG}>
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
        <Slide bgColor={colors.SECONDARY_BG}>
          <Heading fit>
            I. Observation
          </Heading>
          <hr/>
          <Heading textAlign="left" textColor={colors.SUBTLE_TEXT}>What does the text <S type="italic">say</S>?</Heading>
        </Slide>
        <Slide bgColor={colors.SECONDARY_BG}>
          <Heading fit>
            II. Interpretation
          </Heading>
          <hr/>
          <Heading textAlign="left" textColor={colors.SUBTLE_TEXT}>What does the text <S type="italic">mean</S>?</Heading>
        </Slide>
        <Slide bgColor={colors.SECONDARY_BG}>
          <Heading fit>
            III. Application
          </Heading>
          <hr/>
          <Heading textAlign="left" textColor={colors.SUBTLE_TEXT}>What does the text mean <S type="italic">for me</S>?</Heading>
        </Slide>
        <Slide bgColor={colors.PRIMARY_BG}>
          <Heading fit>
            Template
          </Heading>
          <Heading fit>
            Strings
          </Heading>
        </Slide>
        <Slide bgColor={colors.PRIMARY_BG}>
          <CodePane lang="javascript" textSize="4vh" source={`let cost = 7.95
console.log('Total cost: $' + cost)
// Total cost: $7.95
console.log(\`Total cost: $$\{cost\}\`)
// Total cost: $7.95`} />
        </Slide>
        <Slide bgColor={colors.PRIMARY_BG}>
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
        <Slide bgColor={colors.PRIMARY_BG}>
          <Heading fit>
            I. Observation
          </Heading>
        </Slide>
        <Slide bgColor={colors.PRIMARY_BG}>
          <div className="center">
            <List>
              <ListItem textSize="5vh"><S type="italic">SingleStringCharacter</S> ::</ListItem>
              <ListItem margin="0 0 0 10vw" style={{ whiteSpace: 'nowrap' }} textSize="5vh"><S type="italic">SourceCharacter</S> but not one of</ListItem>
              <ListItem margin="0 0 0 20vw" style={{ whiteSpace: 'nowrap' }} textSize="5vh"><S type="bold" textFont="monospace">'</S> or <S type="bold" textFont="monospace">\</S> or <S type="italic">LineTerminator</S></ListItem>
              <ListItem margin="0 0 0 10vw" textSize="5vh"><S type="bold" textFont="monospace">\</S> <S type="italic">EscapeSequence</S></ListItem>
              <ListItem margin="0 0 0 10vw" textSize="5vh"><S type="italic">LineContinuation</S></ListItem>
            </List>
            <List>
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
        <Slide bgColor={colors.PRIMARY_BG}>
          <Heading fit>
            II. Interpretation
          </Heading>
        </Slide>
        <Slide bgColor={colors.PRIMARY_BG}>
          <Heading fit>
            III. Application
          </Heading>
        </Slide>
        <Slide bgColor={colors.PRIMARY_BG}>
          <BlockQuote>
            <Quote margin="1rem 0 2rem">When writing a multiline string, use template literals (<code>``</code>).</Quote>
            <Cite>Your team&lsquo;s Working Agreement, maybe</Cite>
          </BlockQuote>
        </Slide>
        <Slide bgColor={colors.PRIMARY_BG}>
          <Heading textColor={colors.BRAND_TEXT}>ESLint*</Heading>
          <Text fit margin="2rem 0"><Code>"no-useless-concat"</Code></Text>
          <Text fit margin="2rem 0"><Code>"prefer-template"</Code></Text>
          <Text margin="2rem 0" textAlign="right" textColor={colors.JOKE_TEXT}>*Kinda-maybe-so-so-ish</Text>
        </Slide>
        <Slide bgColor={colors.TERTIARY_BG}>
          <Heading fit>
            Proxies
          </Heading>
          <Heading fit textColor={colors.JOKE_TEXT}>
            Somebody Else&rsquo;s Object
          </Heading>
        </Slide>
        <Slide bgColor={colors.TERTIARY_BG}>
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
        <Slide bgColor={colors.TERTIARY_BG}>
          <CodePane textSize="3vh" lang="javascript" lineHighlight="5" source={`let real = { answer: 42 }
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
        <Slide bgColor={colors.TERTIARY_BG}>
          <Heading fit>
            I. Observation
          </Heading>
        </Slide>
        <Slide bgColor={colors.TERTIARY_BG}>
          <BlockQuote>
            <Quote margin="1rem 0 2rem">Methods of a handler object may be used to augment the implementation for one or more of the proxy object&rsquo;s <S type="italic">internal methods.</S></Quote>
            <Cite><Link href="https://tc39.github.io/ecma262/#sec-proxy-object-internal-methods-and-internal-slots" textColor={colors.LINK_TEXT}>ECMAScript Language Specification, §9.5 &ldquo;Proxy Object Internal Methods and Internal Slots&rdquo;</Link></Cite>
          </BlockQuote>
        </Slide>
        <Slide bgColor={colors.TERTIARY_BG}>
          <Heading fit>
            II. Interpretation
          </Heading>
        </Slide>
        <Slide bgColor={colors.TERTIARY_BG}>
          <Heading fit>
            III. Application
          </Heading>
        </Slide>
        <Slide bgColor={colors.TERTIARY_BG}>
          <Heading fit style={{backgroundColor: 'black'}}>REDACTED</Heading>
          <CodePane textSize="3vh" lang="javascript" lineHighlight="5" source={
`for (var prop in source) {
  if (!target.hasOwnProperty(prop)) {
    target[prop] = source[prop]
  }
}`}/>
        </Slide>
        <Slide bgColor={colors.TERTIARY_BG}>
          <Heading fit>testdouble.js</Heading>
          <CodePane textSize="3vh" lang="javascript" lineHighlight="5" source={
`function createTestDoubleObject() {
  const obj = {}
  return new Proxy(obj, {
    get (target, propKey, receiver) {
      if (!obj.hasOwnProperty(propKey)) {
        obj[propKey] = createTestDoubleFunction()
      }
      return obj[propKey]
    }
  })
} // src/object.js:32`}/>
        </Slide>
        <Slide bgColor={colors.PRIMARY_BG}>
          <Heading fit>
            Promises
          </Heading>
          <Heading fit textColor={colors.JOKE_TEXT}>
            This is now Yet Another Talk About Promises™.
          </Heading>
        </Slide>
        <Slide bgColor={colors.PRIMARY_BG}>
          <Heading fit>
            I. Observation
          </Heading>
        </Slide>
        <Slide bgColor={colors.PRIMARY_BG}>
          <List ordered className="center" style={{ width:'90vw' }}>
            <ListItem>Assert: <var>F</var> has a [[Promise]] internal slot whose value is an Object.</ListItem>
            <ListItem>Let <var>promise</var> be <var>F</var>.[[Promise]].</ListItem>
            <ListItem textAlign="right" textSize="10vh" style={{
              height: 0
            }}>😨</ListItem>
            <ListItem>Let <var>alreadyResolved</var> be <var>F</var>.[[AlreadyResolved]].</ListItem>
            <ListItem>If <var>alreadyResolved</var>.[[Value]] is <strong>true</strong>, return <strong>undefined</strong>.</ListItem>
            <ListItem>Set <var>alreadyResolved</var>.[[Value]] to <strong>true</strong>.</ListItem>
            <ListItem>
              If SameValue(<var>resolution</var>, <var>promise</var>) is <strong>true</strong>, then
              <List margin="0 0 0 10vw" ordered type="a">
                <ListItem margin="0 0 0 -10vw" textAlign="center" textSize="10vh" style={{
                  height: 0,
                  width: '10vw'
                }}>😵</ListItem>
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
            <ListItem textAlign="right" textSize="10vh" style={{
              height: 0
            }}>👻</ListItem>
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
        <Slide bgColor={colors.PRIMARY_BG}>
          <CodePane className="moar-code" lang="javascript" textSize="4vh" source={`let result = doThingAsync()
  // -> p1
  .then(function (resultOfP1) {})
  // -> p2
  .then(null, function (errorFromP2) {})
  // -> p3
  .catch(function (errorFromP3) {})
  // -> p4`}/>
        </Slide>
        <Slide bgColor={colors.PRIMARY_BG}>
          <CodePane lang="javascript" textSize="4vh" source={`doThingAsync()
  // -> p1
  .then(function (result) {
    // -> p3
    return Promise.resolve(42)
  })
  // -> p2
  .then(console.log)`}/>
        </Slide>
        <Slide bgColor={colors.PRIMARY_BG}  notes="this then is not that then">
          <CodePane lang="javascript" textSize="4vh" source={`doThingAsync()
  .then(function (result) {
    return {
      then(fn) { return fn(42) }
    }
  })
  .then(console.log)`}/>
        </Slide>
        <Slide bgColor={colors.PRIMARY_BG}>
          <CodePane lang="javascript" textSize="4vh" source={`doThingAsync()
  .then(function (result) {
    return 42
  })
  .then(console.log)`}/>
        </Slide>
        <Slide bgColor={colors.PRIMARY_BG}>
          <Heading fit>
            II. Interpretation
          </Heading>
        </Slide>
        <Slide bgColor={colors.PRIMARY_BG}>
          <Heading fit>
            III. Application
          </Heading>
        </Slide>
        <Slide bgColor={colors.PRIMARY_BG}>
          <CodePane className="moar-code" lang="javascript" textSize="4vh" source={`doThingAsync()
.then(function (result) {
  return Promise.resolve(doSomethingWith(result)))
}) // Noise

doThingAsync()
.then(function (result) {
  return doSomethingWith(result))
}) // Signal`}/>
        </Slide>
        <Slide bgColor={colors.SECONDARY_BG}>
          <Heading fit caps>
            Arrow
          </Heading>
          <Heading fit caps>
            Functions
          </Heading>
        </Slide>
        <Slide bgColor={colors.SECONDARY_BG}>
          <Heading fit>Parameters <S type="none" textFont="monospace">=></S> Code</Heading>
        </Slide>
        <Slide bgColor={colors.SECONDARY_BG}>
          <List className="center">
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

        <Slide bgColor={colors.SECONDARY_BG}>
          <CodePane className="moar-code" lang="javascript" textSize="4vh" source={`let array = [1, 2, 3, 4, 5]

array.map((number) => { return number % 2 })
// [ 1, 0, 1, 0, 1 ]

array.map((number, index) => number + index)
// [ 1, 3, 5, 7, 9 ]

array.map(number => number / 0)
// [ Infinity, Infinity, … ]
`}/>
        </Slide>
        <Slide bgColor={colors.SECONDARY_BG}>
          <CodePane className="moar-code" lang="javascript" textSize="4vh" source={`const doSomething = (options) => {
  const awesomeMode = !!options.awesome
  ...
}

function doSomething(options) {
  const awesomeMode = !!options.awesome
  ...
}`}/>
        </Slide>
        <Slide bgColor={colors.SECONDARY_BG}>
          <BlockQuote>
            <Quote  textSize="4rem">An <S type="italic">ArrowFunction</S> does not define local bindings for <S type="none" textFont="monospace">arguments</S>, <S type="none" textFont="monospace">super</S>, <S type="none" textFont="monospace">this</S>, or <S type="none" textFont="monospace">new.target</S>.</Quote>
            <Quote textColor={colors.SUBTLE_TEXT} textSize="2rem"><br/>Any reference to <S type="none" textFont="monospace">arguments</S>, <S type="none" textFont="monospace">super</S>, <S type="none" textFont="monospace">this</S>, or <S type="none" textFont="monospace">new.target</S> within an <S type="italic">ArrowFunction</S> must resolve to a binding in a lexically enclosing environment. Typically this will be the Function Environment of an immediately enclosing function.</Quote>
            <Cite><Link href="https://tc39.github.io/ecma262/#sec-arrow-function-definitions-runtime-semantics-evaluation" textColor={colors.LINK_TEXT}>ECMAScript Language Specification, §14.2.16 &ldquo;Runtime Semantics: Evaluation&rdquo;</Link></Cite>
          </BlockQuote>
        </Slide>
        <Slide bgColor={colors.SECONDARY_BG}>
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
        <Slide bgColor={colors.SECONDARY_BG}>
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
          <Heading margin="1rem 0 0" textColor={colors.SUBTLE_TEXT}>⚠️ BabelJS</Heading>
        </Slide>
        <Slide bgColor={colors.SECONDARY_BG}>
          <CodePane className="moar-code" lang="javascript" textSize="4vh" source={`const ArrowClass = () => {}

var arrow = new ArrowClass()
// TypeError: ArrowClass is not a constructor
`}/>
        </Slide>
        <Slide bgColor={colors.SECONDARY_BG}>
          <CodePane className="moar-code" lang="javascript" textSize="3.5vh" source={`const ArrowClass = () => {}

ArrowClass.prototype.greet = (name) => {
  console.log(\`Hi, $\{name}!\`)
}
// TypeError: Cannot set property 'greet' of undefined
`}/>
        </Slide>
        <Slide bgColor={colors.SECONDARY_BG}>
          <CodePane lang="javascript" textSize="4vh" source={`const generator = *() => {}
// SyntaxError: Unexpected token *
`}/>
        </Slide>
        <Slide bgColor={colors.SECONDARY_BG}>
          <CodePane className="moar-code" lang="javascript" textSize="4vh" source={`const buildOptions = () => { option: true }
buildOptions()
// undefined

const buildOptions = () => ({ option: true })
buildOptions()
// { option: true }`}/>
        </Slide>
        <Slide bgColor={colors.SECONDARY_BG}>
          <CodePane className="moar-code" lang="javascript" textSize="4vh" source={`function asyncThing(callback) {
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
        <Slide bgColor={colors.SECONDARY_BG}>
          <CodePane className="moar-code" lang="javascript" textSize="4vh" source={`(() => console.log('IIFE 4 LYFE')());
// [Nothing happens.]

(() => { console.log('IIFE 4 LYFE') }());
// SyntaxError: missing ) after argument list

(() => { console.log('IIFE 4 LYFE') })();
// IIFE 4 LYFE
`}/>
        </Slide>
        <Slide bgColor={colors.SECONDARY_BG}>
          <Text fit>Arrow functions are concise.</Text>
          <Text fit bold>That&rsquo;s not the point.</Text>
        </Slide>
        <Slide bgColor={colors.SECONDARY_BG}  notes="React: ever the poster child for the latest ES features.">
          <CodePane className="moar-code" lang="javascript" textSize="4vh" source={`render() {
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
        <Slide bgColor={colors.SECONDARY_BG}>
          <CodePane className="moar-code" lang="javascript" textSize="4vh" source={`fetch('something')
  .then(response => response.json())
  .then(body => body.data[0].attributes.title)
  .then(function print(title) {
    ...
  })
`}/>
        </Slide>
        <Slide bgColor={colors.SECONDARY_BG}>
          <Heading textColor={colors.BRAND_TEXT}>ESLint 🙌</Heading>
          <Text fit margin="2rem 0"><Code>"arrow-body-style": "never"</Code></Text>
          <Text fit margin="2rem 0"><Code>"arrow-parens": "always"</Code></Text>
          <Text fit margin="2rem 0"><Code>(x) => $expr(x)</Code></Text>
        </Slide>
        <Slide bgColor={colors.PRIMARY_BG}>
          <Heading textColor={colors.BRAND_TEXT} size={2}>Dogmatic rules</Heading>
          <List style={{listStyle: 'disc'}}>
            <ListItem textSize="3rem">No function declarations</ListItem>
            <ListItem textSize="3rem">Always use parentheses</ListItem>
            <ListItem textSize="3rem">Never use parentheses</ListItem>
            <ListItem textSize="3rem">Always use <Code>===</Code></ListItem>
            <ListItem textSize="3rem">Don’t use generators</ListItem>
            <ListItem textSize="3rem">Capers ruin everything</ListItem>
          </List>
        </Slide>
        <Slide bgColor={colors.PRIMARY_BG}>
          <Heading textColor={colors.BRAND_TEXT} size={2}>Eisegetical reasons</Heading>
          <List style={{listStyle: 'disc'}}>
            <ListItem textSize="3rem">&ldquo;Syntactic sugar <S type="none" textColor={colors.JOKE_TEXT}>(that I like)</S>&rdquo;</ListItem>
            <ListItem textSize="3rem">&ldquo;Easier <S type="none" textColor={colors.JOKE_TEXT}>(for me)</S> to &lsquo;reason about&rsquo;&rdquo;</ListItem>
            <ListItem textSize="3rem">&ldquo;Because <S type="none" textColor={colors.JOKE_TEXT}>[person]</S> says so&rdquo;</ListItem>
            <ListItem textSize="3rem">&ldquo;Less visual clutter <S type="none" textColor={colors.JOKE_TEXT}>(on my 60" iMac)</S>&rdquo;</ListItem>
            <ListItem textSize="3rem">&ldquo;More concise <S type="none" textColor={colors.JOKE_TEXT}>(at 80 characters)</S>&rdquo;</ListItem>
            <ListItem textSize="3rem">&ldquo;<S type="none" textColor={colors.JOKE_TEXT}>[My favorite feature]</S> is THE FUTURE 🚀&rdquo;</ListItem>
          </List>
        </Slide>
        <Slide bgColor={colors.SECONDARY_BG}>
          <List className="moar-code" style={{listStyle: 'disc'}}>
            <ListItem textSize="3rem">Always <Code>.catch()</Code> Promises <S type="italic">in Node</S>.</ListItem>
            <Text margin="0 0 0 1em" textColor={colors.SUBTLE_TEXT} textSize="3rem">Starting with Node v10, unhandled Promises will crash the server.</Text>
            <ListItem textSize="3rem"><S type="italic">Prefer</S> named functions.</ListItem>
            <Text margin="0 0 0 1em" textColor={colors.SUBTLE_TEXT} textSize="3rem">Without names, stack traces are less useful during debugging.</Text>
            <ListItem textSize="3rem">Keep cream cheese <S type="italic">to a minimum</S>.</ListItem>
            <Text margin="0 0 0 1em" textColor={colors.SUBTLE_TEXT} textSize="3rem">Excessive cream cheese glops onto the eater's shirt, which may increase the stress of their day.</Text>
          </List>
        </Slide>
        <Slide bgColor={colors.TERTIARY_BG}>
          <Heading fit>
            Reflect
          </Heading>
          <Text textColor={colors.SUBTLE_TEXT}>
            This is now a talk about how to think about code that inspects other code:<br/>meta-meta-metaprogramming.
          </Text>
          <Text>You're welcome.</Text>
        </Slide>
        <Slide bgColor={colors.TERTIARY_BG}>
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
        <Slide bgColor={colors.TERTIARY_BG}>
          <div className="center">
            <Heading textAlign="left">✔︎ Proxy</Heading>
            <Heading textAlign="left">✘ Reflect</Heading>
            <List>
              <ListItem>✔︎ Functions w/o <S type="none" textFont="monospace">this</S></ListItem>
              <ListItem>✔︎ Block scoping</ListItem>
              <ListItem>✔︎ Default parameters</ListItem>
              <ListItem>✔︎ Rest / Spread</ListItem>
              <ListItem>✔︎ Shorthands</ListItem>
              <ListItem>✔︎ Destructuring</ListItem>
              <ListItem>✔︎ Symbols</ListItem>
              <ListItem>✱ Generators</ListItem>
              <ListItem>✱ Modules</ListItem>
              <ListItem><S type="strikethrough">✘ Promises</S></ListItem>
            </List>
          </div>
        </Slide>
        <Slide bgColor={colors.TERTIARY_BG}>
          <Heading fit>History</Heading>
          <Heading fit>Culture</Heading>
          <Heading textSize="100vh" textFont="Baskerville" textColor={colors.INVISIBLE_TEXT} style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
          }}>&amp;</Heading>
        </Slide>

        <Slide bgColor={colors.TERTIARY_BG}>
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

        <Slide bgColor={colors.TERTIARY_BG}>
          <CodePane lang="javascript" textSize="3vh" source={`// bad
object.hasOwnProperty(key)

// good
Object.prototype.hasOwnProperty.call(object, key)

// best
// cache the lookup once, in module scope.
const has = Object.prototype.hasOwnProperty
/* or */
import has from 'has'
// ...
has.call(object, key)`}/>
        </Slide>

        <Slide bgColor={colors.TERTIARY_BG}>
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

        <Slide bgImage={images.airplane} bgDarken={0.7}>
          <BlockQuote>
            <Quote>If the next person&rsquo;s comfort is the priority, than you must be consistent, and the only way to be consistent is to have rules.</Quote>
            <Cite textColor={colors.SUBTLE_TEXT}>Fellow <Image display="inline" height="1em" src={images.logo_td} style={{ verticalAlign: 'text-bottom' }}/> Agent</Cite>
          </BlockQuote>
          <div className="bg-cite-container">
            <Text className="bg-cite-link" textSize="2rem" textColor={colors.SUBTLE_TEXT}>
              📸 Chris Barbalis, <Link src="https://unsplash.com/photos/6gWvk3lrFUA" textColor={colors.LINK_TEXT}>Unsplash</Link>
            </Text>
          </div>
        </Slide>

        <Slide bgImage={images.airplane} bgDarken={0.7}>
          <Heading>Is that your priority?</Heading>
          <div className="bg-cite-container">
            <Text className="bg-cite-link" textSize="2rem" textColor={colors.SUBTLE_TEXT}>
              📸 Chris Barbalis, <Link src="https://unsplash.com/photos/6gWvk3lrFUA" textColor={colors.LINK_TEXT}>Unsplash</Link>
            </Text>
          </div>
        </Slide>

        <Slide bgImage={images.airplane} bgDarken={0.7}>
          <BlockQuote>
            <Quote style={{ lineHeight: '4.5rem' }}  textSize="4rem">I want that to be true, but that isn't always true. If I&rsquo;m honest, it&rsquo;s because <S type="italic">I&rsquo;m a selfish and emotional person</S>. Coding is a deeply personal form of expression for me.</Quote>
            <Cite textColor={colors.SUBTLE_TEXT}>Fellow <Image display="inline-block" height="1em" src={images.logo_td} style={{ verticalAlign: 'text-bottom' }}/> Agent (emphasis mine)</Cite>
          </BlockQuote>
          <div className="bg-cite-container">
            <Text className="bg-cite-link" textSize="2rem" textColor={colors.SUBTLE_TEXT}>
              📸 Chris Barbalis, <Link src="https://unsplash.com/photos/6gWvk3lrFUA" textColor={colors.LINK_TEXT}>Unsplash</Link>
            </Text>
          </div>
        </Slide>

        <Slide bgImage={images.library} bgDarken={0.7}>
          <Heading textColor={colors.BRAND_TEXT} fit caps>Big Question</Heading>
          <Heading>What rules should we use?</Heading>
          <div className="bg-cite-container">
            <Text className="bg-cite-link" textSize="2rem" textColor={colors.SUBTLE_TEXT}>
              📸 Giammarco Boscaro, <Link src="https://unsplash.com/photos/OPzWvgL-upY" textColor={colors.LINK_TEXT}>Unsplash</Link>
            </Text>
          </div>
        </Slide>

        <Slide bgImage={images.library} bgDarken={0.7}>
          <Heading textAlign="left" size={1} textColor={colors.BRAND_TEXT}>Rules:</Heading>
          <Heading textAlign="left" size={2}>• Written by all,</Heading>
          <Heading textAlign="left" size={2}>• Driven by pragma,</Heading>
          <Heading textAlign="left" size={2}>• Rooted in context.</Heading>
          <div className="bg-cite-container">
            <Text className="bg-cite-link" textSize="2rem" textColor={colors.SUBTLE_TEXT}>
              📸 Giammarco Boscaro, <Link src="https://unsplash.com/photos/OPzWvgL-upY" textColor={colors.LINK_TEXT}>Unsplash</Link>
            </Text>
          </div>
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
