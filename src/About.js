import React, {Component} from 'react';
import './About.css';
import {CardMedia} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as d3 from 'd3';

// Learning Resources
class About extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="About">
                <MuiThemeProvider>

                    <div className="cardImage">
                        <CardMedia className="cardMedia">
                            <img src='./imgs/freeman_photo.png' alt="portrait photo"/>
                        </CardMedia>
                    </div>
                </MuiThemeProvider>
            </div>
        )
    }
}
export default About;