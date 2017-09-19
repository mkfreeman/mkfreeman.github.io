import React, {Component} from 'react';
import {Card, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

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
                        <CardMedia
                            className="cardMedia"
                            overlay={< CardTitle title = {
                            this.props.data.title
                        } />}>
                            <img src={this.props.data.img} alt=""/>
                        </CardMedia>
                    </a>
                    <CardText>
                        {this.props.data.description}
                    </CardText>
                </Card>
            </div>
        )
    }
}

export default ResourceCard;