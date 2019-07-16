import React, { Component } from 'react';


class FruitSaver extends React.Component {
  shouldComponentUpdate (nextProps) {
    const updateBool = this.props.name !== nextProps.name
    
    console.log("SHOULD I UPDATE?", updateBool)
    
    return updateBool
  }

  render () {
    return <Fruit {...this.props} />
  }
}

const Fruit = (props) => {
  console.log('IS THE FRUIT BEING RE-RENDERED?', props)
  const name = props.name
  return <h1>{name}</h1>
}



const App = class extends React.Component {
  state = {
    count: 0
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  render () {
    return (
      <div>
        <h3>{this.state.count}</h3>
        <FruitSaver name='banana' />
        <button onClick={this.increment}>Click me</button>
        
      </div>
    )
  }

}


export default App;
