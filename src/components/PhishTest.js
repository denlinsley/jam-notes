  import React, { PropTypes, Component } from 'react';
  import Phish from '../phishin-js';
  import Logger from './Logger';

  const ph = Phish.Phishin();

  class PhishTest extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: [],
      };
    }

    componentDidMount() {
      ph.getYears().then(response => {
        console.log(response);
        this.setState({
          data: response.data,
        });
      });
    }

    render() {
      return (
        <div>
          <h2>PhishTest</h2>
          <ul>
            {this.state.data.map((year, index) => (
              <li key={index}>{year}</li>
            ))}
          </ul>
          <hr />
          <Logger data={this.state.data} />
        </div>
      );
    }
  }

  Phish.propTypes = {
    
  };

  export default PhishTest;
