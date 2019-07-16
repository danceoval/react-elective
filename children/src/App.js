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
        </div>
        <h3>Total Children: { Children.count(this.props.children) }</h3>
        {children}
      </div>
    )
  }
}

const owls = ['(*^▽^*)','( ﾟ∀ ﾟ)','ɾ⚈▿⚈ɹ','(≧∇≦*)', '≧(´▽｀)≦']
const punctuation = [':=)', ':-9', ';-(']

class App extends Component {
  render() {
    return (
      <div className="App">
        <Emoji>
          {[...punctuation]}
        </Emoji>
      </div>
    );
  }
}

export default App;
