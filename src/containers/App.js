import React, { Component } from 'react';

import classes from './App.module.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'

import ErrorBoundry from '../ErrorBoundary/ErrorBoundary';


class App extends Component {

  constructor(props) {
    super(props)
    console.log("[App.js] constructor")
  }

  state = {
    persons: [
      { id: "abcd1", name: "Max", age: 28 },
      { id: "efgh2", name: "Manu", age: 29 },
      { id: "higk3", name: "Stephanie", age: 26 }
    ],
    otherState: "some other value",
    showPersons: false,
    showCockpit: true
  }

  static getDerivedStateFromProps(props, state) {
    console.log("[App.js getDrivedStateFromProps]", props)
    return state
  }


  // componentWillMount() {
  //   console.log('[App.js] componentWillMount');
  // }

  componentDidMount() {
    console.log("[App.js componentDidMount]")
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[App.js shouldComponentUpdate]")
    return true
  }

  componentDidUpdate() {
    console.log("[App.js componentDidUpdate]")
  }

  nameChangedHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p => { return p.id === id })
    const person = { ...this.state.persons[personIndex] }
    // const person = Object.assign({}, this.state.persons[personIndex])

    person.name = event.target.value

    const persons = [...this.state.persons]
    persons[personIndex] = person

    this.setState({
      persons: persons
    })
  }

  togglePersonsHandler = () => {
    const doseShow = this.state.showPersons
    this.setState({ showPersons: !doseShow })
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({ persons: persons })
  }

  render() {

    console.log("[App.js render]")
    // const style = {
    //   backgroundColor: "green",
    //   color: "white",
    //   font: "inherit",
    //   border: "1px solid blue",
    //   padding: "8px",
    //   cursor: "pointer",
    //   ":hover": {
    //     backgroundColor: "lightgreen",
    //     color: "black"
    //   }
    // }

    let persons = null

    if (this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler} />


      // style.backgroundColor = "red"
      // style[":hover"] = {
      //   backgroundColor: "salmon",
      //   color: "black"
      // }
    }

    return (
      <div className={classes.App}>
        <button onClick={() => {
          this.setState({ showCockpit: false })
        }}>
          Remove Cockpit </button>
        {this.state.showCockpit ? <Cockpit
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          personsLenght={this.state.persons.length}
          clicked={this.togglePersonsHandler}
        /> : null}
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }

}

export default App;
