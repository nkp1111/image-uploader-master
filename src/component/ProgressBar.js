import React from 'react'
import { Bars } from 'react-loader-spinner'

const ProgressBar = () => {
  return (
    <>
      <h1 className="mb-5">Uploading...</h1>
      <Bars
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass="bar-wrapper"
        visible={true}
      />
    </>
  )
}

export default ProgressBar
