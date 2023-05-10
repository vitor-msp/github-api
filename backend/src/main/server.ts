import dotenv from "dotenv";
import { App } from "./App";

(async () => {
  dotenv.config();
  const port = process.env.SERVER_PORT ?? 3001;
  const app = new App();
  try {
    app.express.listen(port, () => console.log(`api stated on port ${port}`));
  } catch (error: any) {
    console.log(`error to start api on port ${port}:\n ${error}`);
  }
})();
