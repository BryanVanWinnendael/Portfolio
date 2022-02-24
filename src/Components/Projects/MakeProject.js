import React from 'react'
import Clne from './Clne';
import ChatApp from './ChatApp';
import ToDo from './ToDo';
import Section from '../Pages/Section';

function MakeProject({active}) {
  return (
    <Section>
        {active === "todo" && (<ToDo/>)}
        {active === "clne" && (<Clne/>)}
        {active === "chatapp" && (<ChatApp/>)}
    </Section>

  )
}

export default MakeProject