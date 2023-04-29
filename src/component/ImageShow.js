import React from 'react'
import useGlobalContext from '../context'

const ImageShow = () => {
  const { imageUploaded, setImageUploaded } = useGlobalContext()
  const { link: { img, secure_img } } = imageUploaded
  return (
    <>
      <div className="d-flex flex-column align-items-center w-100 position-relative">
        <div className="order-2 w-100 d-flex flex-column align-items-center">
          <h1 className="mb-5">Uploaded Successfully!</h1>
          <div className='uploaded-img-holder'>
            <img src={img} alt="." className="uploaded-image" />
          </div>
          <div className="d-flex align-items-center mt-3 w-100">
            <p className="link-text">{img}</p>
            <button className="btn btn-primary copy-btn ms-4"
              onClick={() => {
                navigator.clipboard.writeText(img)
                alert("Image url copied to clipboard")
              }}>Copy</button>
          </div>
        </div>
        <div className="order-1 my-2">
          <i className="fa-solid fa-check fs-1"></i>
        </div>
        <div className="close-box position-absolute"
          title="upload next image"
          onClick={() => {
            setImageUploaded({ state: false, link: null })
          }}>
          <i className="fa fa-sharp fa-light fa-circle-xmark text-dark fs-3"></i>
        </div>
      </div>

    </>
  )
}

export default ImageShow
