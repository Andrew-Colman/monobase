import * as React from "react";

import Template from "components/Template";

import Grid from "components/examples/Grid";
import Timer from "components/examples/Timer";
import Mouse from "components/examples/Mouse";
import Button from "components/examples/Button";
import Styled from "components/examples/Styled";
import Colors from "components/examples/Colors";
import Cookie from "components/examples/Cookie";
import Visible from "components/examples/Visible";
import Unsplash from "components/examples/Unsplash";

export default function render() {
  return (
    <Template>
      <span style={{ textAlign: "center" }}>
        <section style={{ padding: "60px" }}>
          <h1>Welcome to Monobase</h1>
          <p>A simple React based static site generator</p>
        </section>
        <Example title="CSS Styled Component">
          <Styled />
        </Example>
        <Example title="Button">
          <Button />
        </Example>
        <Example title="Mouse Location">
          <Mouse />
        </Example>
        <Example title="Time">
          <Timer />
        </Example>
        <Example title="Enter a color name">
          <Colors />
        </Example>
        <Example title="Persistent Cookie">
          <Cookie />
        </Example>
        <Example title="Visible">
          <Visible inset={100}>
            I'm like a refrigerator light. Or Schrödinger's cat.
          </Visible>
        </Example>
        <Example title="Random Image Grid">
          <Grid
            width={600}
            height={300}
            columns={4}
            rows={4}
            gap={10}
            cell={props => (
              <Visible>
                <Unsplash {...props} />
              </Visible>
            )}
          />
        </Example>
      </span>
    </Template>
  );
}

function Example(props) {
  return (
    <section
      style={{
        textAlign: "center",
        padding: "80px 10px"
      }}
    >
      <h3
        style={{
          fontSize: 30,
          fontWeight: 700,
          margin: 0,
          paddingBottom: 40,
          lineHeight: 1
        }}
      >
        {props.title}
      </h3>
      <div style={{ textAlign: "center" }}>{props.children}</div>
    </section>
  );
}
