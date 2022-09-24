import express from 'express';
import http from 'http';

import cors from 'cors';
import morgan from 'morgan';

import { ORIGIN_URI, PORT } from './src/config/env';
import indexRoutes from './src/routes/index.routes';

const app = express();
const server = http.createServer(app);

/**
 * Middleware
 */

// morgan: to make logs
app.use(morgan('tiny'));

// cors: to set Cross-origin Resource Sharing policy
app.use(cors({
    origin: ORIGIN_URI,
    // credentials: true,
}));

// parse requests of content-type: application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));
// parse requests of content-type: application/json
app.use(express.json());

/**
 * Routes
 */

app.use('/', indexRoutes);

server.listen(PORT, () => {
    console.info(`Server on http://localhost:${PORT}`);
})