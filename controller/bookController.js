import { createBook, getAllBooks,getBookById,updateBookById,deleteById } from "../service/bookService.js"

export async function createBookController(req, res) {
    try{
        const {title, author, year, description, price} = req.body

        const newBook = await createBook(
            title, author, year, description, price
        )
        res.status(201).json(newBook)
    }catch(error){

        if(error.name === "ValidationError")
        return res.status(400).json({
            message: error.message
        })

        res.status(500).json({
            message: "Ошибка при добавление книги"
        })
    }
    
}

export async function getBookController(req, res){
    try{
        const books = await getAllBooks()

        res.status(200).json(books)
    }catch(error){
        res.status(500).json({
            message: "Ошибка при получение книг"
        })
    }
}

export async function getBookByIdController(req, res) {
    try {
        const id = req.params.id

        const book = await getBookById(id)

        if (!book) {
            return res.status(404).json({
                message: "Книга не найдена"
            })
        }

        res.status(200).json(book)

    } catch (error) {
        console.log("ОШИБКА:", error)

        res.status(500).json({
            message: "Ошибка при поиске книги"
        })
    }
}


export async function updateBookController(req,res) {
    try{
        const id = req.params.id
        const data = req.body

        const updatedBook = await updateBookById(id, data)

        if(!updatedBook){
            return res.status(404).json({
                message: "Книга не найдена"
            })
        }
        res.status(200).json(updatedBook)
    }catch(error){
        if (error.name === "ValidationError" || error.name ==="CastError"){
             return res.status(400).json({
                message: error.message
            })
        }
        res.status(500).json({
            message: "Ошибка при изменении книги"
        })
    }
}



export async function deleteByidController(req,res) {
    try{
    
    const id = req.params.id

    const deleteBook = await deleteById(id)

    if(!deleteBook){
        return res.status(404).json({
                message: "Книга не найдена"
            })
    }
    
    res.status(200).json(deleteBook)

    }catch(error){
        if(error.name === "CastError"){
            return res.status(400).json({
                message: "Неправильно формат ID"
            })
        }
        res.status(500).json({
            message: "Ошибка при удалении книги"
        })
    }
}


