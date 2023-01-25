import "reflect-metadata"
import "express-async-errors"
import express from 'express'
import handleError from './errors/AsyncError';
import ProjectRoutes from './routes/projects.routes';

const app = express();
app.use(express.json());

app.use('/projects', ProjectRoutes);

app.use(handleError)

export default app;