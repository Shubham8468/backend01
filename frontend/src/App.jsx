import { useEffect, useState } from 'react';
import axios from 'axios'

 const App=()=>{
  const[jokes,setJokoes]=useState([])

  useEffect(()=>{
    axios.get('/jokes').then((response)=>{
      setJokoes(response.data)
    }).catch((err)=>{
      console.log(err)
    })

  }, [])

  return (
    <div>
      <h1>helllow</h1>
      <p>JOKES:{jokes.length}</p>
      {
        jokes.map((joke,index)=>{
          return <div key={joke.id ?? index}>
            <h2>{joke.title}</h2>
            <p>{joke.contend}</p>
           </div>
        })
      }
    </div>
  )
 }
 export default App;