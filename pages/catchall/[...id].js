import Layout from '../../components/layout'
export default function CatchAll({ idToShow }) {
  console.log(idToShow)
  return (
    <Layout>
      <div>
        {idToShow[0]} {idToShow[1]}
      </div>
    </Layout>
  )
}

export function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          id: ['hi', 'mom'],
        },
      },
    ],
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  return {
    props: {
      idToShow: params.id,
    },
  }
}
