import React from 'react';
import Search from './search';
import {linearSearch, binarySearch} from './searches.js';
import SearchView from './searchView';
import NumberListBox from './numberListBox';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchNum: '', 
      inputValues: []
    };
    // this.handleChange = this.handleChange.bind(this);
  }

  handleSearchValueChange(event) {
    const num = parseInt(event.target.value, 10);
    this.setState({searchNum: num});
  }

  handleNumberListChange(event) {
    const numArray = event.target.value.split(' ').map(str => parseInt(str, 10));
    this.setState({inputValues: numArray});
  }

  handleSearchClick() {
    const linearCount = linearSearch(this.state.inputValues, this.state.searchNum);
    const binaryCount = binarySearch(this.state.inputValues, this.state.searchNum)
    // TODO: show this in a component
    console.log('linear', linearCount);
    console.log('binary', linearCount)
  }

  render() {
    return (
      <div>
        <Search handleChange={(event) => this.handleSearchValueChange(event)}/>
        <NumberListBox handleChange={(event) => this.handleNumberListChange(event)}/>
        <button onClick={() => this.handleSearchClick()}>Search</button>
        <SearchView />
      </div>
    )
  }
}

export default App;
