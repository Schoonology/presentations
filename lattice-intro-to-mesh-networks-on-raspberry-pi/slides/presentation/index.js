import React from "react"
import * as Spectacle from "spectacle"
import preloader from "spectacle/lib/utils/preloader"
import CodeSlide from "spectacle-code-slide"
for (let key in Spectacle) { global[key] = Spectacle[key] }

const images = {
  lattice_pie: {
    data: require('../assets/lattice-pie.jpg'),
    cite: { name: 'Andrew Malone', url: 'https://www.flickr.com/photos/andrewmalone/' },
  },
  td_logo: {
    data: require('../../../shared/assets/td-logo-white.svg'),
  },
}

// require("../assets/styles.css")

preloader(images)

import { theme, colors } from "./style.js"

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={[]} transitionDuration={0} progress="none" theme={theme} controls={false}>
        <Slide bgColor={colors.bg('title')} bgImage={images.lattice_pie.data}>
          <Heading fit caps>
            Lattice
          </Heading>
          <Heading fit>
            An Introduction to Mesh Networks
          </Heading>
          <Heading fit>
            on the <S type="" textColor={colors.TERTIARY_BG}>Raspberry Pi</S>
          </Heading>
        </Slide>
        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../../result.js")}
          ranges={[
            { loc: [0, 95] },
          ]}
        />
        <Slide bgColor={colors.bg('setup')} textColor={colors.PRIMARY_TEXT}>
          <Heading>Setup</Heading>
          <br/>
          <Heading fit>
            <Link textColor={colors.LINK_TEXT} href="https://nodejs.org/en/download/package-manager">https://nodejs.org/en/download/package-manager📎</Link>
          </Heading>
          <br/>
          <CodePane
            lang="bash"
            source={require("raw-loader!../assets/setup.sh")}
            textSize="1.3rem"
          />
        </Slide>
        <Slide bgColor={colors.bg('udp-bind')} textColor={colors.PRIMARY_TEXT}>
          <Heading>UDP</Heading>
          <List>
            <ListItem><Link textColor={colors.LINK_TEXT} href="https://tools.ietf.org/html/rfc768">RFC 768📎</Link>, 1980</ListItem>
            <ListItem>Layer 4: Transport</ListItem>
            <ListItem>Alternative to TCP</ListItem>
            <ListItem>Unordered</ListItem>
            <ListItem>Unreliable</ListItem>
            <ListItem>Unapologetic</ListItem>
          </List>
        </Slide>
        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/udp-bind.js")}
          ranges={[
            { loc: [0, 1] },
            { loc: [2, 3] },
            { loc: [4, 6] },
            { loc: [7, 20] },
            { loc: [21, 29] },
          ]}
        />
        <Slide bgColor={colors.bg('udp-bind')} textColor={colors.PRIMARY_TEXT}>
          <Heading fit caps>Demo</Heading>
        </Slide>
        <Slide bgColor={colors.bg('udp-join')} textColor={colors.PRIMARY_TEXT}>
          <Heading>IP Multicast</Heading>
          <List>
            <ListItem><Link textColor={colors.LINK_TEXT} href="https://tools.ietf.org/html/rfc1112">RFC 1112📎</Link>, 1986</ListItem>
            <ListItem>Layer 3: Internet</ListItem>
            <ListItem>UDP, PGM, RTP, mDNS</ListItem>
            <ListItem><S type="" textColor={colors.SUBTLE_TEXT}>Not technically a "broadcast"</S></ListItem>
          </List>
        </Slide>
        <Slide bgColor={colors.bg('udp-join')} textColor={colors.PRIMARY_TEXT}>
          <Heading fit>Multicast Addresses</Heading>
          <Text textColor={colors.PRIMARY_TEXT}>Routed by "Block"</Text>
          <List style={{listStyle: 'none'}}>
            <ListItem><Link textColor={colors.LINK_TEXT} href="https://tools.ietf.org/html/rfc5771">RFC 5771📎</Link>, 2001-2010</ListItem>
            <ListItem textColor={colors.BRAND_TEXT}><S type="bold">Local</S>: <Code textColor={colors.BRAND_TEXT}>224.0.0.0</Code> to <Code textColor={colors.BRAND_TEXT}>224.0.0.255</Code></ListItem>
            <ListItem><S type="bold">Internetwork</S>: <Code textColor={colors.PRIMARY_TEXT}>224.0.1.0</Code> to <Code textColor={colors.PRIMARY_TEXT}>224.0.1.255</Code></ListItem>
            <ListItem><S type="bold">AD-HOC</S>:
              <List style={{listStyle: 'none', marginLeft: '1em'}}>
                <ListItem><Code textColor={colors.PRIMARY_TEXT}>224.000.2.0</Code> to <Code textColor={colors.PRIMARY_TEXT}>224.000.255.255</Code></ListItem>
                <ListItem><Code textColor={colors.PRIMARY_TEXT}>224.003.0.0</Code> to <Code textColor={colors.PRIMARY_TEXT}>224.004.255.255</Code></ListItem>
                <ListItem><Code textColor={colors.PRIMARY_TEXT}>233.252.0.0</Code> to <Code textColor={colors.PRIMARY_TEXT}>233.255.255.255</Code></ListItem>
              </List>
            </ListItem>
          </List>
        </Slide>
        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/udp-join.js")}
          ranges={[
            { loc: [0, 5] },
            { loc: [28, 29] },
            { loc: [34, 46] },
          ]}
        />
        <Slide bgColor={colors.bg('udp-join')} textColor={colors.PRIMARY_TEXT}>
          <Heading fit caps>Demo</Heading>
        </Slide>
        <Slide bgColor={colors.bg('udp-broadcast')} textColor={colors.PRIMARY_TEXT}>
          <Heading>UDP Broadcast</Heading>
        </Slide>
        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/udp-broadcast.js")}
          ranges={[
            { loc: [5, 7] },
            { loc: [50, 61] },
          ]}
        />
        <Slide bgColor={colors.bg('udp-broadcast')} textColor={colors.PRIMARY_TEXT}>
          <Heading fit caps>Demo</Heading>
        </Slide>
        <Slide bgColor={colors.bg('gpio')} textColor={colors.PRIMARY_TEXT}>
          <Heading>Bonus: GPIO</Heading>
          <Heading textSize="200">&amp;</Heading>
          <Heading>Raspberry Pi</Heading>
        </Slide>
        <Slide bgColor={colors.bg('gpio')} textColor={colors.PRIMARY_TEXT}>
          <Heading fit>GPIO Virtual Filesystem</Heading>
          <Text><Code textColor={colors.PRIMARY_TEXT}>/sys/class/gpio</Code></Text>
          <List ordered>
            <ListItem><S type="bold">Export</S> (pin)</ListItem>
            <ListItem><S type="bold">Set Direction</S> (in/out)</ListItem>
            <ListItem><S type="bold">Set Value</S> (1/0)</ListItem>
          </List>
        </Slide>
        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/gpio.js")}
          ranges={[
            { loc: [1, 2] },
            { loc: [6, 7] },
            { loc: [13, 14] },
            { loc: [65, 71] },
            { loc: [72, 83] },
            { loc: [84, 95] },
          ]}
        />
        <Slide bgColor={colors.bg('gpio')} textColor={colors.PRIMARY_TEXT}>
          <Heading fit caps>Demo</Heading>
        </Slide>
        <Slide bgColor={colors.bg('thanks')}>
          <Heading fit caps>Thanks!</Heading>
          <Layout>
            <Fill>
              <Image src={images.td_logo.data} width="50%" margin='0 !important' display="block" />
            </Fill>
            <Fill>
              <List style={{listStyle: 'none'}}>
                <ListItem><Link textColor={colors.LINK_TEXT} href="https://twitter.com/Schoonology">@Schoonology</Link></ListItem>
                <ListItem><Link textColor={colors.LINK_TEXT} href="mailto:schoon@testdouble.com">schoon@testdouble.com</Link></ListItem>
              </List>
            </Fill>
          </Layout>
        </Slide>
      </Deck>
    )
  }
}
