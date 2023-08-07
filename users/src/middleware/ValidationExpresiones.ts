
import { Server } from 'socket.io';
import { Response,Request,NextFunction,ErrorRequestHandler,  } from 'express';
function changeName(data: string) {
	return function <T extends { new(...args: any[]): {} }>(constructor: T) {
		return class extends constructor {
			name = data;
		}
	}
}

@changeName('ValidationExpresiones')
export class ValidationExpresiones {
    public  verifyDataAccount(req:Request,res:Response,next:NextFunction){
        try {

            //verify username and password
            if(req.body.name==="" && req.body.password==="" && req.body.email===""){
               return res.status(400).json({
                    message: "Username and password are required"
                })
            }
            // expresiones regular expression
            const regex = /^[a-zA-Z0-9]+$/;
            if(!regex.test(req.body.name)){
                return res.status(400).json({
                    message: "Username can only contain letters and numbers"
                })
            }
            if(req.body.password.length<6){
                return res.status(400).json({
                    message: "Password must be at least 6 characters long"
                })
            }
            // expresiones regular expression email
            const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                            if(!regexEmail.test(req.body.email)){
                                return res.status(400).json({
                                    message: "Email is not valid"
                                })
                            }
            next()
            
          
        } catch (error) {
            return res.status(500).json({
                message: error
            })
            
        }
    
    }

}

    
