import express, { Request, Response } from 'express'
import { productRouter } from './modules/product/product.route';
const app = express();


//parsers
app.use(express.json());


app.use("/api/products",productRouter);



app.get('/', (req:Request, res:Response) => {
  res.send('Hello next level!')
})

export default app;