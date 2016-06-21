import React, { PropTypes, Component } from 'react'
// import Phish from '../phishin-js'
import { getYears, getSongs } from '../phishin/'
import Logger from './Logger'

// eslint-disable-next-line new-cap
// const ph = Phish.Phishin()

class PhishTest extends Component {
  constructor(props) {
    super(props)
    this.state = {
      years: {},
      era: '',
    }
    this.setEra = this.setEra.bind(this)
  }

  componentDidMount() {
    getYears().then(({ data }) => {
      this.setState({
        years: data.data,
      })
    })
  }

  setEra(era) {
    this.setState({
      era,
    })
  }

  render() {
    return (
      <div>
        <h2>PhishTest</h2>
        <ul>
          {/* this.state.years[this.era].map((year, index) => (
            <li key={index}>{year}</li>
          ))*/}
        </ul>
        <hr />
        <a href="#" onClick={this.setEra('1.0')}>1.0</a>
        <a href="#" onClick={this.setEra('2.0')}>2.0</a>
        <a href="#" onClick={this.setEra('3.0')}>3.0</a>
      </div>
    )
  }
}

PhishTest.propTypes = {

}

export default PhishTest
