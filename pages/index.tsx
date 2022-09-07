import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import UploadImages from '../components/upload'

const Home: NextPage = () => {
  return (
    <div>
      <UploadImages />
    </div>
  )
}

export default Home
