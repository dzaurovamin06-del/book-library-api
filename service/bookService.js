import Book from "../model/bookModel.js"

export async function createBook(title, author, year, description, price) {
    const newBook = await Book.create({
        title,
        author,
        year,
        description,
        price
    })
    return newBook
}

export async function getAllBooks() {
    const books  = await Book.find()

    return books 
}

export async function getBookById(id) {
    const book = await Book.findById(id)
    return book
}


export async function updateBookById(id, data) {
    const updateBook = await Book.findByIdAndUpdate(
        id,
        data,
        {
            new:true,
            runValidators:true
        }
    )

    return updateBook
}


export async function deleteById(id) {
    const updateBook = await Book.findByIdAndDelete(id)

    return updateBook
}
