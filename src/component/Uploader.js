import React, { useEffect, useRef } from 'react'

import image from '../assets'
import useGlobalContext from '../context'

const Uploader = () => {
  const { loading, setLoading } = useGlobalContext()
  const imgRef = useRef()

  useEffect(() => {
    const reader = new FileReader();

    imgRef.current.addEventListener("change", (e) => {
      const img = e.target.files[0]
      reader.readAsDataURL(img);
      reader.addEventListener('load', (e) => {
        setLoading({ state: true, data: e.target.result })
      })
    })
  }, [setLoading]);

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
        <input type="file" name="image" id="image" className="visually-hidden" accept="image/png, image/Jpeg, image/jpg, image/gif" ref={imgRef} />
      </div>
    </>
  )
}

export default Uploader
