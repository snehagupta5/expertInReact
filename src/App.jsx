import { useState } from 'react'
import './App.css'
import ScrollHome from './component/InfiniteScroll/ScrollHome'
import HomeTabForm from './component/TabForm/HomeTabForm'
import PaginationHome from './component/pagination/PaginationHome'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <ScrollHome /> */}
      {/* <HomeTabForm /> */}
      <PaginationHome />
    </>
  )
}

export default App
