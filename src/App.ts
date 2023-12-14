import  express  from "express";
import cors from 'cors';
import userRouter from "./routers/userRouter.js";
import itemRouter from "./routers/itemRouter.js";
import excelItemRouter from "./routers/excelItemRouter.js";


const app = express(); //cria um servidor
app.use(cors());
const port2 = 4000;

app.use(express.json())
app.use(userRouter)
app.use(itemRouter)
app.use(excelItemRouter)

app.listen(port2, () => {
    console.log(`...Servidor rodando em http://localhost:${port2}`);
  });
