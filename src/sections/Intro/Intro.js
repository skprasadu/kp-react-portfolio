import React from "react";
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Visibility
} from "semantic-ui-react";
import "./Intro.css";
import PHS from "../../static/img/phs.png";
// Websites to look at for tech stack
// http://cihadturhan.com/
// http://robin-noguier.com/
// http://www.guillaumejuvenet.com/
const Intro = () => {
  return (
    <Segment style={{ padding: "8em 0em" }} vertical>
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              Why Software Development?
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              I am a Software Developer from over 27yrs. I have worked starting from C++ days and from past 
              15 yrs I have worked in Java. Of late I have stated working in Spring Boot, JavaScript 
              frameworks like ReactJS, Angular, Firebase, I have also started working on React Native 
              and other mobile development platform. 
            </p>
            <p style={{ fontSize: "1.33em" }}>
              I am consulting for large companies like Boeing, T Mobile, BNSF Railway Company and others.
            </p>
          </Grid.Column>
          <Grid.Column floated="right" width={6}>
            <Image bordered size="large" src={PHS} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
};

export default Intro;
