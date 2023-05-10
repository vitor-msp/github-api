import express from "express";
import cors from "cors";
import { Routes } from "./Routes";

export class App {
  express: express.Application;

  constructor() {
    this.express = express();
    this.express.use(cors());
    this.express.use(express.json());
    this.express.use(Routes.getRoutes());
  }
}
