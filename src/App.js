import React, {Component} from 'react';
import logo from './logo.svg';
import Resources from './Resources';
import Projects from './Projects';
import About from './About';
import './App.css';
var Isvg = require('react-inlinesvg');
var ReactGA = require('react-ga');

function logPageView() {
    ReactGA.set({
        page: window.location.pathname + window.location.search
    });
    ReactGA.pageview(window.location.pathname + window.location.search);
}

class App extends Component {
    componentDidMount() {
        ReactGA.initialize('UA-49431863-1');
        logPageView();
    }
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h1>Michael Freeman</h1>
                    <h2>Lecturer at&nbsp;
                        <a href="https://ischool.uw.edu" target="_blank">UW iSchool</a>
                    </h2>
                    <h2>Visualization. Data Science. Web Development.</h2>
                    <h3>
                        <span>
                            <a href="#resources">resources</a>
                        </span>
                    </h3>
                    <h3>
                        <span>
                            <a href="#projects">projects</a>
                        </span>
                    </h3>
                    <h3>
                        <span>
                            <a href="#about">about</a>
                        </span>
                    </h3>
                    <Isvg className="burst" src="imgs/sunburst.svg"/>
                </div>
                <section id="resources">
                    <h1 className="section-title">Learning Resources</h1>
                    <p className="section-description">I develop open-source learning resources to
                        improve access to and understanding of programming languages.</p>
                    <Resources/>
                </section>
                <section className="projects" id="projects">
                    <h1 className="section-title">Selected Projects</h1>
                    <p className="section-description">I've worked on a variety of large-scale
                        visualization and data science projects. Here are some of the things I've built.</p>
                    <Projects/>
                </section>
                <section className="about" id="about">
                    <h1 className="section-title">About</h1>
                    <p className="section-description">A (very) little bit about me.</p>
                    <About/>
                </section>
            </div>
        );
    }
}

export default App;
