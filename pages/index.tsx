import Landing from '../components/Landing';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <html lang='en' />
        <title>Performant Web Development</title>
        <meta name="description" content="Performant Web Development Services. Solving your business problems with technology." />
      </Head>
      <Landing />
      <About />
      <Projects />
      <Contact />
    </>
  );
}