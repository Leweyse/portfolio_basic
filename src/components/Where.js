import React from 'react';

class Where extends React.Component {
    render = () => {
        return (
            <>
                <section id="where">
                <div className="where-container">
                    <div id="where-title">
                        <h2>I'm here</h2>
                    </div>
                    <div className="where-contain">
                        <a className="profile-link" href="https://github.com/Leweyse/habla" rel="noopener noreferrer" target="_blank">Github</a>
                        <a className="profile-link" href="https://www.freecodecamp.org/leweyse" rel="noopener noreferrer" target="_blank">FreeCodeCamp</a>
                        <a className="profile-link" href="https://www.codewars.com/users/Leweyse" rel="noopener noreferrer" target="_blank">Codewars</a>
                        <a className="profile-link" href="https://codepen.io/Leweyse" rel="noopener noreferrer" target="_blank">CodePen</a>
                        <a className="profile-link mail" href="mailto:darylcastro67@gmail.com">Email</a>
                    </div>
                    <div id="footer">
                        <p className="right">
                          Created by
                          <a id="profile-link" href="https://github.com/Leweyse/portfolio" rel="noopener noreferrer" target="_blank">
                              <i className="">Daryl Castro</i>
                          </a>
                        </p>
                    </div>
                </div>
            </section>
            </>
        )
    }
}

export default Where;