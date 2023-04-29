import React from 'react'

import { Uploader, ProgressBar } from './component'
import useGlobalContext from './context'

const App = () => {

  const { loading, imageUploaded } = useGlobalContext()
  return (
    <main className="card">
      <div className="card-body d-flex flex-column align-items-center">
        {loading.state
          ? <ProgressBar />
          : <Uploader />}
      </div>
    </main>
  )
}

export default App
