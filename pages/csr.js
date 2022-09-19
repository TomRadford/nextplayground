import Head from 'next/head'
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import useSWR from 'swr'
import { ErrorBoundary, Suspense, useState } from 'react'

const fetcher = async (url) => {
  const res = await fetch(url)
  return res.json()
}

const useDog = () => {
  const { data, error } = useSWR(
    'https://dog.ceo/api/breeds/image/random',
    fetcher
  )
  return {
    dog: data,
    isLoading: !error && !data,
    isError: error,
  }
}

const DogShower = () => {
  const [imageLoaded, setImageLoaded] = useState(false)
  const { dog, isLoading, isError } = useDog()

  if (isLoading) return <div>Loading API...</div>

  if (isError) return <div>Error loading dog API!</div>

  return (
    <>
      {!imageLoaded && <div>Image loading...</div>}
      <img
        onLoad={() => setImageLoaded(true)}
        src={dog.message}
        style={imageLoaded ? { display: 'block' } : { display: 'none' }}
      />
    </>
  )
}

export default function ClientSideRenderingExample() {
  return (
    <>
      <Head>
        <title>CSR with SWR</title>
      </Head>
      <Layout>
        <h2 className={utilStyles.headingMd}>
          Client-side rendering using SWR
        </h2>
        <DogShower />
      </Layout>
    </>
  )
}
