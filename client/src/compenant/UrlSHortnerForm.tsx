import axios from 'axios'
import React,{useState} from 'react'
import {Input,Button,Box,Heading,InputGroup} from '@chakra-ui/react'
import {SERVER_EXNDPOINT} from '../config'


function UrlSHortnerForm():JSX.Element{

  const [destination,setDestination]=useState('')

  async function handleSubmit(e:React.FormEvent<HTMLFormElement>){
    e.preventDefault()
    try{
    const result=await axios
      .post(`${SERVER_EXNDPOINT}/api/url`,{
          destination,
        }
      ).then((resp)=>resp.data)
      console.log(result);
    }catch(e){
      console.log(e);
    }
    
  }

  return (
    <Box pos={"relative"}>
      <form onSubmit={handleSubmit}>
        destination:{destination}
        <Input
          onChange={(e:any)=>setDestination(e.target.value)}
          placeholder='https://example.com'
        />
        <Button type={"submit"}>CREATE SHORT URL</Button>
      </form>
    </Box>
  )
}

export default UrlSHortnerForm