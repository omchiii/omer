import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Standings from './components/standings/standings.js';
import Fixtures from './components/fixtures/fixtures.js';

class App extends Component {

constructor(props) {
    super(props);
    this.state = {
      items2: [],
      items: [],
    }

    this.handleClick = this.handleClick.bind(this);
  }

 componentDidMount() {

    fetch('https://apiv2.apifootball.com/?action=get_standings&league_id=148&APIkey=9677219cbf80915da10284487a9eadf6c806c97500c3e0fa3ec11af330673ec1')
    .then(res => res.json())
    .then(json =>{
      this.setState({
        items: json,
      })
    });

    fetch('https://apiv2.apifootball.com/?action=get_events&from=2019-08-08&to=2020-05-17&league_id=148&APIkey=9677219cbf80915da10284487a9eadf6c806c97500c3e0fa3ec11af330673ec1')
    .then(res => res.json())
    .then(json =>{
      this.setState({
        items2: json,
      })
    });
  }

 handleClick(i, event) {
    
    this.setState({ i: i })
   }
   
 render() {
              
              return (
                <Router>
                <Route path='/' exact
                    render = {(routeProps) => (<Link to='/matches'><Standings {...routeProps} items={this.state.items} handleClick={this.handleClick}/></Link>)}
                />
                <Route path='/matches' exact
                    render = {(routeProps) => (<Fixtures {...routeProps} i={this.state.i} items2={this.state.items2}/>)}
                />
                </Router>
                    );
              }
 };

export default App;
