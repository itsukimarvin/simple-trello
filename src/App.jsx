import { useState } from 'react'
import Header from './components/headr/Header'
import TaskCards from './components/task/TaskCards'
// import './App.css'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <Header />
      <TaskCards />
    </div>
  )
}

export default App
