import React, { Component } from 'react';
import './Resources.css';
import ResourceCard from './ResourceCard';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as d3 from 'd3';

// Learning Resources
class Resources extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    componentWillMount() {
        d3.csv('./data/resources.csv', function (error, data) {
            console.log("resources", data)
            this.setState({ data: data });
        }.bind(this))
    }
    render() {
        return (
            <div className="Resources">
                <MuiThemeProvider>
                    <div className="cards">
                        {this
                            .state
                            .data
                            .map(function (d, i) {
                                return <ResourceCard key={i} data={d} />
                            })}
                    </div>
                </MuiThemeProvider>
            </div>
        )
    }
}
export default Resources