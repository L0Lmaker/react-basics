import React from "react";
import ReactDOM from "react-dom";

// function BookList() {
//   return <h4>Hello World!</h4>;
// }

// const BookList = () => {
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("h1", {}, "Yo World!")
//   );
// };

// CSS
import "./index.css";
// Setup Vars
import { data } from "./books.js";
import Book from "./Book";
import { greeting } from "./testing/testing";

function BookList() {
  console.log(greeting);
  return (
    <section className="booklist">
      {data.map((book) => {
        // const { img, title, author } = book;
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

ReactDOM.render(<BookList />, document.getElementById("root"));
