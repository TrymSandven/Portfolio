import "./App.css";
import {
  Navbar,
  Header,
  Skill,
  Download,
  Faq,
  Footer,
} from "./components/index.js";

function App() {
  return (
    <main>
      <header className="header-bg">
        <Navbar />
        <Header />
      </header>
      <Skill />
      <Faq />
      <Download />
    </main>
  );
}

export default App;
