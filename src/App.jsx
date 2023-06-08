import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from './components/NavBar'
import './App.css'
import ChildComponent from './components/ChildComponent'

function App() {
  const [count, setCount] = useState(0)
  const [believe, setBelieve] = useState(false)
  const [musicians, setMusicians] = useState(["Louis Armstrong", "Miles Davis", "Duke Ellington", "Charlie Parker", "John Coltrane", "Ella Fitzgerald"]);

  return (
    <>
    <NavBar/>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <ChildComponent message="This is the Children"/>
      {/*  {ChildComponent(message ="blah")} */}
      <h1>Jazz Musicians</h1>
      <ul>
        {musicians.map((person, id)=>{
          return <li key={id+person}>{person}</li>
        })}
      </ul>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count - 1)}>
          count is {count}
        </button>
        <button onClick={()=> 
          setBelieve(!believe)
          }>
            believe is {believe ? "true" : "false"}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
