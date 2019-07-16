import React, { Component, Children } from 'react';

const punctuation = [':=)', ':-9', ';-(']
const owls = ['(*^▽^*)','( ﾟ∀ ﾟ)','ɾ⚈▿⚈ɹ','(≧∇≦*)', '≧(´▽｀)≦'];

class Emoji extends Component {
	state = {
		total : 0,
		current : 0
	}

	componentDidMount() {
		const {children} = this.props

		this.setState({total: Children.count(children)})
		this.interval= setInterval(this.showNext, 2000)
	}

	componentWillUnmount() {
		clearInterval(this.interval)
	}


	showNext = () => {
		const {total, current} = this.state;
		this.setState({
			current: current + 1 === total ? 0 : current + 1
		})

	}
	render() {
		const {children} = this.props
		console.log("My children!!!", children)
		return(
			<div>
				<div className='emoji'>
					{Children.toArray(children)[this.state.current]}
				</div>
				<h3>Total Children: {Children.count(children)} </h3>
			</div>
		)
	}
}

class App extends Component {
  render() {
    return (
      <div className="App">
    	<Emoji>
    	{[...owls, ...punctuation]}
    	</Emoji>
      </div>
    );
  }
}

export default App;


















