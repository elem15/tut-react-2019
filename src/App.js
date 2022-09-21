import React from 'react';
import Joke from './Joke'

const App = () => {
  return (
    <div>
      <Joke q='' a='No is not'/>
      <Joke q='is life on Mars' a=''/>
      <Joke q='is life on Mars' a='No is not'/>
      <Joke q='are you yang' a='yes I am'/>
      <Joke q='are you a women' a='no I am a'/>
    </div>
  )
}

export default App;