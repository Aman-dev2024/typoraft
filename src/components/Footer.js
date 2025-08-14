import React from 'react';

export default function Footer({ mode }) {
  return (
    <div
      className="accordion accordion-flush"
      id="accordionFlushExample"
      style={{
        marginTop: "50px",
        backgroundColor: mode === "dark" ? "#222" : "#fff",
        color: mode === "dark" ? "#fff" : "#222"
      }}
    >
      <div
        className="accordion-item"
        style={{
          backgroundColor: mode === "dark" ? "#222" : "#fff",
          color: mode === "dark" ? "#fff" : "#222"
        }}
      >
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseOne"
            style={{
              backgroundColor: mode === "dark" ? "#222" : "#fff",
              color: mode === "dark" ? "#fff" : "#222"
            }}
          >
            Accordion Item #1
          </button>
        </h2>
        <div
          id="flush-collapseOne"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionFlushExample"
          style={{
            backgroundColor: mode === "dark" ? "#222" : "#fff",
            color: mode === "dark" ? "#fff" : "#222"
          }}
        >
          <div
            className="accordion-body"
            style={{
              backgroundColor: mode === "dark" ? "#222" : "#fff",
              color: mode === "dark" ? "#fff" : "#222"
            }}
          >
            Placeholder content for this accordion.
          </div>
        </div>
      </div>

      <div
        className="accordion-item"
        style={{
          backgroundColor: mode === "dark" ? "#222" : "#fff",
          color: mode === "dark" ? "#fff" : "#222"
        }}
      >
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseTwo"
            style={{
              backgroundColor: mode === "dark" ? "#222" : "#fff",
              color: mode === "dark" ? "#fff" : "#222"
            }}
          >
            Accordion Item #2
          </button>
        </h2>
        <div
          id="flush-collapseTwo"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionFlushExample"
          style={{
            backgroundColor: mode === "dark" ? "#222" : "#fff",
            color: mode === "dark" ? "#fff" : "#222"
          }}
        >
          <div
            className="accordion-body"
            style={{
              backgroundColor: mode === "dark" ? "#222" : "#fff",
              color: mode === "dark" ? "#fff" : "#222"
            }}
          >
            Placeholder content for this accordion.
          </div>
        </div>
      </div>

      <div
        className="accordion-item"
        style={{
          backgroundColor: mode === "dark" ? "#222" : "#fff",
          color: mode === "dark" ? "#fff" : "#222"
        }}
      >
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseThree"
            style={{
              backgroundColor: mode === "dark" ? "#222" : "#fff",
              color: mode === "dark" ? "#fff" : "#222"
            }}
          >
            Accordion Item #3
          </button>
        </h2>
        <div
          id="flush-collapseThree"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionFlushExample"
          style={{
            backgroundColor: mode === "dark" ? "#222" : "#fff",
            color: mode === "dark" ? "#fff" : "#222"
          }}
        >
          <div
            className="accordion-body"
            style={{
              backgroundColor: mode === "dark" ? "#222" : "#fff",
              color: mode === "dark" ? "#fff" : "#222"
            }}
          >
            Placeholder content for this accordion.
          </div>
        </div>
      </div>
    </div>
  );
}
