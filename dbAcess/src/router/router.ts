import { Router } from "express";   
import {controllerPostUser} from '../controllers/controllerPostUser';
const URL_PATH = require('../appsettings.json');
export class RouterUser extends controllerPostUser
{
    public async userPostData(Router:Router):Promise<Router>{
        Router.get(URL_PATH[0].PATH.APP_DIR+URL_PATH[0].PATH.URL+"/"+URL_PATH[0].PATH.URL,  this.postUser);
        return Router;


    }
}