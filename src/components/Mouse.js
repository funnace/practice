import React,{useEffect,useState} from 'react'

const Mouse = () => {
    const [p, setp] = useState({x:'0',y:'0'})
    const pos = e =>{
        console.log('function')
        setp({...p,x:e.clientX,y:e.clientY})
    }
    useEffect(() => {
    console.log('useEffect called');
    window.addEventListener('mousemove', pos);
  
    return () => {
      window.removeEventListener('mousemove', pos);
    }
    // eslint-disable-next-line
  }, []);
  
    
  return (
    <div>X : {p.x} , Y : {p.y}</div>
    
  )
}

export default Mouse