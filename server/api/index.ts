import { Router } from "express";
import cityRouter from "./city";
import countryRouter from "./country";

const appRouter = Router();

appRouter.use("/cities", cityRouter);
appRouter.use("/countries", countryRouter);

export default appRouter;
