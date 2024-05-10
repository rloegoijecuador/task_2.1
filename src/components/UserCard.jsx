import React from 'react'

const UserCard = ({users,deleteUser,setinfoUpdate}) => {
    const handledelete=() =>{
        deleteUser('/users',users.id)

    }
    const hanndleedit =()=>{{
        setinfoUpdate(users)
    }}
  return (
    <article>
        <h3>{users.first_name}{users.last_name}</h3>
        <ul>
            <li><span>email</span><span>{users.email}</span></li>
            <li><span>birtday</span><span>{users.birtday}</span></li>
            
        </ul>
        <button onClick={handledelete}><i className='bx bx-trash'></i></button>
        <button onClick={hanndleedit}><i className='bx bx-edit-alt' ></i></button>
    </article>
  )
}

export default UserCard

