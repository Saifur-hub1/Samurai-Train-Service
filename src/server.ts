import express, { Express, Request, Response, NextFunction } from 'express';
import connectDB from './DatabaseConnection/db.js';
import routes from './routes/index.js';
import morgan from 'morgan';

const port = 3000;

const app: Express = express();

app.use(morgan('combined'));
app.use(express.json());
app.use(routes);

// Error handling middleware with proper types
app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.log(err);
  const message = err.message ? err.message : 'Server Error Occurred';
  const status = (err as any).status ? (err as any).status : 500;

  res.status(status).json({ message });
});

connectDB('mongodb://localhost:27017/SamuraiTrainService')
  .then(() => {
    console.log('Database Connected');
    app.listen(port, () => {
      console.log(`Server is opened on port ${port}`);
    });
  });
