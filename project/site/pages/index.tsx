import React from "react"
import { Page } from "../components"
import {
  Content,
  Text,
  Wireframe,
  spaceVariables,
  dimensionVariables,
} from "fraction"

const style = {
  background: "#05f",
  color: "#fff",
  paddingTop: dimensionVariables.navigationBarHeight,
  paddingBottom: spaceVariables[5],
}

export default () => {
  return (
    <Page>
      <Content style={style} size="small">
        Small
      </Content>
      <Content style={style}>Default</Content>
      <Content style={style} size="large">
        Large
      </Content>
      <Content style={style} size="larger">
        Larger
      </Content>
      <Content style={style} size="larger">
        <Content style={{ ...style, background: "#07f" }} size="large">
          <Content style={{ ...style, background: "#09f" }}>
            <Content style={{ ...style, background: "#0af" }} size="small">
              Stacked
            </Content>
          </Content>
        </Content>
      </Content>
      <Content size="small">
        <Text size="smallest">
          How did we bring a Mac-only prototyping tool to the Web? Here’s a
          little secret: we had a head start. Because Framer X went all-in on
          React, we were already using Web technologies for the main
          architecture of the product. Our component system was based on good
          old NPM packages, built by a local Node server wrangling
          dependencies—many days are Pirate Days in Framer engineering, with
          someone cursing “yarrrrn”.
        </Text>
        <Text size="smaller">
          How did we bring a Mac-only prototyping tool to the Web? Here’s a
          little secret: we had a head start. Because Framer X went all-in on
          React, we were already using Web technologies for the main
          architecture of the product. Our component system was based on good
          old NPM packages, built by a local Node server wrangling
          dependencies—many days are Pirate Days in Framer engineering, with
          someone cursing “yarrrrn”.
        </Text>
        <Text size="small">
          How did we bring a Mac-only prototyping tool to the Web? Here’s a
          little secret: we had a head start. Because Framer X went all-in on
          React, we were already using Web technologies for the main
          architecture of the product. Our component system was based on good
          old NPM packages, built by a local Node server wrangling
          dependencies—many days are Pirate Days in Framer engineering, with
          someone cursing “yarrrrn”.
        </Text>
        <Text>
          How did we bring a Mac-only prototyping tool to the Web? Here’s a
          little secret: we had a head start. Because Framer X went all-in on
          React, we were already using Web technologies for the main
          architecture of the product. Our component system was based on good
          old NPM packages, built by a local Node server wrangling
          dependencies—many days are Pirate Days in Framer engineering, with
          someone cursing “yarrrrn”.
        </Text>
        <Text size="large">
          How did we bring a Mac-only prototyping tool to the Web? Here’s a
          little secret: we had a head start. Because Framer X went all-in on
          React, we were already using Web technologies for the main
          architecture of the product. Our component system was based on good
          old NPM packages, built by a local Node server wrangling
          dependencies—many days are Pirate Days in Framer engineering, with
          someone cursing “yarrrrn”.
        </Text>
        <Text size="larger">
          How did we bring a Mac-only prototyping tool to the Web? Here’s a
          little secret: we had a head start. Because Framer X went all-in on
          React, we were already using Web technologies for the main
          architecture of the product. Our component system was based on good
          old NPM packages, built by a local Node server wrangling
          dependencies—many days are Pirate Days in Framer engineering, with
          someone cursing “yarrrrn”.
        </Text>
        <Text size="largest">
          How did we bring a Mac-only prototyping tool to the Web? Here’s a
          little secret: we had a head start. Because Framer X went all-in on
          React, we were already using Web technologies for the main
          architecture of the product. Our component system was based on good
          old NPM packages, built by a local Node server wrangling
          dependencies—many days are Pirate Days in Framer engineering, with
          someone cursing “yarrrrn”.
        </Text>
      </Content>
      <Wireframe />
    </Page>
  )
}
