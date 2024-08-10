import React,{useState} from 'react'

const Form = () => {
  const [name, setname] = useState({first:'',last:'bisht'})
  return (
    <div>
      <form>
        <input type="text" value={name.first} onChange={e => setname({...name, first : e.target.value})} />
        <input type="text" value={name.last} onChange={e => setname({...name, last : e.target.value})} />
        <h2>Your first name is {name.first}</h2>
      <h2>Your last name is {name.last}</h2>
      </form>
    </div>
  )
}

export default Form