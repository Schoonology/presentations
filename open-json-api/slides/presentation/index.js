import React from "react"
import * as Spectacle from "spectacle"
import preloader from "spectacle/lib/utils/preloader"
for (let key in Spectacle) { global[key] = Spectacle[key] }

const images = {
}

preloader(images)

import { theme, colors } from "./style.js"

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={[]} transitionDuration={0} progress="none" theme={theme} controls={false}>
        <Slide transition={["zoom"]} bgColor={colors.bg('title')}>
          <Heading size={1} fit caps lineHeight={1} textColor={colors.PRIMARY_TEXT}>
            Open JSON API
          </Heading>
          <Text margin="10px 0 0" textColor={colors.SUBTLE_TEXT} size={1} fit bold>
            open the presentation/index.js file to get started
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor={colors.bg('typog')}>
          <Heading size={6} textColor={colors.BRAND_TEXT} caps>Typography</Heading>
          <Heading size={1} textColor={colors.PRIMARY_TEXT}>Heading 1</Heading>
          <Heading size={2} textColor={colors.PRIMARY_TEXT}>Heading 2</Heading>
          <Heading size={3} textColor={colors.PRIMARY_TEXT}>Heading 3</Heading>
          <Heading size={4} textColor={colors.PRIMARY_TEXT}>Heading 4</Heading>
          <Heading size={5} textColor={colors.PRIMARY_TEXT}>Heading 5</Heading>
          <Text size={6} textColor={colors.PRIMARY_TEXT}>Standard text</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor={colors.bg('list')} textColor={colors.PRIMARY_TEXT}>
          <Heading size={6} textColor={colors.BRAND_TEXT} caps>Standard List</Heading>
          <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor={colors.bg('closing')} textColor={colors.PRIMARY_TEXT}>
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
