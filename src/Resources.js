import React, { Component } from 'react';
import './Resources.css';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as d3 from 'd3';

// Card for learning resources
class ResourceCard extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        console.log('props title ', this.props.data)
        return (            
            <div className="cardWrapper">
                <Card>
                    <a target="_blank" href={this.props.data.url}>
                    <CardMedia className="cardMedia"
                    overlay={<CardTitle title={this.props.data.title}/>}
                    >
                    <img src={this.props.data.img} alt="" />
                    </CardMedia></a>
                    <CardText>
                    {this.props.data.description}
                    </CardText>            
                </Card>
            </div>
        )
    }
}
// Learning Resources
class Resources extends Component {
    constructor(props) {
        super(props);
        console.log('test')
        this.state = {data:[]}        
    }
    componentWillMount() {
        console.log('will mount')
        d3.csv('./data/resources.csv', function(error, data){
            console.log("data", data, "error", error)
            this.setState({data:data});
        }.bind(this))
    }
    render() {
        let a = {title:'test'}
        return (
        
        <div className="Resources">
            <h1>Learning Resources</h1>
            <p>I develop open-source learning resources to improve access to and understanding of programming languages.</p>
            <MuiThemeProvider>
                <div className="cards">
                {this.state.data.map(function(d, i){
                    return <ResourceCard key={i} data={d}/>
                })}    
                </div>
            </MuiThemeProvider>
        </div>
        )
    }
}
export default Resources