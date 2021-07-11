import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { QAContext } from "../context/useContext";
import { ServiceManager } from "../services/service-layer";

function AddQuestion(props: any) {
  // const [id, setId] = useState("");
  const { dispatch } = useContext(QAContext);
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [description, setDescription] = useState("");
  const [cover, setCover] = useState("");
  const history = useHistory();

  const service = new ServiceManager();

  function handleIdChange(event: any) {
    setId(event.target.value);
  }

  function handleTitleChange(event: any) {
    setTitle(event.target.value);
  }
  function handleAuthorChange(event: any) {
    setAuthor(event.target.value);
  }
  function handlePriceChange(event: any) {
    setPrice(event.target.value);
  }
  function handleRatingChange(event: any) {
    setRating(event.target.value);
  }
  function handleDescriptionChange(event: any) {
    setDescription(event.target.value);
  }
  function handleCoverChange(event: any) {
    setCover(event.target.value);
  }
  function handleSubmit() {
    // event.preventDefault();
    const question = {
      // id: id,
      title: title,
      author: author,
      price: price,
      rating: rating,
      description: description,
      cover: cover,
    };
    let token = "Bearer " + localStorage.getItem("login");
    service.addQuestions(dispatch, question, token);
  }

  return (
    <div className="question-form">
      <form className="form-area">
        <h2>Add New Question</h2> <hr />
        <br />
        <div>
          <label htmlFor="title">Id : </label>
          <input
            type="text"
            name="id"
            placeholder="question id"
            value={id}
            onChange={handleIdChange}
            required
          />
        </div>
        <br />
        <div>
          <label htmlFor="title">Title : </label>
          <input
            type="text"
            name="title"
            placeholder="question title"
            value={title}
            onChange={handleTitleChange}
            required
          />
        </div>
        <br />
        <div>
          <label htmlFor="author">Author : </label>
          <input
            type="text"
            name="author"
            placeholder="question author"
            value={author}
            onChange={handleAuthorChange}
            required
          />
        </div>
        <br />
        <div>
          <label htmlFor="price">Price : </label>
          <input
            type="text"
            name="price"
            placeholder="question price"
            value={price}
            onChange={handlePriceChange}
            required
          />
        </div>
        <br />
        <div>
          <label htmlFor="rating">Rating : </label>
          <input
            type="text"
            name="rating"
            placeholder="question rating"
            value={rating}
            onChange={handleRatingChange}
            required
          />
        </div>
        <br />
        <div>
          <label htmlFor="description">Description : </label>
          <textarea
            name="description"
            placeholder="Description"
            value={description}
            onChange={handleDescriptionChange}
            required
          ></textarea>
        </div>
        <br />
        <div>
          <label htmlFor="cover">Cover : </label>
          <input
            type="text"
            name="cover"
            placeholder="question cover"
            value={cover}
            onChange={handleCoverChange}
            required
          />
        </div>
        <br />
        <div>
          <button
            id="add-button"
            type="submit"
            onClick={() => {
              handleSubmit();
              history.push("/questions");
            }}
          >
            ADD
          </button>
        </div>
        <br />
      </form>
    </div>
  );
}

export { AddQuestion };
