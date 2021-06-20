import React from 'react';

class Welcome extends React.Component {
  constructor(props) {
    super(props);

    this.titleRef = React.createRef();

    this.state = {
      x: 30,
      y: 0
    }
  }

  _onMouseMove = (e) => {
    const width = this.titleRef.current.clientWidth;
    const height = this.titleRef.current.clientHeight;
    const oX = Math.floor((e.nativeEvent.offsetX / width) * 110);
    const oY = Math.floor((e.nativeEvent.offsetY / height) * 110);

    this.setState({
      x: oX,
      y: oY
    })
  }

  render = () => {
    const {x, y} = this.state;
    const maskStyle = {
      '--maskX': x,
      '--maskY': y
    }

    return (
        <>
            <section id="welcome-section">
                <div className="page">
                    <div className="titleContainer"
                        onMouseMove={this._onMouseMove}
                        ref={this.titleRef}
                        style={maskStyle}
                    >
                        <div className="titleWraper">
                            <h1>Welcome</h1>
                        </div>
                        <div className="titleWraper cloneWraper">
                            <h1>To My Portfolio.</h1>
                        </div>
                    </div>

                    <div className="punt">
                        <h1>.</h1>
                    </div>
                </div>
            </section>
        </>
    )
  }
}

export default Welcome;