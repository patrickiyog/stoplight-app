import React, {Component} from 'react';
import classes from './App.module.css';

import Lights from './LightsComponent/Lights';


class App extends Component {

  state = {
    red: true,
    yellow: false,
    green: false
  }

  toggle = () => {
    if(this.state.red) {
      this.setState({red: false});
      this.setState({green: true});
    } else if(this.state.green) {
      this.setState({green: false});
      this.setState({yellow: true});
    } else {
      this.setState({yellow: false});
      this.setState({red: true});
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.toggle();
    }, 5000);
  }

  render() {

    return (
      <div className={classes.StoplightContainer}>
        <div className={classes.Stoplight}>
          <Lights redLight={this.state.red} yellowLight={this.state.yellow} greenLight={this.state.green} />
        </div>
      </div>
    );
    
  }

}

export default App;
