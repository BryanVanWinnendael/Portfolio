import React from 'react'
import Clne from './Projects/Clne';
import ChatApp from './Projects/ChatApp';
import ToDo from './Projects/ToDo';
import TicTacToe from './Projects/TicTacToe';
import Section from './Section';

function MakeProject({active}) {
  return (
    <Section>
        {active === "todo" && (<ToDo/>)}
        {active === "clne" && (<Clne/>)}
        {active === "chatapp" && (<ChatApp/>)}
        {active === "tictactoe" && (<TicTacToe/>)}
    </Section>

  )
}

export default MakeProject