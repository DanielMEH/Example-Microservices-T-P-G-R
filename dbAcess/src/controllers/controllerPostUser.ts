
export class controllerPostUser {

    protected  async postUser(req: any, res: any) {
        try {
            const user = {
                name:"Juan",
                email:"kenaa@example.com",
                password:"123456"
            }
            return await res.status(201).json(user)
        } catch (error) {
            return res.status(500).json(error)
        }
    }
}