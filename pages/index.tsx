import Landing from '../components/Landing';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Performant Web Development</title>
        <meta></meta>
      </Head>
      <Landing />
      <About />
      <Projects />
      <Contact />
    </>
  );
}