import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Services from "../components/Services";
import Technologies from "../components/Technologies";
import { Container } from "../styles/index";

export default function Home() {
  return (
    <>
      <Head>
        <title>Douglas Munaro</title>
        <link rel="icon" href="/icon.png" />
      </Head>
      <Container>
      <Header />
      <About />
      <Technologies />
      <Services />
      <Contact />
      <Footer />
    </Container>
    </>
    
  );
}
