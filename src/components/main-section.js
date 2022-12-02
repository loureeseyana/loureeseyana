import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin, faPinterest, faGithub } from '@fortawesome/free-brands-svg-icons';

export default class MainSection extends Component {
  render() {
    return (

        <section id="hero_section" className="top_cont_outer">
  <div className="hero_wrapper">
    <div className="container">
      <div className="hero_section">
        <div className="row">
          <div className="col-md-6">
            <div className="top_left_cont intro zoomIn wow animated">
              <h2>
                I’m Ariel
                <br /> <strong>Software Engineer Extraordinare</strong>
              </h2>
              <p>
                I am a true full stack developer. I love React, Node.js and Typescript. Also willing to learn more.
                In addition, I'm a boy and dog mom. I love being outdoors. I love all things new age spirituality.
                Enthusiastic about making magic in every aspect of my life. Come on my journey with me.{" "}
              </p>
              <div className="underline" />
              <ul className="social_links">
                <li
                  className="linkedin animated bounceIn wow delay-02s animated"
                  style={{ visibility: "visible", animationName: "bounceIn" }}
                >
                  <a href="https://www.linkedin.com/in/arieldwells">
                  <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </li>
                <li
                  className="github animated bounceIn wow delay-03s animated"
                  style={{ visibility: "visible", animationName: "bounceIn" }}
                >
                  <a href="https://www.github.com/loureeseyana">
                  <FontAwesomeIcon icon={faGithub} />
                  </a>
                </li>
                <li
                  className="pinterest animated bounceIn wow delay-04s animated"
                  style={{ visibility: "visible", animationName: "bounceIn" }}
                >
                  <a href="https://www.pinterest.com/loureeseyana">
                  <FontAwesomeIcon icon={faPinterest} />
                  </a>
                </li>
                <li
                  className="instagram animated bounceIn wow delay-05s animated"
                  style={{ visibility: "visible", animationName: "bounceIn" }}
                >
                  <a href="https://www.instagram.com/loureeseyana">
                  <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6">
            <img alt="" src="img/profile-pic.jpg" />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    )
    }
};
