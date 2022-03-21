import React, { Component } from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import './Projects.css';
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
                console.log("projects", data)
                this.setState({
                    data: data
                });
            }.bind(this))
    }
    render() {
        const styles = {
            root: {
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-around'
            },
            gridList: {
                width: '100%',
                overflowY: 'auto'
            }
        };
        return (
            <div className="Projects">
                <MuiThemeProvider>
                    <GridList cols={3} cellHeight={200} padding={1} style={styles.gridList}>
                        {this
                            .state
                            .data
                            .map((tile) => (
                                <GridTile className="grid-tile" subtitleStyle={{ position: 'absolute', 'white-space': 'unset', 'margin-top': '9px' }} key={tile.img} title={< a style={{ color: 'white', 'fontSize': '1.5em', 'text-decoration': 'none' }} href={tile.url} target="_blank">
                                    {tile.title} </a>} subtitle={tile.description} actionPosition="left"
                                    titlePosition="top" titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)" cols={window.innerWidth < 600
                                        ? 3
                                        : tile.cols} rows={tile.rows}>
                                    <img src={tile.img} alt={tile.alt} />
                                </GridTile>
                            ))}
                    </GridList>
                </MuiThemeProvider>
            </div>
        )
    }
}
export default Projects;