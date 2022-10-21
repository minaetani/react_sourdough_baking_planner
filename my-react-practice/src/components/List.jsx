import React from 'react'
import { BakingData } from './BakingData.js'
import Timer from './Timer.jsx'

function ListItem(props) {
  return (
    <>
      <h3>{props.name}</h3>
      <p>{props.purpose}</p>
    </>
  )
} 
export function List ({isStart, isFinish}) {
  return (
    <div className='container'>
      <h2>Processes</h2>
      <ol>
      <li key={BakingData.id}>
        BakingData.map ((item){<ListItem
        name={BakingData.name}
        purpose={BakingData.purpose} />})
        </li>
       { isStart ? <Timer isStart={isStart}/> : ''}  
       { isFinish ? <Timer isFinish={isFinish} /> : ''}  
       </ol>
    </ div>
  )
}


