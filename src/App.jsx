import About from "./components/about";
import Hero from "./components/Hero";

const App = () => {
  return (
    <main className="relative w-screen min-h-screen overflow-x-hidden">
      <Hero />
      <About />
    </main>
  );
};

export default App;
