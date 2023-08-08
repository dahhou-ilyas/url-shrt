import { Request, Response } from "express";
import shortUrl from "../models/shortUrl.model";
import analytics from "../models/analytics.models";


export async function createShortUrl(req: Request, res: Response) {
  // Get the destination from the request body
  const { destination } = req.body;
  console.log(destination);
  // Create a shortUrl
  const newUrl = await shortUrl.create({ destination });

  // Return the shortUrl
  return res.send(newUrl);
}

export async function handleRedirect(req: Request, res: Response){
  const {shortId}=req.params
  const short=await shortUrl.findOne({shortId}).lean()// lean pour retourner des objet js simple 

  if(!short){
    return res.sendStatus(400)
  }
  const sel=await analytics.create({shortUrl:short._id})
  console.log(sel);
  return res.redirect(short.destination)
}

export async function getAnalytics(req: Request, res: Response){
  const data=await analytics.find({}).lean();
  return res.send(data)
}