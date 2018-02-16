import * as express from 'express';
import * as bodyParser from 'body-parser';
import { RegisterRoutes } from '../build/routes';

import './controllers';

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

RegisterRoutes(app);

app.listen(3000);
