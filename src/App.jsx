import { useEffect, useState } from 'react'
import './App.css'
import useCrud from './hooks/useCrud'
import FormUser from './components/FormUser'
import UserCard from './components/UserCard' 

function App() {
  
    const[infoUpdate,setinfoUpdate] = useState()
  
  const url='https://task-2-je4y.onrender.com'
   const [users,getUsers,createUsers,deleteUser,updateUser] =  useCrud(url)
   useEffect(()=>{
   getUsers('/users')
   },[])
 
console.log(users)
  return (
    
    <div>
      <h2>users</h2>
      <FormUser
      createUsers={createUsers}
      infoUpdate={infoUpdate}
      />
      <div>
        {
          users?.map(users=>(
            <UserCard
            key={users.id}
            users={users}
            deleteUser={deleteUser}
            updateUser={updateUser}
            setinfoUpdate={setinfoUpdate}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App
