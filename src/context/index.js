import React, { createContext, useContext, useEffect, useState } from 'react'


const AppContext = createContext()

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState({ state: false, data: null });
  const [imageUploaded, setImageUploaded] = useState({ state: false, link: null });

  useEffect(() => {
    const uploadImage = async (image) => {

      const cloudName = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME
      const unsignedPreset = process.env.REACT_APP_UNSIGNED_PRESET
      const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`

      const formData = new FormData();
      formData.append("file", image);
      formData.append("upload_preset", unsignedPreset);

      console.log(formData)
      fetch(url, {
        method: "POST",
        body: formData
      })
        .then(res => res.json())
        .then(data => {
          setImageUploaded({
            state: true,
            link: {
              img: data.url, secure_img: data.secure_url
            }
          })
        })
    }

    const { state, data } = loading
    if (state) {
      uploadImage(data)
    }
  }, [loading]);

  return (
    <AppContext.Provider
      value={{
        loading,
        setLoading,
        imageUploaded,
        setImageUploaded,
      }}>
      {children}
    </AppContext.Provider>
  )
}

const useGlobalContext = () => useContext(AppContext)

export default useGlobalContext
export {
  AppProvider
}