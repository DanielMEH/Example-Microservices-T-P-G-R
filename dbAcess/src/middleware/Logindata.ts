import jswToken from 'jsonwebtoken';
import { Server } from 'socket.io';
const socket = new Server(4032,{
    cors: {
        origin: [
            'http://localhost:4201',
            'http://localhost:4202',
        ]
    },
    transports: ['websocket']
});

export class Logindata {

    private token: Object
    private username: string
    private password: string

    constructor() {
        this.username = '';
        this.password = '';
        this.token = '';
    }

    public async AuthCuenta(){



        
            console.log('Connected to server');
            socket.emit('auth', { username: String(this.username), password: String(this.password) });
            socket.on('auth', (data: any) => {
                console.log(data);
                this.token = data.token;
            });
            socket.on('disconnect', () => {
                console.log('Disconnected from server');
            });
            socket.on('error', (err: any) => {
                console.log(err);
            });
            socket.on('connect_error', (err: any) => {
                console.log(err);
            });
            socket.on('connect_timeout', (err: any) => {
                console.log(err);
            });
            socket.on('reconnect', (attempt: any) => {
                console.log(attempt);
            });
            socket.on('reconnecting', (attempt: any) => {
                console.log(attempt);
            });
            socket.on('reconnect_attempt', (attempt: any) => {
                console.log(attempt);
            });

        
        
}


}

    
