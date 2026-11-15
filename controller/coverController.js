
import { saveCover } from "../service/coverService.js"

export async function uploadCoverController(req, res) {
    try {
        if (!req.files || !req.files.cover) {
            return res.status(400).json({
                message: "Фотография не отправлена"
            })
        }

        const file = req.files.cover


        if (Array.isArray(file)) {
            return res.status(400).json({
                message: "Отправьте только одну фотографию"
            })
        }

        const coverPath = await saveCover(file)

        res.status(201).json({
            message: "Обложка успешно загружена",
            cover: coverPath
        })

    } catch (error) {
        if (error.message === "Недопустимый формат изображения") {
            return res.status(400).json({
                message: error.message
            })
        }

        console.error("Ошибка загрузки:", error)

        res.status(500).json({
            message: "Ошибка при загрузке обложки"
        })
    }
}
