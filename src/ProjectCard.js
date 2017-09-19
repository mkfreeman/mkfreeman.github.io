import React, {Component} from 'react';
import {Card, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

// Card for learning resources
class ProjectCard extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        console.log('props title ', this.props.data)
        return (
            <div className="cardWrapper">
                <div className="cardImage">
                    <a target="_blank" href={this.props.data.url}>
                        <CardMedia className="cardMedia">
                            <img src={this.props.data.img} alt=""/>
                        </CardMedia>
                    </a>
                </div>
                <div className="cardDescription">
                    <h2>{this.props.data.title}</h2>
                    <p>{this.props.data.description}</p>
                </div>
            </div>
        )
    }
}
export default ProjectCard