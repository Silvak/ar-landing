import Layout from "@/components/Layout";
import Hero from "@/components/section/Hero";
import Header from "@/components/Header";
import About from "@/components/section/About";
import Contact from "@/components/section/Contact";
import Projects from "@/components/section/Projects";
import Company from "@/components/section/Company";
import Tester from "@/components/section/Tester";
import Footer from "@/components/Footer";
import Banner from "@/components/section/Banner";

function App() {
  return (
    <body>
      <Header />

      <Layout>
        <Hero />
        <About />
        <Projects />
      </Layout>

      <Banner />

      <Layout>
        <Company />
        <Tester />
      </Layout>

      <Contact />
      <Footer />
    </body>
  );
}

export default App;
