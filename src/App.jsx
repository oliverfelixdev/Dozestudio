import { ReactLenis, useLenis } from 'lenis/react'
import Navigation from "./components/Navigation";
import Landing from "./components/Landing";
import Show from "./components/Show";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <ReactLenis root />
        <div className="min-h-screen w-full relative bg-white overflow-x-hidden">
          <Navigation />
          <Landing />
          <Show />
          <div className="h-[60vh] w-screen bg-red-300"></div>
          <Footer />
        </div>
    </>
  );
};

export default App;
