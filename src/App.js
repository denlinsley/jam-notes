import React, { Component, } from 'react'

// IMPORTANT! HMR won't work if root component is in entry file,
// or if root component is a stateless functional component
// https://github.com/gaearon/react-hot-loader/blob/master/docs/Troubleshooting.md#the-following-modules-couldnt-be-hot-updated-they-would-need-a-full-reload
export default class App extends Component {
  render () {
    return (
      <h1>It works!</h1>
    )
  }
}
