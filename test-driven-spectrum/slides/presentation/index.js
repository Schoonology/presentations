import React from "react"
import * as Spectacle from "spectacle"
import preloader from "spectacle/lib/utils/preloader"
for (let key in Spectacle) { global[key] = Spectacle[key] }

const images = {
  areas_games: require('../assets/areas-games.svg'),
  areas_phd: require('../assets/areas-phd.svg'),
  areas_spreadsheet: require('../assets/areas-spreadsheet.svg'),
  map_blank: require('../assets/map-blank.svg'),
  map_confidence: require('../assets/map-confidence.svg'),
  map_field: require('../assets/map-field.svg'),
  map_knowledge: require('../assets/map-knowledge.svg'),
  routes_all: require('../assets/routes-all.svg'),
  routes_compression: require('../assets/routes-compression.svg'),
  routes_discovery: require('../assets/routes-discovery.svg'),
  routes_prototyping: require('../assets/routes-prototyping.svg'),
  routes_research: require('../assets/routes-research.svg'),
  td_logo: require('../../../shared/assets/td-logo-white.svg'),
}

preloader(images)

import { theme, colors } from "./style.js"

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={[]} transitionDuration={0} progress="none" theme={theme} controls={false}>
        <Slide bgColor={colors.bg('title')}>
          <Heading fit caps>Mapping</Heading>
          <Heading fit caps textColor={colors.BRAND_TEXT}>Uncertainty</Heading>
          <Text textColor={colors.SUBTLE_TEXT} size={1} fit bold>
            Put <S type="italic">your</S> spreadsheets on the Internet <S type="italic">with confidence!</S>
          </Text>
        </Slide>
        <Slide bgColor={colors.bg('map')} bgImage="https://images-na.ssl-images-amazon.com/images/I/81Bsg6FpkTL._SL1500_.jpg">
        </Slide>
        <Slide bgColor={colors.bg('map')}>
          <Heading size={4} textColor={colors.PRIMARY_TEXT}>The Uncertainty Map</Heading>
          <Image src={images.map_blank} style={{ maxWidth:'50%', display: 'block' }}></Image>
        </Slide>
        <Slide bgColor={colors.bg('map')}>
          <Image src={images.map_knowledge} style={{ maxWidth:'100%', display: 'block' }}></Image>
        </Slide>
        <Slide bgColor={colors.bg('map')}>
          <Image src={images.map_confidence} style={{ maxWidth:'100%', display: 'block' }}></Image>
        </Slide>
        <Slide bgColor={colors.bg('map')}>
          <Image src={images.map_field} style={{ maxWidth:'100%', display: 'block' }}></Image>
        </Slide>
        <Slide bgColor={colors.bg('routes')}>
          <Heading fit>Navigation</Heading>
          <Text textColor={colors.BRAND_TEXT} fit>What do I <S type="italic">do</S> here?</Text>
        </Slide>
        <Slide bgColor={colors.bg('routes')}>
          <Image src={images.routes_compression} style={{ maxWidth:'100%', display: 'block' }}></Image>
        </Slide>
        <Slide bgColor={colors.bg('routes')}>
          <Image src={images.routes_discovery} style={{ maxWidth:'100%', display: 'block' }}></Image>
        </Slide>
        <Slide bgColor={colors.bg('routes')}>
          <Image src={images.routes_prototyping} style={{ maxWidth:'100%', display: 'block' }}></Image>
        </Slide>
        <Slide bgColor={colors.bg('routes')}>
          <Image src={images.routes_research} style={{ maxWidth:'100%', display: 'block' }}></Image>
        </Slide>
        <Slide bgColor={colors.bg('routes')}>
          <Image src={images.routes_all} style={{ maxWidth:'100%', display: 'block' }}></Image>
        </Slide>
        <Slide bgColor={colors.bg('areas')}>
          <Heading fit>Geography</Heading>
          <Text textColor={colors.BRAND_TEXT} fit>What am I <S type="italic">doing</S> here?</Text>
        </Slide>
        <Slide bgColor={colors.bg('areas')}>
          <Image src="http://www.excelxlsx.com/wp-content/uploads/2016/12/budgeting-excel-templates-spreadsheet.jpg" style={{ maxWidth:'100%', display: 'block' }}></Image>
        </Slide>
        <Slide bgColor={colors.bg('areas')}>
          <Image src={images.areas_spreadsheet} style={{ maxWidth:'100%', display: 'block' }}></Image>
        </Slide>
        <Slide bgColor={colors.bg('areas')}>
          <Image src="https://i.ytimg.com/vi/RQolLYdOS_8/maxresdefault.jpg" style={{ maxWidth:'100%', display: 'block' }}></Image>
        </Slide>
        <Slide bgColor={colors.bg('areas')}>
          <Image src={images.areas_phd} style={{ maxWidth:'100%', display: 'block' }}></Image>
        </Slide>
        <Slide bgColor={colors.bg('areas')}>
          <Image src="http://media.steampowered.com/steamcommunity/public/images/items/239820/0af1267f29f5cc905bf9db750e2a6dc3b4d590bc.jpg" style={{ maxWidth:'100%', display: 'block' }}></Image>
        </Slide>
        <Slide bgColor={colors.bg('areas')}>
          <Image src={images.areas_games} style={{ maxWidth:'100%', display: 'block' }}></Image>
        </Slide>
        <Slide bgColor={colors.bg('extensions')}>
          <Heading fit>Extensions</Heading>
          <Text textColor={colors.BRAND_TEXT} fit>What do I do with <S type="italic">this</S>?</Text>
        </Slide>
        <Slide bgColor={colors.bg('extensions')}>
          <List textColor={colors.PRIMARY_TEXT}>
            <ListItem>Project Management</ListItem>
            <ListItem>Product Management</ListItem>
            <ListItem>Design ("Architecture")</ListItem>
            <ListItem>Constraints</ListItem>
          </List>
        </Slide>
        <Slide bgColor={colors.bg('thanks')}>
          <Heading fit caps>Thanks!</Heading>
          <Layout>
            <Fill>
              <Image src={images.td_logo} width="50%" margin='0 !important' display="block" />
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
    );
  }
}
