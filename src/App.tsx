import "./index.css";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Card } from "./components/Card";

export function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Card />
      <Footer />
    </div>
  );
}

export default App;
