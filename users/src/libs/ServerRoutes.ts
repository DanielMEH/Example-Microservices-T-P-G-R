import express, {Router} from 'express';
import { RouterUser } from '../router/router';
import { Server } from '../types/Types';
const router:Router = Router();
export class ServerRoutes {

public async RouterHome<Server>(AppServer:express.Application):Promise<Server>{
     AppServer.use(await new RouterUser().userPostData(router));
     return <Server>AppServer;

}

}