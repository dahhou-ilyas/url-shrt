import { Express, Request, Response } from "express";
import {
  createShortUrl,
  handleRedirect,
} from "../controller/shortUrl.controller";
import validateResourse from "../middleware/validateRessource";
import shortUrlSchema from "../schemas/createShortUrl";

function routes(app: Express) {
  app.get("/healthcheck", (req: Request, res: Response) => {
    return res.send("App is healthy");
  });

  app.post("/api/url",validateResourse(shortUrlSchema), createShortUrl);

  app.get("/:shortId", handleRedirect);

  // app.get("/api/url/:shortId", getShortUrl);

  // app.get("/api/analytics", getAnalytics);
}

export default routes;
