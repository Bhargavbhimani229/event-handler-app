// src/App.jsx
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [logs, setLogs] = useState([]);

  const handleLog = (eventName) => {
    setLogs((prev) => [`Event: ${eventName}`, ...prev.slice(0, 9)]);
  };

  return (
    <div className="container py-5">
      <div className="card shadow">
        <div className="card-body">
          <h1 className="card-title mb-4">Simple Event Handler Demo</h1>

          <div
            className="p-3 border bg-light text-center mb-4"
            onClick={() => handleLog("Click")}
            onDoubleClick={() => handleLog("Double Click")}
            onMouseEnter={() => handleLog("Mouse Enter")}
            onMouseLeave={() => handleLog("Mouse Leave")}
            style={{ cursor: "pointer" }}
          >
            Click or Hover Over This Box
          </div>

          <input
            type="text"
            className="form-control mb-3"
            placeholder="Type something..."
            onChange={() => handleLog("Change")}
            onFocus={() => handleLog("Focus")}
            onBlur={() => handleLog("Blur")}
          />

          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleLog("Form Submit");
            }}
          >
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>

          <div className="mt-4">
            <h5>Event Logs:</h5>
            <ul className="list-group" style={{ maxHeight: "200px", overflowY: "auto" }}>
              {logs.map((log, i) => (
                <li key={i} className="list-group-item py-1">
                  {log}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
