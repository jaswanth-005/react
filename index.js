import React from "react";
import ReactDom from "react-dom/client";
import './style.css';
const BookList = () => {
    return (
    <>
    <Book />
    <Book />
    <Book />
    <Book />.
    </>
    );
};

const Book = () => {
    return (
    <>
    <Title />
    <Author />
    <Image />
    </>
    )
};

const Image = () => {
    return (
    <>
        <h1>Image Placeholder</h1>
    </>
    )
}

const Title = () => {
    return (
    <>
        <h2>Book Title</h2>
    </>
    )
};

const Author = () => {
    return( 
    <>
        <h3>Author</h3>
    </>
    )
}
const root=ReactDom.createRoot(document.getElementById("root"));
root.render(<BookList/>);
export default BookList;