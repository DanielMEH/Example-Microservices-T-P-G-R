import dotenv from "dotenv"

dotenv.config()

export const config = {
    PORT_SERVER: process.env.PORT,
    mongoURI: process.env.MONGO_URI || "mongodb://localhost:27017/test"
}