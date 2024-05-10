import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

const FormUser = ({ createUsers,infoUpdate}) => {

    const {handleSubmit ,register,reset}= useForm()
    useEffect(()=>{
      reset(infoUpdate)
    },[infoUpdate])

    const submit= data =>{
     createUsers('/users',data)
     reset({
      email:'',
      password:'',
      firts_name:'',
      last_name:'',
      birthday:''

     })
    }

    return (
      <div>
        <form onSubmit={handleSubmit(submit)}>
          <label>
            email
            <input {...register('email')} type="email" />
          </label>
          <label>
            password
            <input {...register('password')} type="password" />
          </label>
          <label>
            first name
            <input {...register('first_name')} type="text" />
          </label>
          <label>
            last name
            <input {...register('last_name')} type="text" />
          </label>
          <label>
            birthday
            <input {...register('birthday')} type="date" />
          </label>
          <button>submit</button>
        </form>
      </div>
    )
  }
  


export default FormUser