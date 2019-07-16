import React, { Component, Children } from 'react';

class Emoji extends Component {
  state = {
    total: 0,
    current: 0,

  }

  componentDidMount() {
    const { children } = this.props;
    this.setState({ total: Children.count(children) });
    this.interval = setInterval(this.showNext, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  showNext = () => {
    const { total, current } = this.state;
    this.setState({
      current: current + 1 === total? 0 : current + 1
    });
  };

  render() {
    const { children } = this.props;
    return (
      <div>
        <div className="emoji">
            {Children.toArray(children)[this.state.current]}
            {/*children*/}
        </div>
        <h3>Total Children: { Children.count(this.props.children) }</h3>
      </div>
    )
  }
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <Emoji>
          <h1>:-)</h1>
          <h1>:-0</h1>
          <h1>;-p</h1>
        </Emoji>
      </div>
    );
  }
}

export default App;
