import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Alert from '../components/alert'
import Date from '../components/date'

export default function Home({ pokeList, allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm Tom Radford,</p>
        <p>This be a blog to learn the workings of NextJS :)</p>
        <p>
          <Link href="/ssr">SSR example</Link>
        </p>
        <p>
          <Link href="/csr">CSR "typical SPA-style" example</Link>
        </p>
        <Alert type="success">
          <p>Nice!</p>
        </Alert>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blogs</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`posts/${id}`}>{title}</Link>
              <br />
              {id}
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2 className={utilStyles.headingLg}>API test</h2>
        <h3 className={utilStyles.headingMd}>
          This is static generation from an API:
        </h3>
        {pokeList.results.map((poke) => (
          <p key={poke.name}>{poke.name}</p>
        ))}
      </section>
    </Layout>
  )
}
//Static Generation
export async function getStaticProps() {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon/')
  const pokeList = await res.json()
  const allPostsData = getSortedPostsData()

  return {
    props: { pokeList, allPostsData },
  }
}
