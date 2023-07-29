import React from "react";

export default function Alert(props) {
  const capital = (word) => {
    return word[0].toUpperCase() + word.slice(1);
  };
  return (
    <div
      className="container"
      style={{ transition: "1s ease", maxWidth: "400px", height: "50px" }}
    >
      {props.alert && (
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{capital(props.alert.type)}</strong>: {props.alert.msg}
        </div>
      )}
    </div>
  );
}
