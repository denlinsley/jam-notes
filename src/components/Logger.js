import React, { PropTypes } from 'react'

function Logger({ data }) {
  return (
    <div>
      <h1>Logger</h1>
      <pre>{data}</pre>
    </div>
  )
}

Logger.propTypes = {
  data: PropTypes.array,
}

export default Logger
