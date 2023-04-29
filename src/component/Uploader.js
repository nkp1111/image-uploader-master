import React from 'react'

import image from '../assets'

const Uploader = () => {
  return (
    <>
      <h1>Upload your image</h1>
      <p>File should be Jpeg, Png,...</p>
      <figure className="d-flex flex-column p-2 my-3">
        <img src={image} alt="." className="mx-auto" />
        <figcaption>Drag & Drop your image here</figcaption>
      </figure>
      <div>
        <label htmlFor="image" className="btn btn-primary">Choose a file</label>
        <input type="file" name="image" id="image" className="visually-hidden" accept="image/png, image/Jpeg, image/jpg, image/gif" />
      </div>
    </>
  )
}

export default Uploader
