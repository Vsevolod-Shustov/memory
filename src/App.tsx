import { useState } from 'react'
import './App.css'

function App() {
  const [grid, setGrid] = useState({
    "0": {
      number: 0,
      clicked: false,
      guessed: false
    },
    "1": {
      number: 0,
      clicked: false,
      guessed: false
    },
    "2": {
      number: 1,
      clicked: false,
      guessed: false
    },
    "3": {
      number: 1,
      clicked: false,
      guessed: false
    }
  })

  function makeArrayFromObject(obj: object){
    let arr=[]
    for (const [key, value] of Object.entries(obj)) {
        if(value != null && value.constructor.name === "Object") {
            arr.push(
                <div 
                key={key}
                className='card'
                onClick={() => handleCardClick(key, value)}
                >
                    {(value.guessed || value.clicked) ? value.number : ""}
                </div>
            )
        }
    }
    return arr
  }

  function handleCardClick(key: string, value: {number: number, clicked: boolean, guessed: boolean}){
    //console.log(value.number)
    console.log(key)
    setGrid(grid => ({
      ...grid,
      [key]: {
        ...grid[key],
        clicked: true
      }
    }))
  }

  return (
    <>
      <div className='grid'>
        {makeArrayFromObject(grid)}
      </div>
    </>
  )
}

export default App
