import React from "react";

const Book = (props) => {
  const { img, title, author } = props;
  // attribute, eventHandler
  // onClick, onMouseHover
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert("Hello World!");
  };
  const complexHandler = (author) => {
    console.log(author);
  };
  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt="" />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        Click Me!
      </button>
      <button type="button" onClick={() => complexHandler(author)}>
        More Complex Button
      </button>
    </article>
  );
};

export default Book;
