import React, {Component} from 'react';
import logo from './logo.svg';
import Resources from './Resources';
import Projects from './Projects';
import About from './About';
import './App.css';
var Isvg = require('react-inlinesvg');

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h1>Michael Freeman</h1>
                    <h2>Lecturer | UW iSchool</h2>
                    <h2>Visualization. Data Science. Web Development.</h2>
                    <Isvg className="burst" src="imgs/sunburst.svg"/>
                </div>
                <section>
                    <h1 className="section-title">Learning Resources</h1>
                    <p className="section-description">I develop open-source learning resources to
                        improve access to and understanding of programming languages.</p>
                    <Resources/>
                </section>
                <section className="projects">
                    <h1 className="section-title">Selected Projects</h1>
                    <p className="section-description">I've worked on a variety of large-scale
                        visualization and data science projects. Here are some of the things I've built.</p>
                    <Projects/>
                </section>
                <section className="about">
                    <h1 className="section-title">About</h1>
                    <p className="section-description">Hello! I'm Mike.</p>
                    <About/>
                </section>
            </div>
        );
    }
}

export default App;
