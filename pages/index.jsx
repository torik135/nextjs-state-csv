import Head from 'next/head'
import Container from '../components/Container'
import DataContext from '../context/DataContext'

const Home = () => {


  return (
    <>
      <Head>
        <title>Save To CSV</title>
      </Head>
      
      <DataContext>
        <Container/>
      </DataContext>
	  </>
  )
}

export default Home
