import { useState } from 'react'
import './App.css'
import ScrollHome from './component/InfiniteScroll/ScrollHome'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ScrollHome />
    </>
  )
}

export default App
