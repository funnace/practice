import React,{useState} from 'react'

const Arr = () => {
    const [items, setitems] = useState([])
    const [item, setItem] = useState('')
    const addItem = () =>{
        setitems([...items,{
        id : items.length,
        value: item
    }])
    setItem('')
    }
    const removeItem = () => {
        const res = [...items]
        res.pop()
        setitems(res)
    }
    
  return (
    <div>
    <input type="text" value={item} onChange={e=>{setItem(e.target.value)}}/>
    <button onClick={addItem}>Add Item</button>
    <button onClick={removeItem}>Remove Item</button>
        <ul>
            {items.map(item =>(
                <li key={item.id}>{item.value}</li>
            ))}
        </ul>
    </div>
  )
}

export default Arr