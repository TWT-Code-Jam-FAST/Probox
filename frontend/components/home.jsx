import React from "react";

export default function HomePageMain() {
  return (
    <>
      <div className="highlight-clean">
        <div className="container">
          <button
            className="btn btn-primary"
            type="button"
            style={{
              background: "var(--cyan)",
              borderStyle: "none"
            }}
          >
            Switch Theme
          </button>
        </div>
        <div className="container">
          <div className="intro">
            <h2 className="text-center">Probox</h2>
            <p className="text-center">
              Nunc luctus in metus eget fringilla. Aliquam sed justo ligula.
              Vestibulum nibh erat, pellentesque ut laoreet vitae.{" "}
            </p>
          </div>
          <div className="buttons">
            <a
              className="btn btn-primary"
              role="button"
              href="#"
              style={{
                background: "#eaaf0f"
              }}
            >
              Try the compiler
            </a>
            <button
              className="btn btn-light"
              type="button"
              style={{
                background: "var(--cyan)"
              }}
            >
              try stack overflow
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
