import Layout from "@/components/Layout";
import Hero from "@/components/section/Hero";
import Header from "@/components/Header";
import About from "./components/section/About";
import Contact from "@/components/section/Contact";

function App() {
  return (
    <body>
      <Header />

      <Layout>
        <Hero />
        <About />

        <Contact />
      </Layout>
    </body>
  );
}

export default App;
