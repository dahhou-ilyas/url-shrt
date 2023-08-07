import {AnyObjectSchema} from "yup"
import { Request,Response,NextFunction } from "express"


//pour ne pas cracher le systeme
const validateRessource=(ressource:AnyObjectSchema)=>async (req:Request,res:Response,next:NextFunction)=>{
    try{
        await ressource.validate({
            body:req.body,
            query:req.query,
            params:req.params
        });
        next()
    }catch(e){
        return res.sendStatus(401);
    }
}

export default validateRessource;