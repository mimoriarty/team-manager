import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { supabase } from './utils/supabaseClient'

function App() {
  const [players, setPlayers] = useState<{ id: number; position: string }[]>([])

  async function fetchPlayers() {
    const { data, error } = await supabase
      .from('players')
      .select('id, position')
    
    if (error) {
      console.error('Error fetching players:', error)
    } else {
      setPlayers(data)
    }
  }
  

  useEffect(() => {
    fetchPlayers()
  }, [])
  
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div>
        <h2>Player's list</h2>
        <ul>
        {players.map((player) => (
          <li key={player.id}>{player.position}</li>
        ))}
      </ul>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
