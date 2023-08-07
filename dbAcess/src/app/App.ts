import express from 'express';
import { ServerRoutes } from '../libs/ServerRoutes';
const URL_PATH = require('../appsettings.json');
console.log(URL_PATH);

const AppServer: express.Application = express();
export class App  {

    public async configMiddleware():Promise<string[]|any>|Promise<any> {
        AppServer.use(express.json());
        AppServer.use(express.urlencoded({ extended: true,
            limit: '50mb',
            parameterLimit: 5000,
            inflate: true
         }));
         AppServer.use(express.static('public'));
         AppServer.use(express.static('uploads'));
         AppServer.use(express.static('uploads/images'));
         AppServer.use(express.static('uploads/videos'));
         AppServer.use(express.static('uploads/audio'));
         AppServer.use(express.static('uploads/documents'));
         AppServer.use(express.static('uploads/files'));
         AppServer.use(await new ServerRoutes()?.RouterHome(express()))
        return AppServer;
    }
    public listen():any{
        this.configMiddleware();
        AppServer.listen(URL_PATH[0].PORT.PORT, () => {
            console.log(`Server is running on port ${URL_PATH[0].PORT.PORT} : ${URL_PATH[0].PORT.URL}`);
        });
        return AppServer;
    }

}