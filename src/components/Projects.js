import React from 'react';
import Observer from '@researchgate/react-intersection-observer';

class Projects extends React.Component {
    state = {
        visibility: 'hidden',
    };

    handleChange = (event) => {
        this.setState({
            visibility: event.isIntersecting ? 'visible' : 'invisible',
        });
    };

    render = () => {
        return (
            <>
                <section id="projects">
                    <div id="project-title">
                        <h2>Projects</h2>
                    </div>
                    <div id="card_section">
                        <Observer onChange={this.handleChange}>
                            <a className={`card card-a ${this.state.visibility}`} href="https://github.com/Leweyse/praten" rel="noopener noreferrer" target="_blank">
                                <div className="card-content">
                                    <h2 className="card-title">Praten</h2>
                                    <p className="card-body">"Praten" is a Dutch language study tool that adapts to any personality. This web application is still under development. (React JS, SCSS, Express)</p>
                                </div>
                            </a>
                        </Observer>
                        <Observer onChange={this.handleChange}>
                            <a className={`card card-b ${this.state.visibility}`} href="https://codepen.io/Leweyse/full/bGgoqmJ" rel="noopener noreferrer" target="_blank">
                                <div className="card-content">
                                    <h2 className="card-title">Documentation</h2>
                                    <p className="card-body">Responsive web project from FreeCodeCamp to get Responsive Web Design certification. (HTML5 & CSS3)</p>
                                </div>
                            </a>
                        </Observer>
                        <Observer onChange={this.handleChange}>
                            <a className={`card card-c ${this.state.visibility}`} href="https://codepen.io/Leweyse/full/oNBZVYw" rel="noopener noreferrer" target="_blank">
                                <div className="card-content">
                                    <h2 className="card-title">Tribute Page</h2>
                                    <p className="card-body">Responsive web project from FreeCodeCamp to get Responsive Web Design certification. (HTML5, CSS3 & JavaScript)</p>
                                </div>
                            </a>
                        </Observer>
                    </div>
                </section>
            </>
        )
    }
}

export default Projects;