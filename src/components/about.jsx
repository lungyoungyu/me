import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-12">
                <div
                  className="row row-bottom-padded-sm animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div className="col-md-12">
                    <div className="about-desc">
                      <span className="heading-meta">About Me</span>
                      <h2 className="colorlib-heading">Who Am I?</h2>
                      <p>
                        I am a senior undergraduate at the University of
                        Southern California studying Computer Science and
                        Business Administration. I love exploring and working
                        with new technologies. My dream is to use technology and
                        its limitless potential to help make the world a better
                        place. In my free time, I enjoy playing basketball and
                        golf. I am a huge fan of NBA basketball, and my favorite
                        team is the Golden State Warriors. I am an amateur
                        foodie and love meeting new people.
                      </p>
                      <p>
                        <b>Programming Languages:</b> Python, JavaScript, HTML,
                        CSS, SQL, Java, C++, Swift
                      </p>
                      <p>
                        <b>Technologies:</b> React, Bootstrap, Xcode, Git,
                        MySQL, Microsoft Excel
                      </p>
                      <p>
                        <b>Concepts:</b> Data Structures, Algorithms,
                        Object-Oriented Programming / Object-Oriented Design,
                        Databases, Artificial Intelligence
                      </p>
                      <p>
                        <b>Personal Qualities:</b> Leadership, Initiative,
                        Resourcefulness, Grit
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="colorlib-about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">What have I built?</span>
                <h2 className="colorlib-heading">Cool Projects.</h2>
              </div>
            </div>
            <div className="row row-pt-md">
              <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                  <span className="icon">
                    <i className="icon-bulb" />
                  </span>
                  <div className="desc">
                    <h3>
                      <a href="https://github.com/lungyoungyu/pathfinding-visualizer">
                        Pathfinding Visualizer
                      </a>
                    </h3>
                    <p>Pathfinding Algorithms visualized.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                  <span className="icon">
                    <i className="icon-phone3" />
                  </span>
                  <div className="desc">
                    <h3>
                      <a href="https://github.com/lungyoungyu/dream-team">
                        Dream Team
                      </a>
                    </h3>
                    <p>Build your "Dream Team" of NBA players.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                  <span className="icon">
                    <i className="icon-data" />
                  </span>
                  <div className="desc">
                    <h3>
                      <a href="https://github.com/lungyoungyu/RPL_EmojiBot">
                        USC RPL Discord Bots
                      </a>
                    </h3>
                    <p>Rockets. Discord Bots. Emoji Data Analytics.</p>
                  </div>
                </div>
              </div>

              <div className="col-md-4 text-center animate-box">
                <div className="services color-2">
                  <span className="icon">
                    <i className="icon-data" />
                  </span>
                  <div className="desc">
                    <h3>
                      <a href="https://github.com/lungyoungyu/CoCa-Word-Cloud">
                        Corpus Callosum Word Cloud
                      </a>
                    </h3>
                    <p>Personalized Word Cloud.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-4">
                  <span className="icon">
                    <i className="icon-layers2" />
                  </span>
                  <div className="desc">
                    <h3>
                      <a href="https://github.com/lungyoungyu/MySmartUSCApp">
                        MySmartUSC
                      </a>
                    </h3>
                    <p>Android Mobile App. Customize your emails.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-6">
                  <span className="icon">
                    <i className="icon-phone3" />
                  </span>
                  <div className="desc">
                    <h3>
                      <a href="https://apps.apple.com/us/app/leamz/id1446238459">
                        Leamz
                      </a>
                    </h3>
                    <p>iOS Mobile App. Size Free Shopping.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}