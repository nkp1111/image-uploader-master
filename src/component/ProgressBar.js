import React from 'react'

const ProgressBar = () => {
  return (
    <>
      <h1 className="mb-5">Uploading...</h1>
      <div className="position-relative bg-secondary progress">
        <div className="position-absolute progress-bar bg-primary"></div>
      </div>
    </>
  )
}

export default ProgressBar
