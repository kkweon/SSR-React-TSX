import express from "express";
import * as React from "react";
import * as ReactDOM from "react-dom/server";
import App from "../shared/App";

class Server {
  app: express.Application;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  private config() {
    this.app.use(express.static("public"));
  }

  private routes() {
    this.app.get("*", (_, res) => {
      res.send(`
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <title>SSR Test</title>
</head>

<body>
    <div id="app">${ReactDOM.renderToString(<App />)}</div>
</body>

</html>
`);
    });
  }

  public start(port: number): void {
    this.app.listen(port, () => {
      console.log("[express] hosted at http://localhost:" + port);
    });
  }
}

new Server().start(4000);
