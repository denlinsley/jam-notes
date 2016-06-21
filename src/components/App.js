import React from 'react'
import { withRouter } from 'react-router'
// import routes from '../config/routes';

// IMPORTANT! HMR won't work if root component is in entry file,
// or if root component is a stateless functional component
// https://github.com/gaearon/react-hot-loader/blob/master/docs/Troubleshooting.md#the-following-modules-couldnt-be-hot-updated-they-would-need-a-full-reload
class App extends React.Component {
  render() {
    return (
      {/* routes - does not work here */}
    )
  }
}

export default withRouter(App)
