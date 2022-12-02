import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faDiagramProject, faNetworkWired, faUsersRays } from '@fortawesome/free-solid-svg-icons'

export default class Services extends Component {
    render() {
        return (
            <section id="service">
  <div className="container">
    <h2>Skills</h2>
    <h6>
      Lorem ipsum dolor sit amet, consectetur Morbi sagittis, sem quisci ipsum
    </h6>
    <div className="service_wrapper">
      <div className="row">
        <div className="col-md-3">
          <div className="service_icon delay-03s animated wow  zoomIn">
            {" "}
            <span>
              <FontAwesomeIcon icon={faCode} />
            </span>{" "}
          </div>
          <div className="service_block">
            <h3 className="animated fadeInUp wow">Development</h3>
            <p className="animated fadeInDown wow">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.{" "}
            </p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="service_icon icon2  delay-03s animated wow zoomIn">
            {" "}
            <span>
              <FontAwesomeIcon icon={faUsersRays} />
            </span>{" "}
          </div>
          <div className="service_block">
            <h3 className="animated fadeInUp wow">Mentorship</h3>
            <p className="animated fadeInDown wow">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="service_icon icon3  delay-03s animated wow zoomIn">
            {" "}
            <span>
            <FontAwesomeIcon icon={faDiagramProject} />
            </span>{" "}
          </div>
          <div className="service_block">
            <h3 className="animated fadeInUp wow">Project Management</h3>
            <p className="animated fadeInDown wow">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="service_icon icon3  delay-03s animated wow zoomIn">
            {" "}
            <span>
            <FontAwesomeIcon icon={faNetworkWired} />
            </span>{" "}
          </div>
          <div className="service_block">
            <h3 className="animated fadeInUp wow">I.T.</h3>
            <p className="animated fadeInDown wow">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

        )
    }
};