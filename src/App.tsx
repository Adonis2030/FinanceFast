import React from "react";

// components
import Header from "./components/Header";
import HomePage from "./pages/Home";

const App: React.FC = () => {
  return (
    <div className="App bg-[#F9F9F9]">
      <main>
        <Header />
        <div className="mb-36 mt-2 max-md:mb-20" />
        <HomePage />
      </main>
    </div>
  );
};

export default App;
