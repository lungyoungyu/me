import React, { Component } from "react";

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">Timeline</span>
                <h2 className="colorlib-heading animate-box">
                  Work Experience.
                </h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Summer Internship at Ernst & Young LLP{" "}
                          <span>June 2019 - August 2019</span>
                        </h2>
                        <p>
                          As a full stack developer intern for the FSO
                          (Financial Services Office) - Tax, Technology, and
                          Transformation team, I designed and developed custom,
                          client-serving tax applications, including tax process
                          and packaging automation with Microsoft Excel, Visual
                          Basic for Applications (VBA), and SQL. I also
                          collaborated on and built a PE/RE (Private Equity/Real
                          Estate) application tracking client financial data
                          using C#, Postman, and .NET framework.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInTop"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Summer Internship at Seagate Technology{" "}
                          <span>May 2018 - August 2018</span>
                        </h2>
                        <p>
                          As a software engineering intern for the IT Sales and
                          Web Development team, I designed and developed Google
                          App Maker application tools in the Google Cloud
                          Platform to perform data analysis of Salesforce.com
                          customer retention data using Google Apps Script,
                          Alteryx, Apache Solr, and RESTful APIs. I also built
                          data integrations for customer and product information
                          from Informatica to SFDC (Salesforce.com) using Dell
                          Boomi.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Summer Internship at Integrated Device Technology{" "}
                          <span>June 2017 - August 2017</span>
                        </h2>
                        <p>
                          As an intern for the Operations - Supply Chain and
                          Procurement team, I collaborated closely with team
                          members to plan, design, and develop user interfaces
                          for new product cost models in a LAMP environment to
                          expedite prototype engineers' process of creating new
                          product builds. I also worked extensively with
                          import/export analysts on Excel and SAP software to
                          organize products and ensure shipping operations
                          comply with C-TPAT trade requirements.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-6">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Education <span>August 2015 - May 2020</span>
                        </h2>
                        <p>
                          I am completing my Bachelors of Science in Computer
                          Science and Business Administration at the University
                          of Southern California's Viterbi School of Engineering
                          and Marshall School of Business, graduating May 2020.
                          During my time at school, I've developed a strong
                          background in CS and business, giving me a unique set
                          of both technical and soft skills. I have a strong
                          understanding of data structures and algorithms, as
                          well as skills in teamwork, verbal and written
                          communication, and leadership.
                        </p>
                        <p>
                          <b>Extracurricular Involvement:</b> Software Developer
                          at USC RPL (Rocket Propulsion Lab), Project Lead at
                          USC Corpus Callosum, Python Instructor at USC
                          Joint-Educational Project, Volunteer English Writing
                          Instructor at USC TASSEL ("Teaching and Sharing Skills
                          to Enrich Lives" - teach rural Cambodia middle school
                          students), Member of 3D4E, Member of Association of
                          Computing Machinery
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry begin animate-box"
                    data-animate-effect="fadeInBottom"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none"></div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
