import React, {Component} from 'react';
import logo from './logo.svg';
import Resources from './Resources';
import Projects from './Projects';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h1>Michael Freeman</h1>
                    <h2>Lecturer // Information School // University of Washington</h2>
                    <h2>Visualization. Data Science. Web Development.</h2>
                </div>
                <h1 className="section-title">Learning Resources</h1>
                <p className="section-description">I develop open-source learning resources to
                    improve access to and understanding of programming languages.</p>
                <Resources/>
                <h1 className="section-title">Selected Projects</h1>
                <p className="section-description">I've worked on a variety of large-scale
                    visualization and data science projects. Here are some of the thigns I've built.</p>
                <Projects/>
            </div>
        );
    }
}

export default App;
