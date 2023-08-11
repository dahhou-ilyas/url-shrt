import axios from 'axios'
import React,{useState} from 'react'
import {Input,Button,Box,Heading,InputGroup} from '@chakra-ui/react'
import {SERVER_EXNDPOINT} from '../config'


function UrlSHortnerForm():JSX.Element{

  const [destination,setDestination]=useState('')
  const [shortUrl,setShortUrl]=useState<{shortId:string}|null>(null)

  async function handleSubmit(e:React.FormEvent<HTMLFormElement>){
    e.preventDefault()
    try{
    const result=await axios
      .post(`${SERVER_EXNDPOINT}/api/url`,{
          destination,
        }
      ).then((resp)=>resp.data)
      setShortUrl(result)
      console.log(shortUrl?.shortId);
    }catch(e){
      console.log(e);
    }
    
  }

  return (
    <Box zIndex={2} pos={"relative"} backgroundColor={'whiteAlpha.800'} padding={'6'}>
      <form onSubmit={handleSubmit}>
        <InputGroup>
          <Input
            onChange={(e:any)=>setDestination(e.target.value)}
            placeholder='https://example.com'
          />
          <Button type={"submit"}>CREATE</Button>
        </InputGroup>
      </form>
        {shortUrl && (
          <div style={{display:"flex",justifyContent:'center'}}>{SERVER_EXNDPOINT+`/${shortUrl?.shortId}`}</div>)}
      
    </Box>
  )
}

export default UrlSHortnerForm