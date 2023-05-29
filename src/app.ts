import express, { Request, Response, Express } from "express";
import http from "http";
import { Server } from "socket.io";

const app: Express = express();
const server = http.createServer(app);
const io = new Server(server);
const port = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.get("/", (req: Request, res: Response) => {
    res.render("index.ejs");
});

server.listen(port, () => {
    console.log(`Running server at http://localhost:${port}`);
});
