import React from 'react'
import { useParams,useNavigate } from 'react-router-dom'

function User() {

    const params = useParams()
    console.log(params.id);

    const navigation = useNavigate();

  return (
    <>
    <div className='User'>
        <div>
         User hu me!
         </div>
         
        <button onClick={()=> navigation("about")}>Click</button>
        <button onClick={()=> navigation("/about")}>Click</button>
    
        </div>
    </>
  )
}

export default User