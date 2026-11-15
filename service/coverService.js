import fs from "node:fs/promises"
import path from "node:path/posix"
import {v4 as uuidv4} from "uuid"

export async function saveCover(file) {
    const allowedTypes = {
        ".jpg": "image/jpeg",
        ".jpeg": "image/jpeg",
        ".png": "image/png",
        ".webp": "image/webp"
    }

    const extension = path.extname(file.name).toLowerCase()

    if(allowedTypes[extension] !== file.mimetype){
        throw new Error("Недопустимый формат изображения")
    }

    const folder = path.resolve("uploads", "covers")

    await fs.mkdir(folder, {recursive:true})

    const fileName = uuidv4() + extension
    
    const filePath  = path.join(folder, fileName)

    await file.mv(filePath)

    return `/uploads/covers/${fileName}`
}
