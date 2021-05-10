import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="./../public/img/profile.jpg"
              alt="avatar"
              className="avatar-img"
            />

            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>

              <hr />

              <p>
                HTML/CSS | Bootstrap | JavaScript | NodeJS | ExpressJS | MySQL |
                MongoDB | React
              </p>

              <div className="social-links">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/wandagleason411"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>

                {/* Github */}
                <a
                  href="https://github.com/wmgleason"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>

                {/* Twitter */}
                <a
                  href="https://twitter.com/intent/follow?ref_src=twsrc%5Etfw&screen_name=WandaMaGle&tw_p=followbutton"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-twitter-square" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
