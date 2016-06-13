import React, { Component } from 'react'
import PhishTest from './PhishTest'

// IMPORTANT! HMR won't work if root component is in entry file,
// or if root component is a stateless functional component
// https://github.com/gaearon/react-hot-loader/blob/master/docs/Troubleshooting.md#the-following-modules-couldnt-be-hot-updated-they-would-need-a-full-reload
export default class App extends Component {
  render () {
    return (
      <div>
        <h1>It works!</h1>
        <PhishTest />
      </div>
    )
  }
}
