import Landing from '../components/Landing'
import About from '../components/About'
import Tech from '../components/Tech'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Head from 'next/head'

export default function Home({ data }) {

  return (
    <>
      <Head>
        <title>Performant Web Development</title>
        <meta name="description" content="Performant Web Development Services. Solving your business problems with technology." />
      </Head>
      <Landing />
      <About />
      <Tech />
      <Projects projects={data}/>
      <Contact />
    </>
  );
}

export async function getStaticProps() {

  const GET_ALL_PROJECTS = `
  query {
    allProject{
      title
      url
      description
      tech1
      tech1Description
      tech2
      tech2Description
      tech3
      tech3Description
      tech4
      tech4Description
    }
  }
`;

  async function gql(query: String) {
    const res = await fetch('https://dc0l7tpj.api.sanity.io/v1/graphql/production/default', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query
      })
    });
    return res.json();
  }

  const response = await gql(GET_ALL_PROJECTS)
  const projects = response.data.allProject.reverse()

  return {
    props: {
      'data': projects
    },
  }

}