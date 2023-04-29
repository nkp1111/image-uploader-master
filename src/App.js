import React from 'react'

import { Uploader, ProgressBar, ImageShow } from './component'
import useGlobalContext from './context'

const App = () => {

  const { loading, imageUploaded } = useGlobalContext()
  return (
    <main className="card">
      <div className="card-body d-flex flex-column align-items-center">
        {imageUploaded.state
          ? <ImageShow />
          : loading.state
            ? <ProgressBar />
            : <Uploader />}
      </div>
    </main>
  )
}

export default App
