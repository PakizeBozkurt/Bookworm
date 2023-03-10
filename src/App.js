import React from "react";
import Form from "./Form";

let userIsRegistered = true;

function App() {
  return (
    <div className="container">
      <h1>Bookworm Library</h1>
      <Form isRegistered={userIsRegistered} />
    </div>
  );
}

export default App;
