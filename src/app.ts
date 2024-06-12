import express, { Request, Response } from 'express'
import { productRouter } from './modules/product/product.route';
import { orderRouter } from './modules/order/order.route';
const app = express();


//parsers
app.use(express.json());


app.use("/api/products",productRouter);
app.use("/api/orders",orderRouter);



app.get('/', (req:Request, res:Response) => {
  res.send('assignment-2-b3')
})

export default app;