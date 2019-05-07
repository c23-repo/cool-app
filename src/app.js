import React from 'react';

class Header extends React.Component {
  render(){
    return (
      
      <header><h1>Cristian's React Counter App</h1></header>
    )
  }
}

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      clicks: 0,
    };
  }

  handleClick = e => {
    e.preventDefault();
    let clicks = this.state.clicks + 1;
    this.setState({clicks})

  }
  handleAdd = e => {
    e.preventDefault();
    let count = this.state.count + 1;
    this.setState({count});
    this.handleClick(e);
  }
  handleSub = e => {
    e.preventDefault();
    this.setState({ count: this.state.count - 1 });
    this.handleClick(e);
  }
  render() {
    return (
      <div>
        <p><b>Total Clicks: </b>{this.state.clicks}</p>
        <p><b>Count Number: </b> {this.state.count}</p>
        <button onClick={this.handleAdd}>+</button>
        <button onClick={this.handleSub}>-</button>


      </div>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Counter />
      </React.Fragment>
    );
  }
}
export default App;
