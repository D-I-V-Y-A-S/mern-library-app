import React from 'react'

const BookComponent = ({book}) => {
  return(
  <div className="card">
  <div className="text-container">
    <h3>{book.bookName}</h3>
    <p className="status">
      ({book.genre})
    </p>
    <p className="status">
      ISBN : {book.ISBN}
    </p>
    <p className="title">Written by</p>
    <p className='author'>{book.authorName}</p>
    <p className="availability">{book.availability}</p>
  </div>
</div>
)
}

export default BookComponent