import Head from 'next/head'
import Header from "./components/Header"
import Nav from "./components/Nav"
import Results from "./components/Results"
import requestNext from './utils/requestNext'


export default function Home  ({results}) {
  return (
    <div className="">
      <Head>
        <title>Genesasia</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/> 
      <Nav/>
      <Results results={results}/>
    </div>
  )
};

export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const request = await fetch(
    `https://api.themoviedb.org/3${requestNext[genre]?.url || 
    requestNext.fetchTrending.url}`)

    const res = await request.json();

    return {
      props: {
        results: res.results,
      },
    };
}
