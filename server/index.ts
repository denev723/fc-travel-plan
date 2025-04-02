import express from "express";
import appRouter from "./api";

const server = await (async () => {
  const app = express();
  const port = 3000;

  app.use(express.json());
  app.use("/api", appRouter);
  app.get("/", (_, res) => {
    res.send("Hello World!");
  });

  return app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
})();

(() => {
  if (import.meta.hot) {
    import.meta.hot.accept(async () => {
      await server.close();
    });
  }
})();
