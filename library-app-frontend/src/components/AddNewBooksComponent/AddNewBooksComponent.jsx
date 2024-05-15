import React, { useState } from 'react'
import './AddNewBooksComponent.css'
import axios from 'axios'

const AddNewBooksComponent = () => {
  const [bookInfo, setBookInfo] = useState({
    bookName: '',
    authorName: '',
    ISBN: '',
    genre: '',
  });

  const inputHandler = (event) => {
    const { name, value } = event.target
    setBookInfo({ ...bookInfo, [name]: value })
  }
  const { bookName, authorName, ISBN, genre } = bookInfo;

  const formSubmitHandler = (event) => {
    event.preventDefault();

    axios
      .post(`http://localhost:3500/api/v1/books/`, bookInfo)
      .then((response) => {
        console.log(response)
        alert(`${response.data.bookName} is added successfully.`)
        window.location.href = '/'
      })
      .catch((error) => {
        if (error.response) {
          alert(`(Status : ${error.response.status}) ${error.response.data.message}`);
        }
      })

  }


  return (
    <form className='form-container' onSubmit={formSubmitHandler}>
      <h2>Adding a new book</h2>

      <div className='form-group'>
        <label>Book Name</label>
        <input
          type='text'
          name="bookName"
          placeholder='Enter the book name'
          value={bookName}
          onChange={inputHandler}
          required
        />
      </div>

      <div className='form-group'>
        <label>Author Name</label>
        <input
          type='text'
          name="authorName"
          className='form-control'
          placeholder='Enter the author name'
          value={authorName}
          onChange={inputHandler}
          required
        />
      </div>

      <div className='form-group'>
        <label>ISBN Number</label>
        <input
          type='text'
          name="ISBN"
          pattern='[0-9]{13}'
          placeholder='Enter the ISBN Number'
          value={ISBN}
          onChange={inputHandler}
          required
        />
      </div>

      <div className='form-group'>
        <label>Genre</label>
        <select
          type='text'
          name="genre"
          placeholder='Enter the genre'
          value={genre}
          onChange={inputHandler}
          required
        >
          <option value="">--select--</option>
          <option value="Fiction">Fiction</option>
          <option value="Non-Fiction">Non-Fiction</option>
          <option value="Mystery">Mystery</option>
          <option value="Romance">Romance</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Historical Fiction">Historical Fiction</option>
          <option value="Thriller">Thriller</option>
        </select>
      </div>

      <div>
        <button type='submit'>Add</button>
      </div>
    </form>
  );
};

export default AddNewBooksComponent;
