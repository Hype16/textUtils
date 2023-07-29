import React, { useState } from "react";

export default function TextForms(props) {
  const [text, setText] = useState("Enter Here !");
  const [isCopied, setIsCopied] = useState(false);

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleClearClick = () => {
    setText("");
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 1000); // Reset "isCopied" to false after 1 seconds
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div
        className="container p-3 my-3  rounded-3"
        style={{
          backgroundColor: props.mode === "light" ? "#cfe2ff" : "#3a3b3c",
          color: props.mode === "light" ? "#052c65" : "#cfe2ff",
        }}
      >
        <p className="h3">
          <strong>
            {
              text.split(" ").filter((element) => {
                return element.length !== 0;
              }).length
            }{" "}
            words and {text.length} characters.
          </strong>
        </p>
        <p className="h5">
          <strong>
            {(
              0.008 *
              text.split(" ").filter((element) => {
                return element.length !== 0;
              }).length
            ).toFixed(2)}{" "}
            minutes read.
          </strong>
        </p>
      </div>
      <div
        className="container my-4"
        style={{
          color: props.mode === "light" ? "#fff" : "white",
        }}
      >
        <h3
          className="mb-2"
          style={{ color: props.mode === "light" ? "black" : "white" }}
        >
          {props.heading}
        </h3>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="6"
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#3a3b3f",
              color: props.mode === "light" ? "black" : "white",
              border:
                props.mode === "light"
                  ? "1px solid #3a3b3c"
                  : "1px solid #0dcaf0",
            }}
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          onClick={handleUpClick}
          className="btn btn-primary mx-1 my-1"
        >
          Covert to UPPERCASE
        </button>
        <button
          disabled={text.length === 0}
          onClick={handleLoClick}
          className="btn btn-primary mx-1 my-1"
        >
          Covert to lowercase
        </button>
        <button
          disabled={text.length === 0}
          onClick={handleCopyClick}
          className="btn btn-primary mx-1 my-1"
        >
          {isCopied ? "Copied" : "Copy to Clipboard"}
        </button>
        <button
          disabled={text.length === 0}
          onClick={handleClearClick}
          className="btn btn-primary mx-1 my-1"
        >
          Clear All !
        </button>
      </div>

      <div className="container my-4">
        <div
          className="card"
          style={{
            backgroundColor: props.mode === "light" ? "white" : "#3a3b3f",
            color: props.mode === "light" ? "black" : "white",
            border:
              props.mode === "light"
                ? "1px solid #3a3b3c"
                : "1px solid #0dcaf0",
          }}
        >
          <div
            className="card-header"
            style={{
              borderBottom:
                props.mode === "light"
                  ? "1px solid #3a3b3c"
                  : "1px solid #0dcaf0",
            }}
          >
            +Preview
          </div>
          <div className="card-body">
            <blockquote className="blockquote mb-0">
              <p>{text}</p>
            </blockquote>
          </div>
        </div>
      </div>
    </>
  );
}
