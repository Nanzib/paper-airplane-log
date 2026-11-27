import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Statistics from './components/Statistics'


function App() {
  const [soared, setSoared] = useState(0)
  const [looped, setLooped] = useState(0)
  const [crashed, setCrashed] = useState(0)

  const handleSoared = () => {
    setSoared(soared + 1)
  }

  const handleLooped = () => {
    setLooped(looped + 1)
  }

  const handleCrashed = () => {
    setCrashed(crashed + 1)
  }

  return (
    <div>
      <h1>Paper Airplane Flight Log</h1>
      <Statistics soared={soared} looped={looped} crashed={crashed} />
      
      <Button handleClick={handleSoared} text="Soared" />
      <Button handleClick={handleLooped} text="Looped" />
      <Button handleClick={handleCrashed} text="Crashed" />
    </div>
  )
}

export default App