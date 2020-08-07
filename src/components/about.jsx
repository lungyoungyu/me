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
                        I am currently at the University of Southern California
                        completing my M.S. in Computer Science, graduating May
                        2021. I recently graduated with a B.S. in Computer
                        Science from USC in May 2020. I love finding new and
                        creative ways to solve problems and will use this
                        passion to develop in the technology industry. My dream
                        is to use technology and its limitless potential to help
                        improve people's lives. I am currently seeking Fall 2020
                        / Spring 2021 internship and 2021 full-time
                        opportunities in software engineering.
                      </p>
                      <p>
                        I am originally from the San Francisco Bay Area. I enjoy
                        playing basketball, golf, guitar, and clarinet. I am a
                        huge fan of NBA basketball, and my favorite team is the
                        Golden State Warriors. I am a big foodie and love
                        meeting new people!
                      </p>
                      <p>
                        <b>Programming Languages:</b> Python, Java, Swift,
                        JavaScript, HTML/CSS, SQL, C++, PHP
                      </p>
                      <p>
                        <b>Technologies:</b> iOS, Xcode, Firebase, Git, MySQL,
                        React, Microsoft Excel
                      </p>
                      <p>
                        <b>Concepts:</b> Data Structures and Algorithms,
                        Object-Oriented Programming and Object-Oriented Design,
                        Databases, Artificial Intelligence and Machine Learning
                      </p>
                      <p>
                        <b>Personal Qualities:</b> Leadership, Initiative,
                        Resourcefulness, Grit, Master Google Searcher
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
                      <a href="https://apps.apple.com/us/app/id1525268625">
                        Munchies
                      </a>
                    </h3>
                    <p>iOS Mobile USC Trader Joe's Grocery Delivery.</p>
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
                      <a href="https://youtu.be/TVokTcMrlbA">Flashcards</a>
                    </h3>
                    <p>iOS Mobile Quizlet-like Flashcards App.</p>
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
                      <a href="https://youtu.be/zaW3Z3AHX7U">
                        Pathfinding Visualizer
                      </a>
                    </h3>
                    <p>
                      <a href="https://github.com/lungyoungyu/pathfinding-visualizer">
                        Pathfinding Algorithms visualized.
                      </a>
                    </p>
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
