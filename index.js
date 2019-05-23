import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import chalk from 'chalk';
import { createLogger, format, transports } from 'winston';
// import busboy from 'connect-busboy';
import auth from './src/api/middleware/authentication/authenticate';
import userRouter from './src/api/routes/user';

dotenv.config();

const logger = createLogger({
  level: 'debug',
  format: format.simple(),
  transports: [new transports.Console()]
});

const port = process.env.PORT || 5000;

const app = express();

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(busboy());

app.use(express.static(`${__dirname}/public`));
app.use(auth.initialize());
app.use('/api/users', userRouter);

app.get('/', (req, res) => res.status(200).send({
  status: 'connection successful',
  message: 'Welcome to Boiler Plate!'
}));

app.get('*', (req, res) => res.status(200).send({
  status: 'fail',
  message: 'Route not found'
}));

app.listen(port, () => {
  logger.debug(`Server running on port ${chalk.blue(port)}`);
});

export default app;
