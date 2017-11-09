import React, { Component } from 'react';
import './App.css';

import Counter from './Counter'




class App extends Component {
  render() {
    return (
      <div className="App">

<Counter initialValue={0} delta={10}/>
<Counter initialValue={1} delta={100}/>
          <Counter initialValue={2} delta={1000}/>
      </div>
    );
  }
}

export default App;
