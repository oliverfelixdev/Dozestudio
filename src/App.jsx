import React from "react";
import Navigation from "./components/Navigation";
import Landing from "./components/Landing";

const App = () => {
  return (
    <div className="min-h-screen w-full relative bg-white">
      <Navigation />
      <Landing />
    </div>
  );
};

export default App;
