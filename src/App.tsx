import React from "react";

// components
import Header from "./components/Header";
import HomePage from "./pages/Home";

const App: React.FC = () => {
  return (
    <div className="App">
      <main>
        <Header />
        <div className="mb-36 mt-2" />
        <HomePage />
      </main>
    </div>
  );
};

export default App;
