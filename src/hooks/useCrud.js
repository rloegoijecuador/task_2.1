import axios from "axios"
import { useState } from "react"

const useCrud=(baseurl) =>{
    const [infoApi, setinfoApi] = useState()
    
    const getApi =(path)=>{
        const url =`${baseurl}${path}/`
        axios.get(url)
        .then(res => setinfoApi(res.data))
        .catch(err =>console.log(err))
        
    }

    const postApi =(path,data)=>{
        const url = `${baseurl}${path}/`
        axios.post(url, data)
        .then(res =>{ 
            console.log(res.data)
            setinfoApi([...infoApi,res.data])
            
        })
        .catch(err =>console.log(err))
        
    }
    const deleteApi =(path,id)=> {
        const url=`${baseurl}${path}/${id}/`
        axios.delete(url)
        .then(res => {
            setinfoApi(infoApi.filter(e => e.id !==id))
        })
        .catch(err => console.log(err))
    }

    const updateApi =(path,id, data)=>{
        const url =`${baseurl}${path}/${id}/`
        axios.patch(url, data)
        .then(res =>{
            
            setinfoApi(infoApi.map(e=>e.id === id ? res.data : e ))
        })
        .catch( err =>console.log(err))
    }


    return [infoApi, getApi,postApi,deleteApi,updateApi]


}
export default useCrud