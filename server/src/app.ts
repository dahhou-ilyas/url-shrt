import express,{Express} from "express";
import config from "config";
import routes from "./routes";
import bodyParser from "body-parser";
import db from "./db";
import cors from "cors"

const app:Express=express()
const port =config.get('port')

app.use(bodyParser.json())
app.use(cors())


app.listen(port,()=>{
    console.log(`app listen in ${port}`);
    db()
    routes(app)
})