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
import "./Projects.css";
import PHS from "../../static/img/phs.png";
import TBA from "../../static/img/tba.png";
import PWS from "../../static/img/pws.png";
import TSA from "../../static/img/tsa.png";
import NASA from "../../static/img/projects/nasa_hp.png";

// Websites to look at for tech stack
// http://cihadturhan.com/
// http://robin-noguier.com/
// http://www.guillaumejuvenet.com/
const Projects = () => {
  return (
    <div>
      <Segment
        style={{ padding: "8em 0em", textAlign: "center" }}
        vertical
        inverted
      >
        <div
          style={{ minHeight: 700, padding: "1em 0em", textAlign: "center" }}
        >
          <Container>
            <Divider
              as="h2"
              className="header"
              horizontal
              inverted
              style={{ margin: "3em 0em", textTransform: "uppercase" }}
            >
              Front End Projects
            </Divider>

            <Segment inverted style={{ padding: "0em" }} vertical>
              <Grid celled="internally" columns="equal" stackable>
                <Grid.Row textAlign="center">
                  <Grid.Column
                    style={{ paddingBottom: "5em", paddingTop: "5em" }}
                  >
                    <Header inverted as="h3" style={{ fontSize: "2em" }}>
                      Re-vents
                    </Header>
                    <Image
                      href="https://kp-revent.herokuapp.com/"
                      centered
                      size="large"
                      className="imageStyling"
                      src={TBA}
                    />
                    <p style={{ fontSize: "1.33em" }} className="height">
                      This is an Event Management application and it has capabilities
                      similar to Facebook with ReactJS, Redux, SementicUI, 
                      and Firebase.
                    </p>
                    <Button.Group size="huge">
                      <Button
                        as="a"
                        icon="home"
                        content="Visit Website"
                        positive
                        href="https://kp-revent.herokuapp.com/"
                        size="huge"
                      />
                      <Button.Or />
                      <Button
                        as="a"
                        icon="github"
                        content="Source Code"
                        primary
                        href="https://github.com/skprasadu/revents"
                        size="huge"
                      />
                    </Button.Group>
                  </Grid.Column>
                  <Grid.Column
                    style={{ paddingBottom: "5em", paddingTop: "5em" }}
                  >
                    <Header inverted as="h3" style={{ fontSize: "2em" }}>
                      Some Website
                    </Header>
                    <Image
                      href="http://google.com"
                      centered
                      size="large"
                      className="imageStyling"
                      src={PWS}
                    />
                    <p style={{ fontSize: "1.33em" }} className="height">
                      Coming soon
                    </p>
                    <Button.Group size="huge">
                      <Button
                        as="a"
                        icon="home"
                        content="Visit Website"
                        positive
                        href="http://google.com"
                        size="huge"
                      />
                      <Button.Or />
                      <Button
                        as="a"
                        icon="github"
                        content="Source Code"
                        primary
                        href="http://google.com"
                        size="huge"
                      />
                    </Button.Group>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Segment>
            <Segment inverted style={{ padding: "0em" }} vertical>
              <Grid celled="internally" columns="equal" stackable>
                <Grid.Row textAlign="center">
                  <Grid.Column
                    style={{ paddingBottom: "5em", paddingTop: "5em" }}
                  >
                    <Header inverted as="h3" style={{ fontSize: "2em" }}>
                      Some App
                    </Header>
                    <Image
                      href="http://google.com"
                      centered
                      size="large"
                      className="imageStyling"
                      src={TSA}
                    />

                    <p style={{ fontSize: "1.33em" }} className="padding">
                      Some app
                    </p>
                    <Button
                      as="a"
                      icon="github"
                      content="Source Code"
                      primary
                      href="http://google.com"
                      size="huge"
                    />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Segment>
            <Segment inverted style={{ padding: "0em" }} vertical>
              <Grid celled="internally" columns="equal" stackable>
                <Grid.Row textAlign="center">
                  <Grid.Column
                    style={{ paddingBottom: "5em", paddingTop: "5em" }}
                  >
                    <Header inverted as="h3" style={{ fontSize: "2em" }}>
                      Some App
                    </Header>
                    <Image
                      href="http://google.com"
                      centered
                      size="large"
                      className="imageStyling"
                      src={NASA}
                    />

                    <p style={{ fontSize: "1.33em" }} className="padding">
                      Some App
                    </p>
                    <Button.Group size="huge">
                      <Button
                        as="a"
                        icon="home"
                        content="Visit Website"
                        positive
                        href="http://google.com"
                        size="huge"
                      />
                      <Button.Or />
                      <Button
                        as="a"
                        icon="github"
                        content="Source Code"
                        primary
                        href="http://google.com"
                        size="huge"
                      />
                    </Button.Group>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Segment>
          </Container>
        </div>
      </Segment>
      <Segment style={{ padding: "8em 0em" }} vertical>
        <Container>
          <Divider
            as="h2"
            className="header"
            horizontal
            style={{ margin: "3em 0em", textTransform: "uppercase" }}
          >
            Back End Projects
          </Divider>

          <Segment style={{ padding: "0em" }} vertical>
            <Grid celled="internally" columns="equal" stackable>
              <Grid.Row textAlign="center">
                <Grid.Column
                  style={{ paddingBottom: "5em", paddingTop: "5em" }}
                >
                  <Header as="h3" style={{ fontSize: "2em" }}>
                    Some Api
                  </Header>
                  <p style={{ fontSize: "1.33em" }} className="height">
                    Some Api
                  </p>
                  <Button.Group size="huge">
                    <Button
                      as="a"
                      icon="github"
                      content="Source Code"
                      primary
                      href="http://google.com"
                      size="huge"
                    />
                  </Button.Group>
                </Grid.Column>
                <Grid.Column
                  style={{ paddingBottom: "5em", paddingTop: "5em" }}
                >
                  <Header as="h3" style={{ fontSize: "2em" }}>
                    Some App
                  </Header>
                  <p style={{ fontSize: "1.33em" }} className="height">
                    Some App
                  </p>
                  <Button.Group size="huge">
                    <Button
                      as="a"
                      icon="github"
                      content="Source Code"
                      primary
                      href="http://google.com"
                      size="huge"
                    />
                  </Button.Group>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
        </Container>
      </Segment>
    </div>
  );
};

export default Projects;
