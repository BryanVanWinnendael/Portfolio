import React from 'react'
import Clne from './Projects/Clne'
import ChatApp from './Projects/ChatApp'
import ToDo from './Projects/ToDo'
import TicTacToe from './Projects/TicTacToe'
import Section from './Section'
import TwitterClone from './Projects/TwitterClone'

function MakeProject({ active }) {
  return (
    <Section>
        {active === "ToDo." && (<ToDo/>)}
        {active === "Clne" && (<Clne/>)}
        {active === "ChatApp" && (<ChatApp/>)}
        {active === "TicTacToe" && (<TicTacToe/>)}
        {active === "TwitterClone" && (<TwitterClone/>)}
    </Section>

  )
}

export default MakeProject