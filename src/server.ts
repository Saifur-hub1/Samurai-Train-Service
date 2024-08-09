import express, {Express, Request, Response, NextFunction} from 'express'
import connectDB from './DatabaseConnection/db.js';
import routes from './routes/index.js';
import morgan from 'morgan'
  
const port = 3000;
 
const app: Express = express();

app.use(morgan('combined'))
app.use(express.json());
app.use(routes);

app.get("/", (req: Request, res: Response) => {
  res.send(`Hello this is home router`);
})

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.log(err);
  const message = err.message ? err.message : 'Server Error Occured';
  const status = err.status ? err.status : 500;

  res.status(status).json({ message });
})

connectDB('mongodb://localhost:27017/SamuraiTrainService')
  .then(() => {
    console.log('Database Connected');
    app.listen(port, () => {
      console.log(`Server is opened on port ${port}`);
    })
  })