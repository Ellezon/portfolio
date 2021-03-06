import React from 'react';
import Intro from './intro';
import Menu from './menu';
import Contact from './contact';

import {UnityContent} from "react-unity-webgl";
import UnityGame from "./unityGame";

// TODO https://www.um.edu.mt/library/oar/handle/123456789/29525 and reports
class Portfolio extends React.Component {
  constructor(props) {
    super(props);

    this.driversDilemmaContent = new UnityContent(
      "/games/DriversDilemma/Build/DriversDilemma.json",
      "/games/DriversDilemma/Build/UnityLoader.js"
    );

    this.furballContent = new UnityContent(
      "/games/Furball/Build/Furball.json",
      "/games/Furball/Build/UnityLoader.js"
    );

    this.pacmanContent = new UnityContent(
      "/games/Pacman/Build/Pacman.json",
      "/games/Pacman/Build/UnityLoader.js"
    );;
  }
  render() {
    return (
      <React.Fragment>
        <Intro />
        <Menu />
        <div id="portfolio-wrapper">  
          <div className="container">  
            <div className="row">
            <div className="col-12">
              <h1 id="portfolio" className="section-title">Portfolio</h1>
              <h2>Bachelors Thesis (UoM)</h2>
              <h3>Convolutional Neural Networks and the Bag-of-Visual-Words Approach: A comparative analysis based on variation of training set size.</h3>
              <p>
                Image classification has a large variety of practical applications in computing, most notably
                medicinal, industrial and security. Despite their growing popularity, little research has been
                carried out on the comparison between two of the most common image classification algorithms:
                the Bag-of-Visual-Words approach (BoVW) and Convolutional Neural Networks (CNN), in terms of the size of the training set required.</p>
              <p>
                The tendency towards using the current top performing algorithm,
                without regard for its best uses, has led many to use CNNs despite other methods being
                possibly more suitable for the task at hand.
                This work aimed at implementing and studying the aforementioned alogrithms to determine their performance when presented with varied
                sized training sets. 
              </p>
              <p>
                From the results, one can conclude that using transfer learning on pre-trained CNNs
                is more suitable for large and complex data sets, while the BoVW approach performs best
                on simpler and smaller data sets.
              </p> 
              <p>
                <a className="btn btn-primary" target="_blank" rel="noopener noreferrer" href="https://www.um.edu.mt/library/oar/handle/123456789/29525">Thesis Paper</a>
              </p>
              <h2>Games</h2>
              <p>
                Feel free to browse some of the projects I've worked on! <br/>
                <b> Please note: These games were not optimised for web and thus might take a while to load! For best results open in a new tab.</b>
              </p>
                <UnityGame 
                  name = "Pacman"
                  about = "PC Version of Pacman 3D. Made using Unity game engine. Download executable folder to run on PC or APK file to run on Android. Mobile version requires google cardboard."
                  content = {this.pacmanContent}
                  imgUrl = 'pacmanSS.png'
                  hasAPK = {true}
                  link = "pacman"
                /> 
                <UnityGame 
                  name = "Driver's Dilemma"
                  about = "A web-based game developed as a platform for obtaining data by simulating the Trolley Dilemma. The aim was to determine whether the trolley dilemma would be successful in Autonomous cars based on the participants choices in various scenarios."
                  content = {this.driversDilemmaContent}
                  imgUrl = 'driversSS.png'
                  link = "drivers-dilemma"
                />
                <UnityGame 
                  name = "FurBall"
                  about = "The aim of this project was to create a fun and interactive game to help 10 – 12 year olds understand the basic concepts of programming with Prolog. Our game, Furball, was designed using Unity and is intended to teach recursion, backtracking and pattern matching. "
                  content = {this.furballContent}
                  imgUrl = 'furballSS.png'
                  hasEXE = {true}
                  link = "furball"
                />
              </div>
            </div>
            </div>
        </div>
        <Contact/>
        </React.Fragment>
        );
      }
    }
    
export default Portfolio;