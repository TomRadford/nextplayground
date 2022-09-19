import Head from 'next/head'
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function ServerSideRenderedPage({ data }) {
  return (
    <Layout>
      <Head>
        <title>Server Side Render with getServerSideProps</title>
      </Head>
      <main className={utilStyles.headingMd}>
        <h2>Server Side Render with getServerSideProps from api:</h2>
        <p>{data.value}</p>
      </main>
    </Layout>
  )
}

//Server Side Rendering
export async function getServerSideProps(context) {
  console.log(`Fetching new chuck norris joke for SSR`)
  const req = await fetch('https://api.chucknorris.io/jokes/random')
  const data = await req.json()
  return {
    props: { data },
  }
}
