import "dotenv/config"
import fileUpload from "express-fileupload"
import express from "express"
import {connectDB} from "./config/db.js"
import router from "./router/bookRouter.js"
const app = express()

app.use(express.json())

app.use(fileUpload({
    limits: {
        fileSize: 5 * 1024 * 1024
    },
    abortOnLimit:true
}))

app.use("/uploads", express.static("uploads"))

app.use("/api/books", router)
async function startServer() {
    try{
        await connectDB()

        app.listen(5000, () => {
            console.log("Сервер запущен успешно")            
        })
    }catch (error){
        console.log("Ошибка:", error.message);
        
    }

    
}
startServer()
