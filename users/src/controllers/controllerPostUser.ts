import {NextFunction,Response,Request } from "express"
export class controllerPostUser {

    protected  async postUser(req:Request,res:Response,next:NextFunction):Promise<Response> {
        try {
            type User = {
                name:string;
                email:string;
                password:string;
            }
            const user:User = {
                name:req.body.name,
                email:req.body.email,
                password:req.body.password, 
            }
           
            next()
            return  res?.status(201).json(user)!
        } catch (error) {
            return res.status(500).json(error)
        }
    }
}