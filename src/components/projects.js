import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton,
} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          {/* Art Stack */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fffff0",
                height: "176px",
                background: "url(./public/img/sitebg.jp) center / cover",
              }}
            >
              Art Stack
            </CardTitle>
            <CardText>
              Art Stack provides an online gallery of artwork by community
              artists. It offers the opportunity for local artists to show their
              work despite pandemic-related closures, and offers the public the
              chance to see the extraordinary works of art being produced in our
              community with their safety and convenience in mind.
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fffff0" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fffff0",
                height: "176px",
                background: "url(./public/img/sitebg3.jp) center / cover",
              }}
            >
              Team Profile Generator
            </CardTitle>
            <CardText>
              The Team Profile Generator is a command-line-input application run
              in Node. The user is prompted to input information about members
              of an engineering team. The application takes this data and
              generates an HTML file displaying that information as a profile of
              the group for the user.
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fffff0" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* E-Commerce BackEnd */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fffff0",
                height: "176px",
                background: "url(./public/img/sitebg.jp) center / cover",
              }}
            >
              E-Commerce Back End
            </CardTitle>
            <CardText>
              The E-Commerce Back End project is an ExpressJS scalable
              e-commerce application that serves APIs for a product catalog. In
              addition to the Express.js API, this app makes use of Sequelize to
              interact with a MySQL database.
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fffff0" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div>
          <h1>This is</h1>
        </div>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <div>
          <h1>This is MongoDB</h1>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>React</Tab>
          <Tab>MongoDB</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
