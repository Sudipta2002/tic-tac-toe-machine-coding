import React from 'react'
import Icon from '../Icon/Icon'
import  './Card.css'
function isWinner(board,symbol){
  if(board[0]==board[4] && board[4] == board[8] && board[8] == symbol) return symbol;
  if(board[2]==board[4] && board[4] == board[6] && board[6] == symbol) return symbol;
  
  if(board[0]==board[3] && board[3] == board[6] && board[6] == symbol) return symbol;
  if(board[1]==board[4] && board[4] == board[7] && board[7] == symbol) return symbol;
  if(board[2]==board[5] && board[5] == board[8] && board[8] == symbol) return symbol;
  
  if(board[0]==board[1] && board[1] == board[2] && board[2] == symbol) return symbol;
  if(board[3]==board[4] && board[4] == board[5] && board[5] == symbol) return symbol;
  if(board[6]==board[7] && board[7] == board[8] && board[8] == symbol) return symbol;
  
  return "";
}
const Card = ({iconName,setWinner,winner,setTerm,term,player,index,board,setBoard}) => {
  let icon = <Icon/>
  if(player==="X"){
    icon = <Icon name={"cross"}/>
  }else if(player==="O"){
    icon = <Icon name={"circle"}/>
  }  
  return (
    <div className='card' onClick={()=>{
      if(board[index]!=="") return;
      if(winner)return;
      if(term==true){
        board[index]="O";
      }else{
        board[index]="X";
      }
      const win = isWinner(board,(term)?'O':'X');
      console.log(board,term)
      setWinner(win);
      setBoard([...board]);
      setTerm(!term);
    }}>
        {icon}
    </div>
  )
}

export default Card