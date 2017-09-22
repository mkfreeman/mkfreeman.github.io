import React, {Component} from 'react';
import {CardMedia} from 'material-ui/Card';

// Card for learning resources
class ProjectCard extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        console.log('props title ', this.props.data)
        return (
            <div>
                <h2
                    dangerouslySetInnerHTML={{
                    __html: this.props.data.title
                }}></h2>
                <div className="cardWrapper">

                    <div className="cardImage">
                        <a target="_blank" href={this.props.data.url}>
                            <CardMedia className="cardMedia">
                                <img src={this.props.data.img} alt=""/>
                            </CardMedia>
                        </a>
                    </div>

                    <div className="cardDescription">

                        <p
                            dangerouslySetInnerHTML={{
                            __html: this.props.data.description
                        }}></p>
                    </div>
                </div>
            </div>
        )
    }
}
export default ProjectCard