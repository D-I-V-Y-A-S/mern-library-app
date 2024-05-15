const initialData = [
    {
      "bookName": "The Catcher in the Rye",
      "authorName": "J.D. Salinger",
      "ISBN": "9780316769174",
      "genre": "Fiction"
    },
    {
      "bookName": "To Kill a Mockingbird",
      "authorName": "Harper Lee",
      "ISBN": "9780060935467",
      "genre": "Fiction"
    },
    {
      "bookName": "1984",
      "authorName": "George Orwell",
      "ISBN": "9780451524935",
      "genre": "Science Fiction"
    },
    {
      "bookName": "Pride and Prejudice",
      "authorName": "Jane Austen",
      "ISBN": "9780141439518",
      "genre": "Romance"
    },
    {
      "bookName": "The Great Gatsby",
      "authorName": "F. Scott Fitzgerald",
      "ISBN": "9780743273565",
      "genre": "Fiction"
    },
    {
      "bookName": "Moby-Dick",
      "authorName": "Herman Melville",
      "ISBN": "9781853260087",
      "genre": "Adventure"
    },
    {
      "bookName": "Jane Eyre",
      "authorName": "Charlotte Bronte",
      "ISBN": "9780141441146",
      "genre": "Romance"
    },
    {
      "bookName": "The Hobbit",
      "authorName": "J.R.R. Tolkien",
      "ISBN": "9780618260300",
      "genre": "Fantasy"
    },
    {
      "bookName": "The Lord of the Rings",
      "authorName": "J.R.R. Tolkien",
      "ISBN": "9780618640157",
      "genre": "Fantasy"
    },
    {
      "bookName": "Harry Potter and the Philosopher's Stone",
      "authorName": "J.K. Rowling",
      "ISBN": "9780747532743",
      "genre": "Fantasy"
    },
    {
      "bookName": "The Chronicles of Narnia",
      "authorName": "C.S. Lewis",
      "ISBN": "9780064471190",
      "genre": "Fantasy"
    },
    {
      "bookName": "Animal Farm",
      "authorName": "George Orwell",
      "ISBN": "9780452284241",
      "genre": "Satire"
    },
    {
      "bookName": "Brave New World",
      "authorName": "Aldous Huxley",
      "ISBN": "9780060850524",
      "genre": "Science Fiction"
    },
    {
      "bookName": "The Odyssey",
      "authorName": "Homer",
      "ISBN": "9780140449112",
      "genre": "Epic"
    },
    {
      "bookName": "The Divine Comedy",
      "authorName": "Dante Alighieri",
      "ISBN": "9780141195872",
      "genre": "Epic"
    },
    {
      "bookName": "The Grapes of Wrath",
      "authorName": "John Steinbeck",
      "ISBN": "9780143039433",
      "genre": "Fiction"
    },
    {
      "bookName": "Wuthering Heights",
      "authorName": "Emily Bronte",
      "ISBN": "9780141439556",
      "genre": "Gothic"
    },
    {
      "bookName": "Frankenstein",
      "authorName": "Mary Shelley",
      "ISBN": "9780141439471",
      "genre": "Gothic"
    },
    {
      "bookName": "The Picture of Dorian Gray",
      "authorName": "Oscar Wilde",
      "ISBN": "9780141442464",
      "genre": "Gothic"
    },
    {
      "bookName": "Fahrenheit 451",
      "authorName": "Ray Bradbury",
      "ISBN": "9781451673319",
      "genre": "Science Fiction"
    },
    {
      "bookName": "The Alchemist",
      "authorName": "Paulo Coelho",
      "ISBN": "9780062315007",
      "genre": "Fiction"
    },
    {
      "bookName": "Crime and Punishment",
      "authorName": "Fyodor Dostoevsky",
      "ISBN": "9780140449136",
      "genre": "Fiction"
    },
    {
      "bookName": "The Scarlet Letter",
      "authorName": "Nathaniel Hawthorne",
      "ISBN": "9780486280486",
      "genre": "Romance"
    },
    {
      "bookName": "The Adventures of Tom Sawyer",
      "authorName": "Mark Twain",
      "ISBN": "9780486400778",
      "genre": "Adventure"
    },
    {
      "bookName": "One Hundred Years of Solitude",
      "authorName": "Gabriel Garcia Marquez",
      "ISBN": "9780060883287",
      "genre": "Magical Realism"
    },
    {
      "bookName": "Don Quixote",
      "authorName": "Miguel de Cervantes Saavedra",
      "ISBN": "9780060934347",
      "genre": "Adventure"
    },
    {
      "bookName": "Anna Karenina",
      "authorName": "Leo Tolstoy",
      "ISBN": "9780143035008",
      "genre": "Fiction"
    },
    {
      "bookName": "The Count of Monte Cristo",
      "authorName": "Alexandre Dumas",
      "ISBN": "9780140449266",
      "genre": "Adventure"
    },
    {
      "bookName": "War and Peace",
      "authorName": "Leo Tolstoy",
      "ISBN": "9780143039990",
      "genre": "Historical Fiction"
    },
    {
      "bookName": "The Kite Runner",
      "authorName": "Khaled Hosseini",
      "ISBN": "9781594631931",
      "genre": "Fiction"
    },
    {
      "bookName": "The Hobbit",
      "authorName": "J.R.R. Tolkien",
      "ISBN": "9780618260300",
      "genre": "Fantasy"
    },
    {
      "bookName": "The Lord of the Rings",
      "authorName": "J.R.R. Tolkien",
      "ISBN": "9780618640157",
      "genre": "Fantasy"
    },
    {
      "bookName": "Harry Potter and the Sorcerer's Stone",
      "authorName": "J.K. Rowling",
      "ISBN": "9780590353427",
      "genre": "Fantasy"
    },
    {
      "bookName": "The Chronicles of Narnia",
      "authorName": "C.S. Lewis",
      "ISBN": "9780064404990",
      "genre": "Fantasy"
    },
    {
      "bookName": "The Hunger Games",
      "authorName": "Suzanne Collins",
      "ISBN": "9780439023481",
      "genre": "Science Fiction"
    },
    {
      "bookName": "The Girl with the Dragon Tattoo",
      "authorName": "Stieg Larsson",
      "ISBN": "9780307269751",
      "genre": "Mystery"
    },
    {
      "bookName": "The Da Vinci Code",
      "authorName": "Dan Brown",
      "ISBN": "9780307474278",
      "genre": "Mystery"
    },
    {
      "bookName": "Gone Girl",
      "authorName": "Gillian Flynn",
      "ISBN": "9780307588371",
      "genre": "Thriller"
    },
    {
      "bookName": "The Fault in Our Stars",
      "authorName": "John Green",
      "ISBN": "9780525478812",
      "genre": "Young Adult"
    },
    {
      "bookName": "Dune",
      "authorName": "Frank Herbert",
      "ISBN": "9780441172719",
      "genre": "Science Fiction"
    }
]

module.exports = initialData