import { Router } from "express";
import cityRouter from "./city";

const appRouter = Router();

appRouter.use("/cities", cityRouter);

export default appRouter;
