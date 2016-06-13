  import React, { PropTypes, Component } from 'react'
  import Phish from '../phishin-js'

  const ph = Phish.Phishin()

  export default class PhishTest extends Component {
    constructor(props) {
      super(props)
      this.state = {
        data: []
      }
    }

    componentDidMount () {
      ph.getYears().then(response => {
        console.log(response)
        this.setState({ 
          data: response.data 
        })
      })
    }

    render () {
      const { data } = this.state
      return (
        <div>
          <h2>PhishTest</h2>
          <ul>
            {data.map((year, index) => (
              <li key={index}>{year}</li>
            ))}
          </ul>
        </div>
      )
    }
  }

  Phish.propTypes = {
    
  }
