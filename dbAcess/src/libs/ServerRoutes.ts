import express, {Router} from 'express';
import { RouterUser } from '../router/router';
const router:Router = Router();
export class ServerRoutes {

public async RouterHome(AppServer:express.Application):Promise<any>{
     AppServer.use(await new RouterUser().userPostData(router));

     return AppServer;

}

}