import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as errorHandler from "api-error-handler";

import { RegisterRoutes } from '../../build/routes';
import '../controllers';

export class Server {
  public app: express.Express = express();
  private readonly port: number = 3000;

  constructor() {
    this.app.use(this.allowCors);
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(bodyParser.json());
    this.app.use(errorHandler());
    RegisterRoutes(this.app);
  }

  public listen(port: number = this.port): void {
    this.app.listen(3000);
  }

  private allowCors (req: express.Request, res: express.Response, next: express.NextFunction): void {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  }

}
