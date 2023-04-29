import React, { createContext, useContext, useEffect, useState } from 'react'


const AppContext = createContext()

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState({ state: false, data: null });
  const [imageUploaded, setImageUploaded] = useState({ state: false, link: null });

  useEffect(() => {
    const uploadImage = async (image) => {
      fetch(`https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/image/upload`, {
        method: "POST",
        body: loading.data
      })
        .then(res => res.text())
        .then(data => {
          console.log(data)
        })
    }

    if (loading.state) {
      uploadImage(loading.data)
    }
  }, [loading.data, loading.state]);

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