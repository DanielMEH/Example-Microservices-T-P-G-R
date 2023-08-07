import express from 'express';
import { ServerRoutes } from '../libs/ServerRoutes';
import { Server } from '../types/Types';
import { config } from '../config/config';
const URL_PATH = require('../appsettings.json');
const AppServer: express.Application = express();
export class App  {

    public async configMiddleware():Promise<Server> {
        AppServer.use(express.json());
        AppServer.use(express.urlencoded({ extended: true,
            limit: '50mb',
            parameterLimit: 5000,
            inflate: true
         }));
        
         AppServer.use(await new ServerRoutes()?.RouterHome(express()))
        return AppServer;
    }
    public listen():Server{
        this.configMiddleware();
        AppServer.listen(config.PORT_SERVER || URL_PATH[0].PORT.PORT, () => {
            console.timeLog(`Server is running on port http://localhost:${config.PORT_SERVER?config.PORT_SERVER:URL_PATH[0].PORT.URL}`);
        });
        return AppServer;
    }

}