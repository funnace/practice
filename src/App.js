import React,{useState} from 'react'
import Form from './components/Form'
import Arr from './components/Arr'
import Mouse from './components/Mouse'
import Red from './Red'

const App = () => {
  const [display, setdisplay] = useState(true)
  return (
    <div>
      <Form/>
      <Arr/>
      {display && <Mouse/>}
      {display &&
      <button onClick={()=>{setdisplay(false)}}>Stop</button>}
      <Red/>
    </div>
  )
}

export default App