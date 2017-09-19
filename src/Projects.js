import React, {Component} from 'react';
import './Projects.css';
import ProjectCard from './ProjectCard';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as d3 from 'd3';

// Learning Resources
class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    componentWillMount() {
        d3
            .csv('./data/projects.csv', function (error, data) {
                this.setState({data: data});
            }.bind(this))
    }
    render() {
        return (
            <div className="Projects">
                <MuiThemeProvider>
                    <div className="cards">
                        {this
                            .state
                            .data
                            .map(function (d, i) {
                                return <ProjectCard key={i} data={d}/>
                            })}
                    </div>
                </MuiThemeProvider>
            </div>
        )
    }
}
export default Projects;