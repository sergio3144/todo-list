import './App.css'
import { CompletedApplication } from './components/app/CompletedApplication'
import { GlobalProvider } from './hooks/context/GlobaContext'

function App() {

  return (
    <>
      <GlobalProvider>
        <CompletedApplication/>
      </GlobalProvider>
    </>
  )
}

export default App
