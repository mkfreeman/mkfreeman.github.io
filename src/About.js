import React, {Component} from 'react';
import './About.css';
import {CardMedia} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as d3 from 'd3';
import './About.css';

// Learning Resources
class About extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="About">
                <MuiThemeProvider>
                    <div className="about-wrapper">
                        <p>Hi, I'm Mike. I'm a faculty member at the University of Washington's
                            Information School. I have a background in Sociology and Health Measurement, and
                            currently teach courses that range from Web Development to Data Visualization.
                            I'm interested in socially impactful applications of these skills, and am still
                            figuring out what that means. For now, find me on twitter (<a href="https://twitter.com/mf_viz" target="_blank">@mf_viz</a>), or shoot me an
                            <a href="mailto:michael.k.freeman@gmail.com">email</a>.</p>
                        <div className="cardImage">
                            <CardMedia className="cardMedia">
                                <img src='./imgs/freeman_photo.png' alt="portrait photo"/>
                            </CardMedia>
                        </div>
                    </div>
                </MuiThemeProvider>
            </div>
        )
    }
}
export default About;