import React from "react";
import Navigation from "./components/Navigation";
import Landing from "./components/Landing";
import Show from "./components/Show";
import PinnedSection from "./components/PinnedSection";

const App = () => {
  return (
    <div className="min-h-screen w-full relative bg-white overflow-x-hidden">
      <Navigation />
      <Landing />
      <Show />
      {/* <PinnedSection /> */}
    </div>
  );
};

export default App;
