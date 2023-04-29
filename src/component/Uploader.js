import React, { useEffect, useRef } from 'react'

import image from '../assets'
import useGlobalContext from '../context'

const Uploader = () => {
  const { loading, setLoading } = useGlobalContext()
  const imgRef = useRef()
  const dropRef = useRef()


  const readFileData = (img) => {
    const reader = new FileReader();
    reader.readAsDataURL(img);
    reader.addEventListener('load', (e) => {
      setLoading({ state: true, data: e.target.result })
    })
  }

  useEffect(() => {
    const imgEl = imgRef.current
    const getImageData = (e) => {
      const img = e.target.files[0]
      readFileData(img)
    }

    imgEl.addEventListener("change", (e) => getImageData(e))

    return () => imgEl.removeEventListener("change", (e) => getImageData(e))
  });

  useEffect(() => {
    const dropEl = dropRef.current

    dropEl.addEventListener("dragover", (e) => {
      e.preventDefault()
      e.currentTarget.classList.add("drag")
    })

    dropEl.addEventListener("dragleave", (e) => {
      e.currentTarget.classList.remove("drag")
    })

    dropEl.addEventListener("drop", (e) => {
      e.preventDefault()
      e.stopPropagation()
      let img = e.dataTransfer.files[0]
      readFileData(img)
    })
  });

  return (
    <>
      <h1>Upload your image</h1>
      <p>File should be Jpeg, Png,...</p>
      <figure className="d-flex flex-column p-5 my-3" ref={dropRef}>
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
