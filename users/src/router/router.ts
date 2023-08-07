import {controllerPostUser} from '../controllers/controllerPostUser';
import { ValidationExpresiones } from "../middleware/ValidationExpresiones";
import { Router,Response,Request } from "express";   
const URL_PATH = require('../appsettings.json');

const validationDataExpresiones = new ValidationExpresiones();

export class RouterUser extends controllerPostUser 
{
    public async userPostData(Router:Router):Promise<Router>{
        Router.get(URL_PATH[0].PATH.APP_DIR+URL_PATH[0].PATH.URL+"/register",
        validationDataExpresiones.verifyDataAccount,
        this.postUser);
        Router.get(URL_PATH[0].PATH.APP_DIR+URL_PATH[0].PATH.URL+"/login",
        validationDataExpresiones.verifyDataAccount,
        this.postUser);
        Router.get(URL_PATH[0].PATH.APP_DIR+URL_PATH[0].PATH.URL+"/logout",
        validationDataExpresiones.verifyDataAccount,
        this.postUser);
        Router.get(URL_PATH[0].PATH.APP_DIR+URL_PATH[0].PATH.URL+"/profile",
        validationDataExpresiones.verifyDataAccount,
        this.postUser);
        Router.get(URL_PATH[0].PATH.APP_DIR+URL_PATH[0].PATH.URL+"/forgot",
        validationDataExpresiones.verifyDataAccount,
        this.postUser);
        return Router;


    }
}