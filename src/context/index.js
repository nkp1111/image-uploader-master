import React, { createContext, useContext, useState } from 'react'


const AppContext = createContext()

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState({ state: false, data: null });
  const [imageUploaded, setImageUploaded] = useState(false);

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