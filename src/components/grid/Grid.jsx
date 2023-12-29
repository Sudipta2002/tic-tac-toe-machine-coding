import React, { useState } from 'react'
import Card from '../card/Card'
import './Grid.css'
const Grid = ({numberOfCards}) => {

    const [term,setTerm]=useState(true);
    const [winner,setWinner]=useState(null);
    const [board,setBoard]=useState(Array(numberOfCards).fill(""));

  return (
    <>
        {winner && <h1 className='turn-highlight'>Winner is :{winner}</h1>}
        <h1 className='turn-highlight'>Current Term :{(term)?'O':'X'}</h1>
        <div className='grid'>
            {board.map((value,idx)=>{
                return <Card key={idx} winner={winner} setWinner={setWinner} board={board} setBoard={setBoard} index={idx} term={term} player={value} setTerm={setTerm}/>
            })}
        </div>
    </>
  )
}

export default Grid