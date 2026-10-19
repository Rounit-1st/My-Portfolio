import { Navbar, Hero, About, Works, Profiles, Contact, Footer } from "./components";

const App = () => {
  return (
    <div className="relative z-0 bg-[#050816] text-[#f1f5f9] min-h-screen selection:bg-sky-500/30 selection:text-sky-200">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Works />
        <Profiles />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
